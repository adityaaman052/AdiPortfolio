import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FiGitBranch } from "react-icons/fi";

function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
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
        href="#"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Crafted and Developed by Aditya Aman.</span>
        <div className="footer-git">
          <div className="footer-git-item">
            <FaRegStar className="footer-git-item-icon" />
            <span className="footer-git-item-text"></span> {/* Static number */}
          </div>
          <div className="footer-git-item">
            <FiGitBranch className="footer-git-item-icon" />
            <span className="footer-git-item-text"></span> {/* Static number */}
          </div>
        </div>
        <div className="footer-date-time" style={{ color: "#A0AEC0" }}>
          <span>{currentDateTime}</span>
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
