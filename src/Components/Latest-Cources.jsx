// LatestCourses.js
import React, { useState, useEffect, useRef } from 'react';
import "../Css/Latest-Cources.css";
import Image from "../Images/banner1.jpg";
import Image1 from "../Images/websites2/webdesign.jpg";
import Image2 from "../Images/websites2/webdesign2.jpg";
import Image3 from "../Images/websites2/webdevelopment.webp";
import Image4 from "../Images/websites2/webdevelopment2.jpg";
import Image5 from "../Images/websites2/wordpress.jpg";
import Image6 from "../Images/websites2/wordpress2.jpg";
import Image7 from "../Images/websites2/backend.jpg";
import Image8 from "../Images/websites2/backend2.jpg";


const courses = [
  {
    id: 1,
    category: 'WEBDESIGN',
    price: 160,
    image: Image1,
    instructor: 'John Anderson',
    title: 'Learn Web Design'
  },
  {
    id: 2,
    category: 'WEBDESIGN',
    price: 320,
    image: Image2,
    instructor: 'Stella Blair',
    title: 'Learn Web Design'
  },
  {
    id: 3,
    category: 'DEVELOPMENT',
    price: 140,
    image: Image3,
    instructor: 'Cindy Walker',
    title: 'Web Development Tips'
  },
  {
    id: 4,
    category: 'DEVELOPMENT',
    price: 340,
    image: Image4,
    instructor: 'John Peter',
    title: 'Web Development Tips'
  },
  {
    id: 5,
    category: 'WORDPRESS',
    price: 640,
    image: Image5,
    instructor: 'David Hutson',
    title: 'Latest Web Trends'
  },
  {
    id: 6,
    category: 'WORDPRESS',
    price: 210,
    image: Image6,
    instructor: 'Peter Hutson',
    title: 'Latest Web Trends'
  },
  {
    id: 7,
    category: 'BACKEND',
    price: 94,
    image: Image7,
    instructor: 'Frank Edward',
    title: 'Latest backend Trends'
  },
  {
    id: 8,
    category: 'BACKEND',
    price: 120,
    image: Image8,
    instructor: 'Candy William',
    title: 'Latest backend Trends'
  }
];

const LatestCourses = () => {
  const [filter, setFilter] = useState('Show All');
  const [visibleCourses, setVisibleCourses] = useState({});
  const observerRef = useRef(null);

  const filteredCourses = filter === 'Show All'
    ? courses
    : courses.filter(course => course.category.toUpperCase() === filter.toUpperCase());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCourses((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
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
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card) => {
      if (observerRef.current) {
        observerRef.current.observe(card);
      }
    });
  }, [filteredCourses]);

  return (
    <div className="latest-courses">
      <p className="sub-heading">LATEST COURSES</p>
      <h2 className="main-heading">Latest Courses</h2>
     
      <div className="filter-buttons">
        {['Show All', 'Webdesign', 'Development', 'Wordpress', "Backend"].map(button => (
          <button
            key={button}
            className={filter === button ? 'active' : ''}
            onClick={() => setFilter(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="course-grid">
        {filteredCourses.map(course => (
          <div 
            key={course.id} 
            className={`course-card ${visibleCourses[course.id] ? 'visible' : ''}`}
            data-id={course.id}
          >
            <div className="course-image">
              <img src={course.image} alt={course.title} />
              <span className="course-category">{course.category}</span>
              <span className="course-price">${course.price}</span>
            </div>
            <div className="course-info">
              <p className="instructor">{course.instructor}</p>
              <h3 className="course-title">{course.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCourses;