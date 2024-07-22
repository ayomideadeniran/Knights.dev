import React, { useEffect, useRef } from "react";
import "../Css/Main.css";
import Image from "../Images/banner1.jpg";
import Image2 from "../Images/banner-item-01.jpg";
import Image3 from "../Images/ayomide.png";
import Image4 from "../Images/Emma.jpg";
import Image5 from "../Images/Gideon.jpg";
import Image6 from "../Images/Bright.jpg";

function Main() {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const winners = [
    {
      name: "Gideon Bature",
      Track: "Software Engineer",
      Place: "Online Tutor",
      image: Image5,
    },

    {
      name: "Edoh Emmanuel",
      Track: "Web Developer",
      Place: "Online Tutor",
      image: Image4,
    },
    {
      name: "Adeniran Ayomide",
      Track: "Mern Stack Developer",
      Place: "Online Tutor",
      image: Image3,
    },
    {
      name: "Bright Gabriel",
      Track: "Graphics Designer",
      Place: "Online Tutor",
      image: Image6,
    },
 
  ];

  return (
    <div className="banner-container">
      <img src={Image2} alt="Banner" className="banner" />
      <div className="banner-text animate-on-scroll">
        <h1>Get Schooled 📖</h1>
        <button>Register for free ➡️</button>
      </div>

      <div className="learn animate-on-scroll">
        <p className="learn-p">
          Learn from the <strong>Pros.</strong>
        </p>
      </div>

      <div className="award-winners">
        {winners.map((winner, index) => (
          <div key={index} className="winner-card animate-on-scroll">
            <img
              src={winner.image}
              alt={winner.name}
              className="winner-image"
            />
            <h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#FFFF55"
                className="name-svg"
              >
                <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
              </svg>
              {winner.name}
            </h3>
            <p className="award">{winner.Track}</p>
            <p className="year">{winner.Place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;