import { useEffect, useRef } from "react";
import { useTheme } from "../ThemeToggle";
import styles from "./RocketScene.module.css";

const THREE_SRC = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";

let threeLoader;
function loadThree() {
  if (typeof window === "undefined") return Promise.reject(new Error("no window"));
  if (window.THREE) return Promise.resolve(window.THREE);
  if (!threeLoader) {
    threeLoader = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = THREE_SRC;
      s.async = true;
      s.onload = () => resolve(window.THREE);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return threeLoader;
}

/* Rocket palette per theme. In dark mode we keep the original deep-space look
   (white body, charcoal accents). In light mode we mirror it so the rocket
   stays high-contrast against the now-white page background. */
function rocketPalette(theme) {
  if (theme === "light") {
    return {
      body: 0x2c2e3a,       // charcoal body (was the accent in dark)
      accent: 0x111319,     // even darker for nose / band / fins
      smoke: 0x9ba0ae,
      smokeDk: 0x6b7080,
      hemiSky: 0xf2f3f6,
      hemiGround: 0x9ca3b4,
      keyIntensity: 0.55,
      panelBg: 0x2c2e3a,
      panelLine: 0x9ba0ae,
    };
  }
  return {
    body: 0xedeff2,
    accent: 0x2c2e3a,
    smoke: 0xdde0e6,
    smokeDk: 0xc2c6cf,
    hemiSky: 0xffffff,
    hemiGround: 0x5b6080,
    keyIntensity: 0.7,
    panelBg: 0xedeff2,
    panelLine: 0x2c2e3a,
  };
}

const lerp = (a, b, t) => a + (b - a) * t;
const lerpHex = (a, b, t) => {
  const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
  const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
  return (
    (Math.round(lerp(ar, br, t)) << 16) |
    (Math.round(lerp(ag, bg, t)) << 8) |
    Math.round(lerp(ab, bb, t))
  );
};
const hexToCss = (h) => "#" + h.toString(16).padStart(6, "0");
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

function buildRocketScene(THREE, mount, theme) {
  const R = 1.0;
  const TILT = 0.26;
  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let currentP = rocketPalette(theme);
  const COL = currentP;

  const sizeOf = () => ({
    w: Math.max(1, mount.clientWidth),
    h: Math.max(1, mount.clientHeight),
  });
  let { w, h } = sizeOf();

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  renderer.setClearColor(0x000000, 0);
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.domElement.style.display = "block";
  renderer.domElement.style.touchAction = "none";
  renderer.domElement.style.cursor = "grab";
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, w / h, 0.1, 200);

  const hemiLight = new THREE.HemisphereLight(COL.hemiSky, COL.hemiGround, 0.9);
  scene.add(hemiLight);
  const keyLight = new THREE.DirectionalLight(0xffffff, COL.keyIntensity);
  keyLight.position.set(-4, 6, 8);
  scene.add(keyLight);

  const rampData = new Uint8Array([
    180, 180, 180, 255, 222, 222, 222, 255, 255, 255, 255, 255,
  ]);
  const toonRamp = new THREE.DataTexture(rampData, 3, 1, THREE.RGBAFormat);
  toonRamp.minFilter = toonRamp.magFilter = THREE.NearestFilter;
  toonRamp.needsUpdate = true;

  const toon = (color, opts = {}) =>
    new THREE.MeshToonMaterial(
      Object.assign({ color, gradientMap: toonRamp }, opts)
    );

  const panelCanvas = document.createElement("canvas");
  panelCanvas.width = 512;
  panelCanvas.height = 256;
  const paintPanel = (bg, line) => {
    const ctx = panelCanvas.getContext("2d");
    const wpx = panelCanvas.width;
    const hpx = panelCanvas.height;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, wpx, hpx);
    ctx.strokeStyle = line;
    ctx.lineWidth = 3;
    const lines = 6;
    for (let i = 0; i < lines; i++) {
      const x = (i + 0.5) * (wpx / lines);
      ctx.beginPath();
      ctx.moveTo(x, hpx * 0.08);
      ctx.lineTo(x, hpx * 0.92);
      ctx.stroke();
    }
  };
  paintPanel(hexToCss(COL.panelBg), hexToCss(COL.panelLine));
  const panelTex = new THREE.CanvasTexture(panelCanvas);
  panelTex.wrapS = panelTex.wrapT = THREE.RepeatWrapping;
  panelTex.encoding = THREE.sRGBEncoding;
  const MAT = {
    white: toon(COL.body, { map: panelTex }),
    whitePlain: toon(COL.body),
    charcoal: toon(COL.accent),
    glass: toon(0x5c6486),
    smoke: toon(COL.smoke),
    smokeDk: toon(COL.smokeDk),
  };

  const flames = [];
  const smokePuffs = [];
  let engineLight;

  const buildNose = (baseY, height, radius) => {
    const segs = 24;
    const pts = [];
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const r = Math.max(
        radius * Math.pow(Math.cos((t * Math.PI) / 2), 0.62),
        0.0008
      );
      pts.push(new THREE.Vector2(r, t * height));
    }
    const nose = new THREE.Mesh(
      new THREE.LatheGeometry(pts, 64),
      MAT.charcoal
    );
    nose.position.y = baseY;
    return nose;
  };

  const cylinder = (yBottom, height, rBottom, rTop, mat) => {
    const m = new THREE.Mesh(
      new THREE.CylinderGeometry(rTop, rBottom, height, 64),
      mat
    );
    m.position.y = yBottom + height / 2;
    return m;
  };

  const porthole = (x, y, z, r) => {
    const ring = new THREE.Mesh(
      new THREE.CylinderGeometry(r, r, 0.05, 24),
      MAT.charcoal
    );
    const glass = new THREE.Mesh(
      new THREE.CylinderGeometry(r * 0.72, r * 0.72, 0.07, 24),
      MAT.glass
    );
    ring.rotation.x = glass.rotation.x = Math.PI / 2;
    const g = new THREE.Group();
    g.add(ring);
    g.add(glass);
    g.position.set(x, y, z);
    return g;
  };

  const buildFin = (scale) => {
    const s = new THREE.Shape();
    s.moveTo(0, 0);
    s.lineTo(0, 1.15);
    s.quadraticCurveTo(0.35, 1.0, 0.78, 0.32);
    s.quadraticCurveTo(0.96, 0.05, 0.74, -0.18);
    s.lineTo(0, -0.05);
    s.lineTo(0, 0);
    const geo = new THREE.ExtrudeGeometry(s, {
      depth: 0.12,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.05,
      bevelSegments: 2,
    });
    geo.translate(0, 0, -0.06);
    geo.scale(scale, scale, scale);
    return new THREE.Mesh(geo, MAT.charcoal);
  };

  const buildFinRing = (count, radius, baseY, scale) => {
    const ring = new THREE.Group();
    for (let i = 0; i < count; i++) {
      const pivot = new THREE.Group();
      pivot.rotation.y = (i / count) * Math.PI * 2 + Math.PI / 6;
      const fin = buildFin(scale);
      fin.position.set(radius - 0.05, baseY, 0);
      pivot.add(fin);
      ring.add(pivot);
    }
    return ring;
  };

  const buildNozzle = (scale) => {
    const pts = [
      [0.14, 0.0],
      [0.11, -0.06],
      [0.07, -0.12],
      [0.1, -0.2],
      [0.16, -0.3],
      [0.22, -0.4],
      [0.21, -0.41],
    ].map(([r, y]) => new THREE.Vector2(r * scale, y * scale));
    const m = new THREE.Mesh(
      new THREE.LatheGeometry(pts, 40),
      MAT.charcoal
    );
    m.material.side = THREE.DoubleSide;
    return m;
  };

  const buildFlame = (scale) => {
    const grp = new THREE.Group();
    const layers = [
      { r: 0.27, h: 1.3, color: 0xff7a2d, op: 0.55 },
      { r: 0.17, h: 0.98, color: 0xffb23d, op: 0.7 },
      { r: 0.09, h: 0.6, color: 0xffe9ae, op: 0.95 },
    ];
    for (const L of layers) {
      const geo = new THREE.ConeGeometry(L.r * scale, L.h * scale, 24, 1, true);
      geo.rotateX(Math.PI);
      geo.translate(0, (-L.h * scale) / 2, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: L.color,
        transparent: true,
        opacity: L.op,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const m = new THREE.Mesh(geo, mat);
      m.renderOrder = 3;
      grp.add(m);
    }
    grp.userData = {
      phase: Math.random() * Math.PI * 2,
      freq: 16 + Math.random() * 12,
    };
    flames.push(grp);
    return grp;
  };

  const buildBooster = (x) => {
    const g = new THREE.Group();
    const br = 0.42;
    const bodyBottom = 0.95;
    const bodyH = 1.85;
    g.add(cylinder(bodyBottom, bodyH, br, br, MAT.whitePlain));
    g.add(buildNose(bodyBottom + bodyH, 0.55, br));
    g.add(porthole(0, bodyBottom + bodyH - 0.18, br, 0.16));
    const noz = buildNozzle(0.78);
    noz.position.y = bodyBottom;
    g.add(noz);
    const flame = buildFlame(0.7);
    flame.position.set(0, bodyBottom - 0.32, 0);
    g.add(flame);
    const fin = buildFin(0.55);
    fin.position.set(br - 0.04, bodyBottom + 0.05, 0);
    const fp = new THREE.Group();
    fp.add(fin);
    fp.rotation.y = x > 0 ? -0.2 : Math.PI + 0.2;
    g.add(fp);
    g.position.set(x, 0, 0.12);
    return g;
  };

  const buildExhaust = (topY) => {
    const g = new THREE.Group();
    const puffs = [
      [0.0, topY - 0.25, 0, 0.55, 0],
      [0.45, topY - 0.55, 0.1, 0.5, 1],
      [-0.4, topY - 0.6, -0.1, 0.46, 1],
      [0.15, topY - 0.95, 0.05, 0.62, 0],
      [0.7, topY - 1.05, 0, 0.42, 1],
      [-0.6, topY - 1.1, 0.1, 0.44, 0],
      [-0.05, topY - 1.5, 0, 0.7, 0],
      [0.5, topY - 1.7, -0.1, 0.5, 1],
      [-0.5, topY - 1.75, 0.05, 0.5, 1],
      [0.05, topY - 2.2, 0, 0.55, 0],
      [1.05, topY - 1.9, 0, 0.3, 0],
      [-1.0, topY - 2.05, 0, 0.32, 0],
    ];
    for (const [x, y, z, r, dk] of puffs) {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(r, 24, 18),
        dk ? MAT.smokeDk : MAT.smoke
      );
      m.position.set(x, y, z);
      m.userData = {
        base: 1,
        phase: Math.random() * Math.PI * 2,
        drift: 0.3 + Math.random() * 0.5,
      };
      smokePuffs.push(m);
      g.add(m);
    }
    return g;
  };

  const buildRocket = () => {
    const g = new THREE.Group();
    const boatBottom = 0.45;
    const boatH = 0.5;
    const lowBottom = boatBottom + boatH;
    const lowH = 1.75;
    const bandBottom = lowBottom + lowH;
    const bandH = 0.5;
    const upBottom = bandBottom + bandH;
    const upH = 1.0;
    const noseBase = upBottom + upH;
    const noseH = 1.55;

    const plate = cylinder(boatBottom - 0.04, 0.12, R * 0.7, R * 0.7, MAT.charcoal);
    g.add(plate);
    for (let i = 0; i < 3; i++) {
      const a = (i / 3) * Math.PI * 2 + Math.PI / 2;
      const noz = buildNozzle(1.0);
      noz.position.set(Math.cos(a) * 0.42, boatBottom, Math.sin(a) * 0.42);
      g.add(noz);
      const flame = buildFlame(1.0);
      flame.position.set(Math.cos(a) * 0.42, boatBottom - 0.4, Math.sin(a) * 0.42);
      g.add(flame);
    }

    engineLight = new THREE.PointLight(0xff8a3d, 0.0, 5, 2);
    engineLight.position.set(0, boatBottom - 0.6, 0);
    g.add(engineLight);

    g.add(cylinder(boatBottom, boatH, R * 0.78, R, MAT.whitePlain));
    g.add(cylinder(lowBottom, lowH, R, R, MAT.white));
    g.add(buildFinRing(3, R, lowBottom + 0.08, 1.0));
    g.add(cylinder(bandBottom, bandH, R * 1.02, R * 1.02, MAT.charcoal));
    g.add(cylinder(upBottom, upH, R, R * 0.94, MAT.whitePlain));
    g.add(porthole(0, upBottom + 0.55, R * 0.97, 0.2));
    g.add(buildNose(noseBase, noseH, R * 0.94));
    g.add(porthole(0, noseBase + 0.45, R * 0.62, 0.15));

    g.add(buildBooster(R + 0.32));
    g.add(buildBooster(-(R + 0.32)));

    g.add(buildExhaust(boatBottom));

    const box = new THREE.Box3().setFromObject(g);
    const center = new THREE.Vector3();
    box.getCenter(center);
    g.position.sub(center);
    const pivot = new THREE.Group();
    pivot.add(g);
    pivot.rotation.z = TILT;
    return pivot;
  };

  const rocket = buildRocket();
  scene.add(rocket);

  const frameCamera = () => {
    const sphere = new THREE.Box3()
      .setFromObject(rocket)
      .getBoundingSphere(new THREE.Sphere());
    const dist =
      (sphere.radius / Math.sin(((camera.fov * Math.PI) / 180) / 2)) * 0.95;
    camera.position
      .copy(new THREE.Vector3(0.15, 0.05, 1).normalize().multiplyScalar(dist));
    camera.lookAt(0, 0, 0);
  };
  frameCamera();

  const orbit = {
    radius: camera.position.length(),
    theta: Math.atan2(camera.position.x, camera.position.z),
    phi: Math.acos(camera.position.y / camera.position.length()),
    speed: reduceMotion ? 0 : 0.12,
  };

  // Drag-to-orbit. Wheel intentionally left unbound so vertical page scrolling
  // over the rocket still works on the landing.
  const canvas = renderer.domElement;
  const drag = { active: false, lastX: 0, lastY: 0 };
  const onDown = (e) => {
    drag.active = true;
    drag.lastX = e.clientX;
    drag.lastY = e.clientY;
    orbit.speed = 0;
    canvas.style.cursor = "grabbing";
    canvas.setPointerCapture?.(e.pointerId);
  };
  const onMove = (e) => {
    if (!drag.active) return;
    const dx = e.clientX - drag.lastX;
    const dy = e.clientY - drag.lastY;
    drag.lastX = e.clientX;
    drag.lastY = e.clientY;
    orbit.theta -= dx * 0.005;
    orbit.phi = Math.max(0.3, Math.min(Math.PI - 0.3, orbit.phi - dy * 0.005));
  };
  const onUp = (e) => {
    drag.active = false;
    canvas.style.cursor = "grab";
    canvas.releasePointerCapture?.(e.pointerId);
  };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);

  const clock = new THREE.Clock();

  const applyPaletteRaw = (P) => {
    MAT.white.color.setHex(P.body);
    MAT.whitePlain.color.setHex(P.body);
    MAT.charcoal.color.setHex(P.accent);
    MAT.smoke.color.setHex(P.smoke);
    MAT.smokeDk.color.setHex(P.smokeDk);
    hemiLight.color.setHex(P.hemiSky);
    hemiLight.groundColor.setHex(P.hemiGround);
    keyLight.intensity = P.keyIntensity;
    paintPanel(hexToCss(P.panelBg), hexToCss(P.panelLine));
    panelTex.needsUpdate = true;
  };

  // Tween between palettes so the rocket fades over the same window as the
  // body/navbar (300ms) instead of snapping while the page eases.
  let tween = null;
  const applyPalette = (nextTheme) => {
    const target = rocketPalette(nextTheme);
    tween = { from: { ...currentP }, to: target, t0: clock.getElapsedTime(), dur: 0.3 };
  };
  const stepTween = () => {
    if (!tween) return;
    const raw = (clock.getElapsedTime() - tween.t0) / tween.dur;
    const tt = Math.min(1, Math.max(0, raw));
    const e = easeInOut(tt);
    const next = {
      body:         lerpHex(tween.from.body,         tween.to.body,         e),
      accent:       lerpHex(tween.from.accent,       tween.to.accent,       e),
      smoke:        lerpHex(tween.from.smoke,        tween.to.smoke,        e),
      smokeDk:      lerpHex(tween.from.smokeDk,      tween.to.smokeDk,      e),
      hemiSky:      lerpHex(tween.from.hemiSky,      tween.to.hemiSky,      e),
      hemiGround:   lerpHex(tween.from.hemiGround,   tween.to.hemiGround,   e),
      keyIntensity: lerp(tween.from.keyIntensity,    tween.to.keyIntensity, e),
      panelBg:      lerpHex(tween.from.panelBg,      tween.to.panelBg,      e),
      panelLine:    lerpHex(tween.from.panelLine,    tween.to.panelLine,    e),
    };
    applyPaletteRaw(next);
    currentP = next;
    if (tt >= 1) tween = null;
  };

  let rafId = 0;
  const tick = () => {
    rafId = requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    if (!reduceMotion) {
      rocket.position.y = Math.sin(t * 1.1) * 0.08;
      rocket.rotation.z = TILT + Math.sin(t * 0.8) * 0.02;
    }

    if (engineLight) engineLight.intensity = 0.6;

    stepTween();

    for (const p of smokePuffs) {
      const s = 1 + Math.sin(t * p.userData.drift + p.userData.phase) * 0.06;
      p.scale.setScalar(s);
    }

    orbit.theta -= orbit.speed * dt;
    const sinPhi = Math.sin(orbit.phi);
    camera.position.set(
      orbit.radius * sinPhi * Math.sin(orbit.theta),
      orbit.radius * Math.cos(orbit.phi),
      orbit.radius * sinPhi * Math.cos(orbit.theta)
    );
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };
  tick();

  const ro = new ResizeObserver(() => {
    const s = sizeOf();
    if (s.w === w && s.h === h) return;
    w = s.w;
    h = s.h;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  });
  ro.observe(mount);

  const dispose = () => {
    cancelAnimationFrame(rafId);
    ro.disconnect();
    canvas.removeEventListener("pointerdown", onDown);
    canvas.removeEventListener("pointermove", onMove);
    canvas.removeEventListener("pointerup", onUp);
    canvas.removeEventListener("pointercancel", onUp);
    scene.traverse((obj) => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        for (const m of mats) {
          if (m.map) m.map.dispose();
          m.dispose();
        }
      }
    });
    toonRamp.dispose();
    panelTex.dispose();
    renderer.dispose();
    if (renderer.domElement.parentNode === mount) {
      mount.removeChild(renderer.domElement);
    }
  };

  return { dispose, applyPalette };
}

