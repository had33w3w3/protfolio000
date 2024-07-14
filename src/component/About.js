import React from "react";
import about from "../assets/about.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section id="aboutUs">
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
         transition={{
         
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src={about}
          className="about"
          alt="computer user"
          />
           


        <div class="content">
          <h2>About Us</h2>
          <h4> Developer & Designer </h4>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            class="description"
          >
            I am a Front-end web developer. I can provide clean code and pixel
            perfect design. I also make the website more & more interactive with
            web animations. I can provide clean code and pixel perfect. I also
            make the website more & more interactive with web animations. A
            responsive design makes your website accessible to all users.
            regardless of their device.
          </motion.p>
         
        </div>
      </section>
    </div>
  );
};

export default About;
