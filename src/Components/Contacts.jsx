import React, { useState, useRef, useEffect } from "react";
import emailjs from "emailjs-com";
import "../Css/Contact.css";

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_project: "",
  });
  const [contactMessage, setContactMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const formRef = useRef();
  const containerRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6tc08mm",
        "template_6l5fomd",
        formRef.current,
        "tAOK-Tbp1S3gFjS1U"
      )
      .then(
        () => {
          setContactMessage("Message sent successfully ");
          setTimeout(() => {
            setContactMessage("");
          }, 5000);
          setFormData({
            user_name: "",
            user_email: "",
            user_project: "",
          });
        },
        () => {
          setContactMessage("Message not sent (service error) ❌");
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div>
      <section className="contact section" id="contact">
        <div 
          ref={containerRef}
          className={`contact__container container grid ${isVisible ? 'visible' : ''}`}
        >
          <h3 className="section__subtitle">
            Get In <span>Touch</span>
          </h3>
          <h2 className="section__title">Contact Me</h2>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact__form"
            id="contact-form"
          >
            <div className="contact__group">
              <input
                type="text"
                name="user_name"
                required
                placeholder="Enter your name"
                className="contact__input"
                value={formData.user_name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="user_email"
                required
                placeholder="Enter your email"
                className="contact__input"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="user_project"
              required
              placeholder="Enter your message"
              className="contact__input"
              value={formData.user_project}
              onChange={handleChange}
            ></textarea>
            <p className="contact__message" id="contact-message">
              {contactMessage}
            </p>
            <button type="submit" className="button contact__button">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Form;