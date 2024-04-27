import styles from "./Hello.module.css";
import Type from "../Type";

export default function Hello() {
  return (
    <div className="flex flex-col space-y-4 text-3xl md:text-5xl text-slate-100">
      <h1>
        Hi There!{" "}
        <span className={styles.wave} role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>

      <h1>
        I'm
        <strong className="gradient-color"> Shenggui Li </strong>
      </h1>
      <div>
        <Type />
      </div>
    </div>
  );
}
