import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      {/* Left Side */}
      <div className="left">
        <Header />

        {/* Best AD */}
        <div className="best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>

          <span>the best fitness club in the town</span>
        </div>

        {/* Hero Text */}
        <div className="hero-text">
          <div>
            <span className="text-stroke">Shape </span>
            <span>Your</span>
          </div>

          <div>
            <span>Ideal Body</span>
          </div>

          <div>
            <span>
              Lorem ipsum dolor, sit amet constur adipisi elit. Iusto vitae,
              mollia maioes sed nulla beatae pariatur tenetur tempors earum
              ipsa. Peapfatae pariatur tenetu!
            </span>
          </div>
        </div>

        <div className="auto-count">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="2" preFix="+ " />
            </span>
            <span>expert coaches</span>
          </div>

          <div>
            <span>
              <NumberCounter end={978} start={600} delay="1" preFix="+ " />
            </span>
            <span>members joined</span>
          </div>

          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={10} delay="1" preFix="+ " />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero Button */}
        <div className="hero-btn">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </div>

      {/* Right Side */}
      <div className="right">
        <button className="btn btn-white">Join Now</button>

        {/* Heart Rate */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="Heart Shape"></img>
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={hero_image} className="hero-image" alt=""></img>
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "24rem" }}
          transition={transition}
          src={hero_image_back}
          className="hero-image-back"
          alt=""
        ></motion.img>

        {/* Calories */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="Calorie"></img>
          <div>
            <span>Calories burned</span>
            <span>225 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
