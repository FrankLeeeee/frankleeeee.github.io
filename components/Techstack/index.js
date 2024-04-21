import { skills } from "../../data/data";
import styles from "./Techstack.module.css";

function Techstack() {
  return (
    <div>
      {skills.map((item, idx) => {
        return (
          <div className="text-slate-100 mb-3" key={idx}>
            <strong>{item.category}</strong>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-x-2 md:gap-y-1">
              {item.items.map((val, idx) => (
                <div
                  key={idx}
                  className={`${styles["tech-icons"]} text-slate-100 opacity-90`}
                >
                  <div className="flex justify-center items-center p-2">
                    <val.icon size={20} />
                    <span className="ml-1 text-sm">{val.name}</span>
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
