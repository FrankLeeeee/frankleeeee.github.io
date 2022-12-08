import styles from "./Hello.module.css";
import Type from "../Type";

export default function Hello() {
  return (
    <div className="pb-5">
      <h1 className="text-3xl pt-4 md:pt-12 lg:pt-24 pl-12 md:text-5xl text-white">
        Hi There!{" "}
        <span className={styles.wave} role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h1>

      <h1 className="text-3xl md:text-5xl pl-12 text-white">
        I'm
        <strong className="gradient-color"> Frank Lee</strong>
      </h1>
      <div className="leading-normal text-3xl md:text-5xl pl-12 mt-3 mb-5 font-extrabold text-left h-16">
        <Type />
      </div>
    </div>
  );
}
