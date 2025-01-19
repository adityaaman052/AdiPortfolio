import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="hero-container">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
          delay: 0.3,
        }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.4,
          }}
        >
          Hi, my name is
        </motion.h1>

        <motion.h2
          className="hero-title-large"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          Aditya Aman.
        </motion.h2>

        <motion.h3
          className="hero-subheading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 0.9,
          }}
        >
          I am a full-stack web developer,
        </motion.h3>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1.2,
          }}
        >
          Skilled in building responsive interfaces with React and Tailwind CSS and developing robust backends with Node.js and MongoDB. I create seamless, secure, and engaging&nbsp;
          <Link href="#" target="_blank" className="link">
            digital experiences.
          </Link>
        </motion.p>

        <motion.div
          className="hero-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <Button text="See My Journey" link="#" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
