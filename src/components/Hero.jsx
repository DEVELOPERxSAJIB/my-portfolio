import { motion } from "framer-motion";
import "./Hero.scss";
import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas/";
import myPic from "../assets/sajib_dev.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="hero-area relative">
        <div className="hero-content">
          <section className="w-full h-screen mx-auto">
            <div
              className={`${styles.paddingX} absolute inset-0 top-[34%] max-w-7xl max-auto flex flex-row items-start gap-5`}
            >
              <div className="felx flex-col justify-center items-center mt-5">
                <div className="w-5 h-5 rounded-full bg-[#ED1846]" />

                <div className="w-1 sm:h-80 h-40 red-gradient mx-auto" />
              </div>

              <div>
                <h1 className={`${styles.heroHeadText} text-black`}>
                  Hi, Im <span className="text-[#ED1845]">Md Sajib</span>
                </h1>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                  className={` mt-2 text-[#B00030]`}
                >
                  Enthusiastic Software Developer. <br /> Proficient in
                  full-stack development, particularly the MERN Stack.
                </p>
                <div className="social-icons mt-[40px]">
                  <a
                    target="_black"
                    href="https://www.facebook.com/Md.SaJib.Raajput/"
                  >
                    <div className="item">
                      <FaFacebookF />
                    </div>
                  </a>
                  <a target="_black" href="https://www.linkedin.com/in/mdsajibshikder/">
                    <div className="item">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a target="_black" href="https://twitter.com/MdSaJibShikder9">
                    <div className="item">
                      <FaTwitter />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className={`${styles.paddingX} forDis`}>
            <div className="img-area shadow-lg">
              <img src={myPic} alt="" />
            </div>
          </section>
        </div>
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#333] flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-[#333] mb-1"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