export default function RocketScene() {
  const { theme } = useTheme();
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    let disposed = false;
    loadThree()
      .then((THREE) => {
        if (disposed || !mountRef.current) return;
        sceneRef.current = buildRocketScene(
          THREE,
          mountRef.current,
          themeRef.current
        );
      })
      .catch(() => {
        /* silent — landing still shows the SVG backdrop */
      });
    return () => {
      disposed = true;
      if (sceneRef.current) {
        sceneRef.current.dispose();
        sceneRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current) sceneRef.current.applyPalette(theme);
  }, [theme]);

  return (
    <div
      className={`${styles.scene} relative mx-auto mt-8 h-48 md:h-64 lg:h-80 aspect-[3/2] bg-background overflow-hidden transition-colors duration-300`}
    >
      <svg
        viewBox="0 0 1200 740"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="rs-blobGrad" cx="42%" cy="38%" r="75%">
            <stop offset="0%" stopColor="#6E63F2" />
            <stop offset="100%" stopColor="#564BD9" />
          </radialGradient>
          <radialGradient id="rs-planetGrad" cx="38%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#FF7186" />
            <stop offset="100%" stopColor="#F94E66" />
          </radialGradient>
          <linearGradient id="rs-cometGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" className={styles.cometStop0} />
            <stop offset="100%" className={styles.cometStop1} />
          </linearGradient>
        </defs>

        <path
          className={styles.blob}
          fill="url(#rs-blobGrad)"
          d="M610 120 C742 110 838 188 822 312 C812 392 884 452 832 532 C792 596 690 606 612 604 C520 602 426 632 392 540 C362 458 286 430 322 332 C350 252 470 250 524 196 C556 162 560 124 610 120 Z"
        />

        <g className={styles.rings} fill="none" strokeOpacity="0.55">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 600 372"
            to="360 600 372"
            dur="90s"
            repeatCount="indefinite"
          />
          <ellipse
            cx="600"
            cy="372"
            rx="452"
            ry="150"
            strokeWidth="1.6"
            transform="rotate(-17 600 372)"
          />
          <ellipse
            cx="600"
            cy="372"
            rx="494"
            ry="118"
            strokeWidth="1.4"
            transform="rotate(-6 600 372)"
          />
        </g>

        <circle
          className={styles.planet}
          cx="338"
          cy="250"
          r="92"
          fill="url(#rs-planetGrad)"
        />
        <circle className={styles.moon} cx="892" cy="360" r="11" fill="#F94E66" />

        <g>
          <line
            x1="826"
            y1="168"
            x2="694"
            y2="306"
            stroke="url(#rs-cometGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="7s"
            repeatCount="indefinite"
            calcMode="spline"
            keyTimes="0;0.18;1"
            keySplines="0.2 0.6 0.3 1;0 0 1 1"
            values="90 -90; -40 40; -40 40"
          />
          <animate
            attributeName="opacity"
            dur="7s"
            repeatCount="indefinite"
            keyTimes="0;0.03;0.14;0.22;1"
            values="0;0;0.95;0;0"
          />
        </g>

        <g className={styles.stars}>
          <circle
            className={styles.star}
            style={{ animationDelay: "0s", animationDuration: "3.0s" }}
            cx="586"
            cy="120"
            r="3"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: ".6s", animationDuration: "3.6s" }}
            cx="742"
            cy="262"
            r="2.4"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: "1.1s", animationDuration: "2.8s" }}
            cx="462"
            cy="420"
            r="3.4"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: "1.7s", animationDuration: "3.3s" }}
            cx="430"
            cy="520"
            r="2.4"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: ".3s", animationDuration: "4.0s" }}
            cx="350"
            cy="362"
            r="2.6"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: "2.0s", animationDuration: "3.1s" }}
            cx="640"
            cy="500"
            r="2.2"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: "1.4s", animationDuration: "3.8s" }}
            cx="806"
            cy="430"
            r="2.6"
          />
          <circle
            className={styles.star}
            style={{ animationDelay: ".9s", animationDuration: "2.6s" }}
            cx="500"
            cy="170"
            r="2.2"
          />
        </g>
        <circle
          className={styles.moon}
          cx="470"
          cy="430"
          r="9"
          fill="#7E83B8"
          opacity="0.7"
        />
        <g className={styles.sparks} strokeWidth="2" strokeLinecap="round">
          <path className={styles.spark} d="M716 196 v14 M709 203 h14" />
          <path className={styles.spark} d="M556 360 v10 M551 365 h10" />
        </g>
      </svg>

      <div ref={mountRef} className="absolute inset-0" />
    </div>
  );
}
