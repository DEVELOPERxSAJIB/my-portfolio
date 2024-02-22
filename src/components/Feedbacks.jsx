import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <Tilt
    options={{
      reverse: false,
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-[#fff] p-10 rounded-3xl xs:w-[320px] w-full shadow-card2"
    >
      <p className="text-[#FFD700] font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-black-100 tracking-wider text-[18px]">
          {testimonial}
        </p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-black-100 font-medium text-[16px]">
              <span className="text-black-50">@</span> {name}
            </p>
            <p className="mt-1 text-black-100 text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-[#151C25] rounded-[20px]`}>
      <div
        className={`bg-[#09101A] rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div
        className={`-mt-20 pb-14 ${styles.paddingX} rounded flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "testi");
