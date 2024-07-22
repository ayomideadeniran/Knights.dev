import React, { useEffect, useRef } from 'react';
import "../Css/Courses.css";
// import Image from "../Images/banner1.jpg";
import Image1 from "../Images/AICE.png";
import Image from "../Images/websites/Webdesign.jpg";
import Image2 from "../Images/websites/software development.jpg";
import Image3 from "../Images/websites/data analysis.png";
import Image4 from "../Images/websites/web development.jpg";
import Image5 from "../Images/websites/mobile development.png";
import Image6 from "../Images/websites/data science.jpg";

const TutorialCard = ({ image, title, description, author, duration, rating }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="tutorial-card animate-on-scroll" ref={cardRef}>
      <div className="thumbnail">
        <img src={image} alt={title} className='video-image'/>
        <div className="play-button">▶</div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="author">
        <img src={author.image} alt={author.name} className="author-image" />
        <span>{author.name}</span>
      </div>
      <div className="meta">
        <div className="rating">
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </div>
        <span className="duration">{duration}</span>
      </div>
    </div>
  );
};

const PopularTutorials = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const tutorials = [
    {
      image: Image,
      title: "Web Design",
      description: "Highly creative and skilled web designer with expertise in crafting visually stunning and user-friendly websites that drive engagement and conversion. Proficient in HTML, CSS, JavaScript, and UI/UX design principles.",
      author: { name: "John Anderson", image: Image1 },
      duration: "4 months",
      rating: 5
    },
    {
      image: Image2,
      title: "Software Development",
      description: "Highly skilled software developer with expertise in designing, building, and deploying scalable, efficient, and reliable software applications. Proficient in programming languages like Java, Python, and C++, with a strong understanding of data structures, algorithms, and software engineering principles.",
      author: { name: "Phillip Massey", image: Image1 },
      duration: "12 months",
      rating: 4
    },
    {
      image: Image3,
      title: "Data Analytics",
      description: "Highly skilled data analyst with expertise in extracting, analyzing, and interpreting complex data to drive business insights and informed decision-making. Proficient in data analysis tools like Excel, SQL, and statistical software, with a strong understanding of data visualization, regression analysis, and data mining techniques.",
      author: { name: "Paul Smith", image: Image1 },
      duration: "3 months",
      rating: 3
    },
    {
      image: Image4,
      title: "Web Development",
      description: "Highly skilled web developer with expertise in building fast, secure, and scalable web applications using modern web technologies like HTML5, CSS3, JavaScript, and frameworks like React, Angular, and Vue. Proficient in responsive web design, UI/UX, and backend development with Node.js, Ruby on Rails, and Django.",
      author: { name: "Lisa Scott", image: Image1 },
      duration: "3 months",
      rating: 4
    },
    {
      image: Image5,
      title: "Mobile Development",
      description: "Highly skilled mobile developer with expertise in building scalable, efficient, and user-friendly mobile applications for Android and iOS using Java, Swift, Kotlin, and React Native. Proficient in mobile app design principles, UI/UX, and backend integration with APIs and databases.",
      author: { name: "Preeti Singh", image: Image1 },
      duration: "3 months",
      rating: 4
    },
    {
      image: Image6,
      title: "Data Science",
      description: "Highly skilled data scientist with expertise in extracting insights and knowledge from structured and unstructured data using machine learning, statistical modeling, and data visualization techniques. Proficient in programming languages like Python, R, and SQL, with a strong understanding of data preprocessing, feature engineering, and model evaluation.",
      author: { name: "Mary Sanchez", image: Image1 },
      duration: "3 months",
      rating: 3
    },
  ];

  return (
    <div className="popular-tutorials">
      <h2 className="animate-on-scroll" ref={headerRef}>Most <span className="purple">popular</span> tutorials</h2>
      <div className="tutorials-grid">
        {tutorials.map((tutorial, index) => (
          <TutorialCard key={index} {...tutorial} />
        ))}
      </div>
    </div>
  );
};

export default PopularTutorials;