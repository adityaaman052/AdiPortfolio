import Link from "next/link";
import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { motion } from "framer-motion";

function SocialIcons() {
  const socialLinks = [
    { name: "Github", icon: <FiGithub />, link: "https://github.com/adityaaman052" },
   
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/aditya-aman-120a73281/",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "#",
    },
    {
      name: "Twitter",
      icon: <FiTwitter />,
      link: "https://x.com/AdityaAman25065?t=jTlM3s9cMl1-fco8LJ8MVQ&s=08&mx=2",
    },
  ];

  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              <div className="icon-container">{icon}</div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
