import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Mass InfoSolution",
      role: "Full Stack Intern",
      url: "https://www.misspl.co.in",
      start: "May 2024",
      end: "Aug 2024",
      shortDescription: [
"I gained valuable experience working on a large codebase utilizing Kibana and Elasticsearch.",

"Throughout my tenure, I worked extensively with MERN stack technologies, including React, Redux, TypeScript, Node.js, Hapi, and Elasticsearch.",    
   "I worked on payment integration with a kiosk in Patna Municipal Corporation, ensuring seamless transactions and system functionality.",
        "Additionally, I've represented the company in client meetings, communicating effectively on their behalf.",
      ],
    },
    {
      name: "Chegg",
      role: "Subject Matter Expert",
      url: "https://www.chegg.com",
      start: "Oct 2023",
      end: "Present",
      shortDescription: [
       "I worked as a Subject Matter Expert in Advanced Mathematics at Chegg India, where I helped students understand complex concepts and solve challenging problems.",

"By providing detailed explanations and tailored solutions, I assisted students in improving their academic performance and deepening their understanding of mathematics.",

"This experience not only enhanced my teaching skills but also helped me improve my freelancing abilities, allowing me to manage time effectively and provide high-quality work to clients.",
      ],
    },
    {
      name: "SEDS,CUSAT",
      role: "Website Tech Member",
      url: "http://www.sedscusat.org",
      start: "April 2024",
      end: "Present",
      shortDescription: [
        "As a Tech team member at SEDS, CUSAT, I contribute to maintaining the organization's website, ensuring smooth functionality and a seamless user experience.",

"I focus on adding engaging animations and implementing new updates, using technologies like React and GSAP to enhance the website’s interactivity and design.",

"This role has sharpened my web development skills while giving me hands-on experience in teamwork, problem-solving, and staying up-to-date with the latest web trends.",
      ],
    },
    {
      name: "Google Dev Group",
      role: "Hackathon Winner",
      url: "#",
      start: "7 November 2024",
      end: "9 November 2024",
      shortDescription: [
        "My team and I won a hackathon at GDG by developing Adhivira, a women's safety app designed to connect women in danger with immediate help.",

"Adhivira uses real-time tracking and emergency alerts to ensure women can quickly reach safety, making it a powerful tool for personal security.",

"This project allowed me to work collaboratively with my team to implement practical solutions and gain hands-on experience in mobile app development and user safety technology.",
      ],
    },
    {
      name: "CUSAT",
      role: "Student",
      url: "#",
      start: " 2023",
      end: " 2027",
      shortDescription: [
"I am currently pursuing a B.Tech in Computer Science and Engineering from the School of Engineering, CUSAT,Kerala",     
"I am currently in my Second Year.",
  "The college environment offers me constant opportunities to explore new tech trends and improve my technical abilities, preparing me for future challenges in the industry.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Experience & Educ.</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
