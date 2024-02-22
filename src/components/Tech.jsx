import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
        <motion.div className="text-center mb-10" variants={textVariant()}>
          <p className={styles.sectionSubText}>WHAT I AM WORKING WITH</p>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>

        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technologies) => {
            return (
              <div key={technologies.name} className="w-25 h-30">
                <BallCanvas title={technologies.name} icon={technologies.icon} />
              </div>
            );
          })}
        </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
