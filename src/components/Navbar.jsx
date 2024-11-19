import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

  return (
    <nav className={`navbar ${isActive ? "active" : ""}`}>
      <img src="/src/assets/logo.jpg" alt="Logo" height="100" width="100" />
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <div className={`navbar-links ${isActive ? "active" : ""}`}>
        <Link
          to="/"
          className={activeLink === "home" ? "active" : ""}
          onClick={() => handleLinkClick("home")}
        >
          Inicio
        </Link>
        <Link
          to="/services"
          className={activeLink === "services" ? "active" : ""}
          onClick={() => handleLinkClick("services")}
        >
          Servicios
        </Link>
        <Link
          to="/contacto"
          className={activeLink === "contacto" ? "active" : ""}
          onClick={() => handleLinkClick("contacto")}
        >
          Contacto
        </Link>
        <Link
          to="/blog"
          className={activeLink === "blog" ? "active" : ""}
          onClick={() => handleLinkClick("blog")}
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
