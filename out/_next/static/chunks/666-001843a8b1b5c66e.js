(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default,Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,l=n(7273).Z,a=o(n(7294)),u=n(1003),i=n(7795),s=n(4465),c=n(2692),f=n(8245),d=n(9246),p=n(227),v=n(3468),m=new Set;function y(e,t,n,r){if(u.isLocalURL(t)){if(!r.bypassPrefetchedCheck){var o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}Promise.resolve(e.prefetch(t,n,r)).catch(function(e){})}}function h(e){return"string"==typeof e?e:i.formatUrl(e)}var g=a.default.forwardRef(function(e,t){var n,o,i=e.href,m=e.as,g=e.children,b=e.prefetch,E=e.passHref,w=e.replace,P=e.shallow,k=e.scroll,C=e.locale,O=e.onClick,S=e.onMouseEnter,j=e.onTouchStart,M=e.legacyBehavior,I=void 0!==M&&M,x=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=g,I&&("string"==typeof n||"number"==typeof n)&&(n=a.default.createElement("a",null,n));var D=!1!==b,R=a.default.useContext(c.RouterContext),T=a.default.useContext(f.AppRouterContext),L=null!=R?R:T,_=!R,N=a.default.useMemo(function(){if(!R){var e=h(i);return{href:e,as:m?h(m):e}}var t=r(u.resolveHref(R,i,!0),2),n=t[0],o=t[1];return{href:n,as:m?u.resolveHref(R,m):o||n}},[R,i,m]),H=N.href,A=N.as,B=a.default.useRef(H),U=a.default.useRef(A);I&&(o=a.default.Children.only(n));var $=I?o&&"object"==typeof o&&o.ref:t,F=r(d.useIntersection({rootMargin:"200px"}),3),K=F[0],Z=F[1],z=F[2],W=a.default.useCallback(function(e){(U.current!==A||B.current!==H)&&(z(),U.current=A,B.current=H),K(e),$&&("function"==typeof $?$(e):"object"==typeof $&&($.current=e))},[A,$,H,z,K]);a.default.useEffect(function(){L&&Z&&D&&y(L,H,A,{locale:C})},[A,H,Z,C,D,null==R?void 0:R.locale,L]);var q={ref:W,onClick:function(e){I||"function"!=typeof O||O(e),I&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),L&&!e.defaultPrevented&&function(e,t,n,r,o,l,i,s,c,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&u.isLocalURL(n)){e.preventDefault();var d,p,v=function(){"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:s,scroll:i}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!f})};c?a.default.startTransition(v):v()}}(e,L,H,A,w,P,k,C,_,D)},onMouseEnter:function(e){I||"function"!=typeof S||S(e),I&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),L&&(D||!_)&&y(L,H,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){I||"function"!=typeof j||j(e),I&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),L&&(D||!_)&&y(L,H,A,{locale:C,priority:!0,bypassPrefetchedCheck:!0})}};if(!I||E||"a"===o.type&&!("href"in o.props)){var V=void 0!==C?C:null==R?void 0:R.locale,Y=(null==R?void 0:R.isLocaleDomain)&&p.getDomainLocale(A,V,null==R?void 0:R.locales,null==R?void 0:R.domainLocales);q.href=Y||v.addBasePath(s.addLocale(A,V,null==R?void 0:R.defaultLocale))}return I?a.default.cloneElement(o,q):a.default.createElement("a",Object.assign({},x,q),n)});t.default=g,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,c=r(o.useState(!1),2),f=c[0],d=c[1],p=r(o.useState(null),2),v=p[0],m=p[1];return o.useEffect(function(){if(a){if(!s&&!f&&v&&v.tagName){var e,r,o,c;return r=(e=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=u.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),u.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,o=e.observer,(c=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(c.delete(v),o.unobserve(v),0===c.size){o.disconnect(),u.delete(r);var e=i.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&i.splice(e,1)}}}}else if(!f){var p=l.requestIdleCallback(function(){return d(!0)});return function(){return l.cancelIdleCallback(p)}}},[v,s,n,t,f]),[m,f,o.useCallback(function(){d(!1)},[])]};var o=n(7294),l=n(4686),a="function"==typeof IntersectionObserver,u=new Map,i=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,n){e.exports=n(1551)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function i(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function s(e){var t=function(t){var n,o=e.attr,l=e.size,i=e.title,s=u(e,["attr","size","title"]),c=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&r.createElement("title",null,i),e.children)};return void 0!==l?r.createElement(l.Consumer,null,function(e){return t(e)}):t(o)}},3186:function(e,t,n){"use strict";n.d(t,{p:function(){return W}});var r,o,l,a,u,i,s,c=n(7294);function f(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let o=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,f),o}var d=((r=d||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),p=((o=p||{})[o.Unmount=0]="Unmount",o[o.Hidden=1]="Hidden",o);function v({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:l=!0,name:a}){let u=y(t,e);if(l)return m(u,n,r,a);let i=null!=o?o:0;if(2&i){let{static:s=!1,...c}=u;if(s)return m(c,n,r,a)}if(1&i){let{unmount:d=!0,...p}=u;return f(d?0:1,{0:()=>null,1:()=>m({...p,hidden:!0,style:{display:"none"}},n,r,a)})}return m(u,n,r,a)}function m(e,t={},n,r){let{as:o=n,children:l,refName:a="ref",...u}=b(e,["unmount","static"]),i=void 0!==e.ref?{[a]:e.ref}:{},s="function"==typeof l?l(t):l;u.className&&"function"==typeof u.className&&(u.className=u.className(t));let f={};if(t){let d=!1,p=[];for(let[v,m]of Object.entries(t))"boolean"==typeof m&&(d=!0),!0===m&&p.push(v);d&&(f["data-headlessui-state"]=p.join(" "))}if(o===c.Fragment&&Object.keys(g(u)).length>0){if(!(0,c.isValidElement)(s)||Array.isArray(s)&&s.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));return(0,c.cloneElement)(s,Object.assign({},y(s.props,g(b(u,["ref"]))),f,i,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(s.ref,i.ref)))}return(0,c.createElement)(o,Object.assign({},b(u,["ref"]),o!==c.Fragment&&i,o!==c.Fragment&&f),s)}function y(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&"function"==typeof r[o]?(null!=n[o]||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let l in n)Object.assign(t,{[l](e,...t){for(let r of n[l]){if((e instanceof Event||(null==e?void 0:e.nativeEvent)instanceof Event)&&e.defaultPrevented)return;r(e,...t)}}});return t}function h(e){var t;return Object.assign((0,c.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function g(e){let t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}function b(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let E="undefined"==typeof window||"undefined"==typeof document,w=E?c.useEffect:c.useLayoutEffect,P=function(e){let t;let n=(t=(0,c.useRef)(e),w(()=>{t.current=e},[e]),t);return c.useCallback((...e)=>n.current(...e),[n])},k=Symbol();function C(...e){let t=(0,c.useRef)(e);(0,c.useEffect)(()=>{t.current=e},[e]);let n=P(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[k]))?void 0:n}let O={serverHandoffComplete:!1},S=0;function j(){return++S}let M=null!=(s=c.useId)?s:function(){let e=function(){let[e,t]=(0,c.useState)(O.serverHandoffComplete);return(0,c.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,c.useEffect)(()=>{!1===O.serverHandoffComplete&&(O.serverHandoffComplete=!0)},[]),e}(),[t,n]=c.useState(e?j:null);return w(()=>{null===t&&n(j())},[t]),null!=t?""+t:void 0};var I=((l=I||{}).Space=" ",l.Enter="Enter",l.Escape="Escape",l.Backspace="Backspace",l.Delete="Delete",l.ArrowLeft="ArrowLeft",l.ArrowUp="ArrowUp",l.ArrowRight="ArrowRight",l.ArrowDown="ArrowDown",l.Home="Home",l.End="End",l.PageUp="PageUp",l.PageDown="PageDown",l.Tab="Tab",l);let x=(0,c.createContext)(null);x.displayName="OpenClosedContext";var D=((a=D||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a);function R({value:e,children:t}){return c.createElement(x.Provider,{value:e},t)}function T(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}var L=((u=L||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),_=((i=_||{})[i.ToggleDisclosure=0]="ToggleDisclosure",i[i.CloseDisclosure=1]="CloseDisclosure",i[i.SetButtonId=2]="SetButtonId",i[i.SetPanelId=3]="SetPanelId",i[i.LinkPanel=4]="LinkPanel",i[i.UnlinkPanel=5]="UnlinkPanel",i);let N={0:e=>({...e,disclosureState:f(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},H=(0,c.createContext)(null);function A(e){let t=(0,c.useContext)(H);if(null===t){let n=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,A),n}return t}H.displayName="DisclosureContext";let B=(0,c.createContext)(null);B.displayName="DisclosureAPIContext";let U=(0,c.createContext)(null);function $(e,t){return f(t.type,N,e,t)}U.displayName="DisclosurePanelContext";let F=c.Fragment,K=h(function(e,t){let{defaultOpen:n=!1,...r}=e,o=`headlessui-disclosure-button-${M()}`,l=`headlessui-disclosure-panel-${M()}`,a=(0,c.useRef)(null),u=C(t,function(e,t=!0){return Object.assign(e,{[k]:t})}(e=>{a.current=e},void 0===e.as||e.as===c.Fragment)),i=(0,c.useRef)(null),s=(0,c.useRef)(null),d=(0,c.useReducer)($,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:s,panelRef:i,buttonId:o,panelId:l}),[{disclosureState:p},m]=d;(0,c.useEffect)(()=>m({type:2,buttonId:o}),[o,m]),(0,c.useEffect)(()=>m({type:3,panelId:l}),[l,m]);let y=P(e=>{m({type:1});let t=E?null:a instanceof Node?a.ownerDocument:null!=a&&a.hasOwnProperty("current")&&a.current instanceof Node?a.current.ownerDocument:document;if(!t)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(o):t.getElementById(o);null==n||n.focus()}),h=(0,c.useMemo)(()=>({close:y}),[y]),g=(0,c.useMemo)(()=>({open:0===p,close:y}),[p,y]);return c.createElement(H.Provider,{value:d},c.createElement(B.Provider,{value:h},c.createElement(R,{value:f(p,{0:D.Open,1:D.Closed})},v({ourProps:{ref:u},theirProps:r,slot:g,defaultTag:F,name:"Disclosure"}))))}),Z=h(function(e,t){let[n,r]=A("Disclosure.Button"),o=(0,c.useContext)(U),l=null!==o&&o===n.panelId,a=(0,c.useRef)(null),u=C(a,t,l?null:n.buttonRef),i=P(e=>{var t;if(l){if(1===n.disclosureState)return;switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=n.buttonRef.current)||t.focus()}}else switch(e.key){case I.Space:case I.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),s=P(e=>{e.key===I.Space&&e.preventDefault()}),f=P(t=>{var o;(function(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r})(t.currentTarget)||e.disabled||(l?(r({type:0}),null==(o=n.buttonRef.current)||o.focus()):r({type:0}))}),d=(0,c.useMemo)(()=>({open:0===n.disclosureState}),[n]),p=function(e,t){let[n,r]=(0,c.useState)(()=>T(e));return w(()=>{r(T(e))},[e.type,e.as]),w(()=>{n||!t.current||t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&r("button")},[n,t]),n}(e,a);return v({ourProps:l?{ref:u,type:p,onKeyDown:i,onClick:f}:{ref:u,id:n.buttonId,type:p,"aria-expanded":e.disabled?void 0:0===n.disclosureState,"aria-controls":n.linkedPanel?n.panelId:void 0,onKeyDown:i,onKeyUp:s,onClick:f},theirProps:e,slot:d,defaultTag:"button",name:"Disclosure.Button"})}),z=d.RenderStrategy|d.Static,W=Object.assign(K,{Button:Z,Panel:h(function(e,t){let[n,r]=A("Disclosure.Panel"),{close:o}=function e(t){let n=(0,c.useContext)(B);if(null===n){let r=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,e),r}return n}("Disclosure.Panel"),l=C(t,n.panelRef,e=>{r({type:e?4:5})}),a=(0,c.useContext)(x),u=null!==a?a===D.Open:0===n.disclosureState,i=(0,c.useMemo)(()=>({open:0===n.disclosureState,close:o}),[n,o]),s={ref:l,id:n.panelId};return c.createElement(U.Provider,{value:n.panelId},v({ourProps:s,theirProps:e,slot:i,defaultTag:"div",features:z,visible:u,name:"Disclosure.Panel"}))})})},3407:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},1415:function(e,t,n){"use strict";var r=n(7294);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o}}]);