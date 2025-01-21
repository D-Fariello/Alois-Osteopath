import React, { useState } from "react";
import {
  FaStar,
  FaRegClock,
  FaEuroSign,
  FaCalendarAlt,
  FaCertificate,
  FaHandsHelping,
  FaClock,
  FaChild,
} from "react-icons/fa";
import Header from "./Header";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Pôle Ostéo",
      text: "Soulagez vos douleurs avec l’ostéopathie – Un suivi personnalisé pour chaque étape de votre bien-être, ouvert 7j/7 à Nice.",
      buttonText: "Prendre Rendez-Vous",
      buttonHeader: "Prendre rendez-vous 7/7 8H-23H",
      backgroundColor: "#b7cec3",
    },
    {
      title: "Consultation en urgence",
      text: (
        <>
          Besoin d'une consultation immédiate ? Nous vous accueillons sans
          rendez-vous <br />
          Nice, 22 rue Gounod
        </>
      ),
      buttonText: "Nous appeler",
      buttonHeader: "Sans rendez-vous 7/7 8H-23H",
      backgroundColor: "#d3606a",
    },
  ];

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <Header
        currentSlide={currentSlide}
        slideTexts={slides.map((slide) => slide.buttonHeader)}
        buttonColor={slides[currentSlide].backgroundColor}
      />

      {/* Section 1 */}
      <section className="hero-section">
        <div className="carousel-container">
          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                className={`carousel-slide ${
                  currentSlide === index ? "active" : ""
                }`}
                key={index}
                style={{
                  backgroundColor: slide.backgroundColor,
                }}
              >
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.text}</p>
                <button
                  className={`btn btn-primary ${
                    slides[currentSlide].buttonText === "Nous appeler"
                      ? "button-red"
                      : ""
                  }`}
                >
                  {slides[currentSlide].buttonText}
                </button>
                <div className="carousel-dots">
                  {slides.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`dot ${
                        currentSlide === dotIndex ? "active" : ""
                      }`}
                      onClick={() => setCurrentSlide(dotIndex)}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Arrows */}
          <button className="carousel-arrow left" onClick={handlePrev}>
            ◀
          </button>
          <button className="carousel-arrow right" onClick={handleNext}>
            ▶
          </button>
        </div>
        {/* Info Bar */}
        <div className="general-info">
          <div className="info-item">
            <FaStar className="info-icon" />
            <span>4.9/5 avis Google</span>
          </div>
          <div className="info-item">
            <FaEuroSign className="info-icon" />
            <span>Remboursement mutuelle</span>
          </div>
          <div className="info-item">
            <FaCalendarAlt className="info-icon" />
            <span>Avec ou sans rendez-vous</span>
          </div>
          <div className="info-item">
            <FaRegClock className="info-icon" />
            <span>8h à 23h</span>
          </div>
        </div>

        {/* Icons Section  */}
        <section className="additional-info">
          <div className="additional-item">
            <FaCertificate className="degree-icon" />
            <span className="additional-text">Diplôme D.O. agréé</span>
          </div>
          <div className="additional-item">
            <FaHandsHelping className="heart-icon" />
            <span className="additional-text">Prise en charge rapide</span>
          </div>
          <div className="additional-item">
            <FaClock className="timer-icon" />
            <span className="additional-text">Fiabilité et bienveillance</span>
          </div>
          <div className="additional-item">
            <FaChild className="baby-icon" />
            <span className="additional-text">Du bébé à l’adulte</span>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hero;
