import React from "react";
import "../styles/Developer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import developers from "../data/developerdata";

function Developer() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/developer/${id}`); // Navigasi ke halaman detail berdasarkan ID
  };

  return (
    <div className="developer-container">
      <h2>Meet the Developers</h2>
      <div className="developer-grid">
        {developers.map((developer) => (
          <div
            className="developer-card"
            key={developer.id}
            onClick={() => handleCardClick(developer.id)} // Tambahkan navigasi saat klik kartu
          >
            <img src={developer.image} alt={developer.name} className="developer-image" />
            <h3>{developer.name}</h3>
            <p className="developer-role">{developer.role}</p>
            <div className="social-links">
              <a href={developer.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={developer.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Developer;
