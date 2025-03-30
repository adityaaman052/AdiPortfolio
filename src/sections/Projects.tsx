import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { HiDownload } from "react-icons/hi";
import { motion } from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/projectAdiFinance.png",
      projectName: "A finance manager app",
      projectDescription:
        "This is a finance manager app (fully-responsive) that helps manage your expenses smartly, with AI assistance for analyzing expenses in a modern UI Bar graph format.",
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
        externalLink: "https://adi-finance.vercel.app/",
        pdf: "/pdfs/AdiFinance_Presentation.pdf",
      },
    },
    {
      image: "/projectcalc.png",
      projectName: "AI based Calculator",
      projectDescription:
        "An AI-based calculator to help you solve math problems seamlessly and make life easier!",
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
        externalLink:
          "https://drive.google.com/file/d/1gxHMBxg00FHTjglkW2l_wmYUXiVBTPIY/view?usp=drive_link",
        pdf: "/pdfs/aiCalc.pdf",
      },
    },
    {
      image: "/project2.png",
      projectName: "Realtime Chat App",
      projectDescription:
        "A chat app made with React and Node.js that sends real-time messages and is highly scalable.",
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
        externalLink: "https://drive.google.com/file/d/1SVg6C8XvVyxTz7E_2ghtWv8Uzgbu_3kW/view?usp=sharing",
        pdf: "/pdfs/AdityaChat_Presentation.pdf",
      },
    },
    {
      image: "/assistance.png",
      projectName: "Visual and Hearing Assistance",
      projectDescription:
        "AI-powered tool for visually and hearing-impaired learners, enabling accessible study through voice commands, MCQ generation, and gesture recognition.",
      projectTech: [
        "NextJs",
        "Flask",
        "AI & ML",
        "API services",
        "Tailwind CSS",
        "Data processing",
        "Python Libraries",
      ],
      projectExternalLinks: {
        github: "https://github.com/adityaaman052/AdityaChat",
        externalLink: "https://drive.google.com/file/d/1jLIuywot2NeG9pf3afk3vRXJh8TqPKot/view?usp=sharing",
        pdf: "/pdfs/visualhear.pdf",
      },
    },
    {
      image: "/project1.png",
      projectName: "Cheers",
      projectDescription:
        "A crowdfunding platform built with Next.js for raising funds with secure payment integration.",
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
        externalLink: "https://drive.google.com/file/d/1lFYNvIa3K0sSEenxNhXcbBuxBku6LvJ-/view?usp=sharing", // Placeholder added
        pdf: "/pdfs/Cheers_Presentation.pdf",
      },
    },
    {
      image: "/fragrancia.png",
      projectName: "Fragrancia",
      projectDescription:
        "A crowdfunding platform built with Next.js for raising funds with secure payment integration.",
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
        externalLink: "https://drive.google.com/file/d/1C3sSuNKAgbreJGYqaOv8DIGDEmvTGWxr/view?usp=drive_link", // Placeholder added
        pdf: "/pdfs/Cheers_Presentation.pdf",
      },
    },
    {
      image: "/project3.png",
      projectName: "BookStore App",
      projectDescription:
        "A Bookstore Web app where users can browse and purchase books, explore genres, and manage favorites.",
      projectTech: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "Pytorch",
        "MongoDB",
        "Express",
        "Open AI API",
      ],
      projectExternalLinks: {
        github: "https://github.com/placeholder/BookstoreApp", // Placeholder added
        externalLink: "https://bookstore-app.vercel.app/", // Placeholder added
        pdf: "/pdfs/BookStore_Presentation.pdf",
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
          }) => (
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
                      href={projectExternalLinks.github || "#"}
                      className="project-info-links-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </Link>
                  </li>
                  <li className="project-info-links-item">
                    <Link
                      href={projectExternalLinks.externalLink || "#"}
                      className="project-info-links-item-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                    </Link>
                  </li>
                  <li className="project-info-links-item">
                    <a
                      href={projectExternalLinks.pdf || "#"}
                      download
                      className="project-info-links-item-link"
                    >
                      <HiDownload />
                    </a>
                  </li>
                </ul>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Projects;
