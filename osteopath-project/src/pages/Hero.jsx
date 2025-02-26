import React, { useState } from "react";
import { FaStar, FaRegClock, FaEuroSign, FaCalendarAlt } from "react-icons/fa";
import slides from "../data/slidesData";
import Header from "../components/Header";
import FAQSection from "../components/FAQSection";
import ContactForm from "../components/ContactForm";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
        buttonLink={slides[currentSlide].buttonLink}
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
                <a
                  href={slide.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`btn btn-primary ${
                      slide.buttonText === "Nous appeler" ? "button-red" : ""
                    }`}
                  >
                    {slide.buttonText}
                  </button>
                </a>
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
            <img
              src="/icones/hero-icones/Diplome.png"
              alt="degree"
              className="degree-icon"
            />
            <span className="additional-text">Diplôme D.O. agréé</span>
          </div>
          <div className="additional-item">
            <img
              src="/icones/hero-icones/Chrono.png"
              alt="Bienveillance"
              className="heart-icon"
            />
            <span className="additional-text">Prise en charge rapide</span>
          </div>
          <div className="additional-item">
            <img
              src="/icones/hero-icones/Bienveillance.png"
              alt="timer"
              className="timer-icon"
            />
            <span className="additional-text">Fiabilité et bienveillance</span>
          </div>
          <div className="additional-item">
            <img
              src="/icones/hero-icones/TrancheAge.png"
              alt="Tranche d'age"
              className="baby-icon"
            />
            <span className="additional-text">Du bébé à l’adulte</span>
          </div>
        </section>

        {/* FAQ Section  */}
        <FAQSection />
        {/* Contact Form Section  */}
        <ContactForm />
      </section>
    </div>
  );
};

export default Hero;
