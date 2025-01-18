import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {
  const [githubInfo, setGitHubInfo] = useState({
    stars: null,
    forks: null,
  });

  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/repos/koolkishan/chat-app-react-nodejs")
      .then((response) => response.json())
      .then((json) => {
        const { stargazers_count, forks_count } = json;
        setGitHubInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));

    // Update date and time every minute
    const updateDateTime = () => {
      const date = new Date();
      const formattedDate = date.toLocaleString(); // Formats the date as "MM/DD/YYYY, HH:MM:SS"
      setCurrentDateTime(formattedDate);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer>
      <Link
        href="https://github.com/koolkishan/chat-app-react-nodejs"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Aditya Aman.</span>
        {githubInfo && (
          <div className="footer-git">
            <div className="footer-git-item">
              <FaRegStar className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.stars}</span>
            </div>
            <div className="footer-git-item">
              <FiGitBranch className="footer-git-item-icon" />
              <span className="footer-git-item-text">{githubInfo.forks}</span>
            </div>
          </div>
        )}
        <div className="footer-date-time" style={{ color: "#A0AEC0" }}>
          <span>{currentDateTime}</span>
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
