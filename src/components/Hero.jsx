import "./Hero.scss";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import hero from "../../public/hero/hero.png";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <>
      <div className="hero-area overflow-hidden relative bg-[#09101A]">
        <div className="container mx-auto max-w-[1150px]">
          <div className="hero-content w-full flex justify-between">
            <section className="h-screen flex items-center gap-10">
              <div className="flex flex-row items-start gap-5">
                <div className="flex flex-col justify-center items-center mt-5">
                  <div className="w-5 h-5 rounded-full bg-[#32ff7e]" />
                  <div className="w-1 sm:h-80 h-40 red-gradient mx-auto" />
                </div>

                <div>
                  <h1 className={`${styles.heroHeadText} text-white`}>
                    Hi, I'm <span className="gradient-text">Md Sajib</span>
                  </h1>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                    className={`mt-2 text-[#32ff7e]`}
                  >
                    Enthusiastic Software Developer. <br /> Proficient in
                    full-stack development, particularly the MERN Stack.
                  </p>
                  <div className="social-icons mt-[30px]">
                    <a
                      target="_black"
                      href="https://www.facebook.com/Md.SaJib.Raajput/"
                    >
                      <div className="item">
                        <FaFacebookF />
                      </div>
                    </a>
                    <a
                      target="_black"
                      href="https://www.linkedin.com/in/mdsajibshikder/"
                    >
                      <div className="item">
                        <FaLinkedinIn />
                      </div>
                    </a>
                    <a
                      target="_black"
                      href="https://twitter.com/MdSaJibShikder9"
                    >
                      <div className="item">
                        <FaTwitter />
                      </div>
                    </a>
                  </div>
                  <div className="flex gap-5">
                    <HeroButton title={"Download CV"} icon={"cv"} />
                    <HeroButton id="contact" title={"Let's Talk"} icon={"talk"} />
                  </div>
                </div>
              </div>
            </section>

            <section>
              {/* <img src={"https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-3d-programmer-computer-character-cartoon-three-dimensional-cute-profession-png-image_11335864.png"} alt="" /> */}
              <img className="shadow forDis" src={hero} alt="" />
            </section>
          </div>
        </div>
        <div className="absolute xs:bottom-10 w-full flex justify-center items-center">
          <div className="mx-auto overflow-hidden">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#333] flex justify-center items-center p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-[#333]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
