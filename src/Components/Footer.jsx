import React, { useEffect, useRef } from "react";
import "../Css/Footer.css";
import Image3 from "../Images/AICE.png";

const Footer = () => {
  const footerRef = useRef(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    contentRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
      contentRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-content" ref={(el) => (contentRefs.current[0] = el)}>
        <i className="fas fa-bolt"></i>
        <h2 style={{ padding: "2rem" }} className="footer-heading">
          Supercharge your technical enthusiasms and growth with cutting-edge
          tools and expertise.
        </h2>
        <p className="footer-subheading">
          Flexibility, scalability, and innovation. Get started now.
        </p>
        <div className="footer-buttons">
          <button className="btn btn-primary">Get Started →</button>
        </div>
      </div>
      <div className="footer-links" ref={(el) => (contentRefs.current[1] = el)}>
        <div className="footer-logo">
          <img src={Image3} alt="Mira Intelligence" />
        </div>
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Press Release</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Help center</a></li>
            <li><a href="#">Use cases</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Social</h3>
          <ul>
            <li><a href="#"><i className="fab fa-twitter"></i>Twitter</a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
            <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-tiktok"></i> TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" ref={(el) => (contentRefs.current[2] = el)}>
        <p>© 2024 A Product of Knights.dev</p>
      </div>
    </footer>
  );
};

export default Footer;