import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Drop a line</h2>
      <p className="contact-text">
      "Seeking an internship in development to enhance my skills, with a strong foundation in DSA. Contact me for opportunities."
      </p>
      <div className="contact-cta">
        <Button link="mailto:adityaaman.codex@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
