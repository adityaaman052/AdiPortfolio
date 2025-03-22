import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "Cheers",
      projectDescription:
        "Cheers is a crowdfunding platform built with Next.js that enables users to raise funds for various causes. It features secure payment integration, allowing seamless contributions, and provides an easy-to-use interface for managing campaigns and donations.",
      projectTech: [
        "Next Js",
        "Redux Toolkit",
        "React",
        "MongoDb",
        "Razorpay",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/adityaaman052/CheersCrowdFunding",
        externalLink: "",
      },
    },
    {
      image: "/projectcalc.png",
      projectName: "AI based Calculator",
      projectDescription:
        "Let me present an AI based calculator to help you in solving Math problems seamlessly and make you life easier!",
      projectTech: [
        "Next Js",
        "Typescript",
        "React",
        "Axios",
        "Mantine UI",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/adityaaman052/AdiCalc_frontend",
        externalLink: "https://adi-calc-frontend-6wb6r50cb-aditya-amans-projects.vercel.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Realtime Chat App",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/adityaaman052/AdityaChat",
        externalLink: "https://aditya-chat-48aq.vercel.app/",
      },
    },
     {
      image: "/projectAdiFinance.png",
      projectName: "A finance manager app",
      projectDescription:
        "This is a finance manager app(fully-responsive) helps to manage you expenses smartly, consist of AI assistance for analyzing your expenses in modern UI Bar graph format and makes your life easier!",
      projectTech: [
        "NextJs",
        "Supabase",
        "Node.js",
        "Clerk",
        "Shadcn",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/adityaaman052/AdiFinance",
        externalLink: "https://adi-finance-bgqy270sp-aditya-amans-projects.vercel.app/",
      },
    },
    {
      image: "/project3.png",
      projectName: "BookStore App",
      projectDescription:
        "I created a BookstoreWeb app where users can browse and purchase books, explore genres, and manage their favorites list for easy access to their top picks.",
      projectTech: [
        "React",
        "Node.js",
        "Tailwind CSs",
        "Pytorch",
        "MongoDB",
        "Express",
        "Open AI API",
      ],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];

  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Projects I have crafted</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
