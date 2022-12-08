import { skills } from "../../data";
import styles from "./Techstack.module.css";

function Techstack() {
  return (
    <div>
      <h1 className="text-white text-4xl pb-4">
        <strong className="purple">Skills </strong>
      </h1>
      {skills.map((item, idx) => {
        return (
          <div className="text-white mb-3" key={idx}>
            <strong>{item.category}</strong>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-flow-row gap-4">
              {item.items.map((val, idx) => (
                <div
                  key={idx}
                  className={`${styles["tech-icons"]} mx-2 py-6 md:mx-6 md:p-6 text-white opacity-90 border overflow-hidden rounded-md`}
                >
                  <div className="flex justify-center text-xl md:text-3xl lg:text-4xl align-middle text-center h-full">
                    <val.icon />
                  </div>
                  <div className="flex justify-center">
                    <span className="text-sm">{val.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Techstack;
