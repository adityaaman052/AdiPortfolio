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
          I craft things for the web.
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
          I&apos;m a software engineer with expertise in creating top-notch
          digital experiences. Currently, I&apos;m focused on developing
          accessible and user-centered products at&nbsp;
          <Link href="https://rapidops.com" target="_blank" className="link">
            Rapidops.
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
          <Button text="Check out my course" link="https://youtube.com/kishansheth21" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
