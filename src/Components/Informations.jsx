import React, { useEffect, useRef, useState } from "react";
import "../Css/Informations.css";
import Image from "../Images/banner1.jpg";
import Image1 from "../Images/website3/career.jpg";
import Image2 from "../Images/website3/Develop.jpg";
import Image3 from "../Images/website3/Transform.jpg";


const BusinessPlanningTools = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('.tool-section');
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });
  }, []);

  return (
    <div className="business-planning-tools">
      <h1>What You Can Do with Our Platform</h1>
      <section 
        className={`tool-section ${visibleSections['section1'] ? 'visible' : ''}`}
        data-id="section1"
      >
        <div className="tool-content">
          <h2>Launch Your Dream Career</h2>
          <p>
            Launch a successful career in tech in minutes—regardless of your
            experience level or location. Get access to interactive lessons,
            real-world projects, and expert mentorship to help you achieve your
            career goals.
          </p>
        </div>
        <div className="tool-image">
          <img src={Image1} alt="Business Plan Template" />
        </div>
      </section>
      <section 
        className={`tool-section reverse ${visibleSections['section2'] ? 'visible' : ''}`}
        data-id="section2"
      >
        <div className="tool-content">
          <h2>Develop In-Demand Skills</h2>
          <p>
            Gain in-demand skills and become job-ready in a matter of months—no
            matter your starting level. Stay up-to-date with industry trends and
            technologies, and develop a skillset that's in high demand by top
            employers.
          </p>
        </div>
        <div className="tool-image">
          <img src={Image2} alt="Financial Plans" />
        </div>
      </section>
      <section 
        className={`tool-section ${visibleSections['section3'] ? 'visible' : ''}`}
        data-id="section3"
      >
        <div className="tool-content">
          <h2>Transform Your Idea into a Reality</h2>
          <p>
            Turn your idea into a reality with our platform's resources and
            support—no matter how big or small. Get access to tools, templates,
            and expert guidance to help you validate your idea, build a
            prototype, and launch a successful startup.
          </p>
        </div>
        <div className="tool-image">
          <img src={Image3} alt="Marketing Analysis" />
        </div>
      </section>
    </div>
  );
};

export default BusinessPlanningTools;