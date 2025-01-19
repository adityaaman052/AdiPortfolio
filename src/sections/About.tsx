import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Greetings! I am Aditya Aman. I am passionate about transforming complex ideas into intuitive digital solutions, with a focus on innovation and exceptional user experiences in web development.
          </p>
          <p className="about-grid-info-text">
            I specialize in React, Node.js, and MongoDB, creating seamless user experiences and robust backend systems. My projects include a{" "}
            <Link href="https://github.com/adityaaman052" className="link" target="_blank">
              crowdfunding platform with secure payments and a real-time chatting app.
            </Link>
          </p>

          <p className="about-grid-info-text">
            Beyond coding, I bring strong problem-solving, adaptability, and communication skills to every project. I am currently exploring advanced technologies like TypeScript, Next.js, and GSAP to refine my craft and embrace new challenges.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://github.com/adityaaman052"
            >
              SmartScope,
            </Link>
            aimed at enhancing AI Integration skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I have been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">GSAP, Framer Motion</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">JWT, OAuth</li>
            <li className="about-grid-info-list-item">Tailwind, CSS</li>
            <li className="about-grid-info-list-item">Node.js, Express.js</li>
            <li className="about-grid-info-list-item">Git, Github</li>
            <li className="about-grid-info-list-item">MongoDb, MySQL, Firebase</li>
            <li className="about-grid-info-list-item">Postman</li>
            <li className="about-grid-info-list-item">GraphQL</li>
            <li className="about-grid-info-list-item">RestAPI, WebSockets</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">Java, Python</li>
            <li className="about-grid-info-list-item">UI/UX design</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/p13.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
