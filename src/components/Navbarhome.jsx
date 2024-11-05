// Navbarhome.jsx
import { useState } from "react";
import "../styles/Navbar.css";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Impor logo dengan benar

function Navbarhome() {
  const [statusTampil, setStatusTampil] = useState(false);

  const toggleMenu = () => {
    setStatusTampil(!statusTampil);
  };

  return (
    <nav>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="Coffee Logo" className="logo-image" /> {/* Gunakan logo di sini */}
          <Link to="/">Habornas Coffee</Link>
        </div>
        <button onClick={toggleMenu}>
          {statusTampil ? <IoMdClose /> : <FaBarsStaggered />}
        </button>
        <div className={`menu ${statusTampil ? "tampil" : ""}`} onClick={toggleMenu}>
          <ul>
            <li>
              <HashLink to="/#portfolio">Biji Coffee</HashLink>
            </li>
            <li>
              <HashLink to="/#about">Tentang</HashLink>
            </li>
            <li>
              <Link to="/Experience">Sejarah</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarhome;
