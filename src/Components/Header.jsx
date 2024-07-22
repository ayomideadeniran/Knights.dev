import React, { useState, useEffect } from "react";
import "../Css/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [menuOpen]);

  return (
    <div className={`app ${scrollDirection}`}>
      <header>
        <a style={{ textDecoration: "none" }} href="#">
        <div className="logo">KNIGHTS</div>
        </a>
        {!menuOpen ? (
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="cancel" onClick={toggleMenu}>
            <div></div>
            <div></div>
          </div>
        )}
      </header>
      <nav className={menuOpen ? "nav-open" : ""}>
        <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Courses</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Team</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Events</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Register Now!</a>
      </nav>
    </div>
  );
};

export default Header;