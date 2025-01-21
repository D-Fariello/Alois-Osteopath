import React, { useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Pôle Ostéo",
      text: "Soulagez vos douleurs avec l’ostéopathie – Un suivi personnalisé pour chaque étape de votre bien-être, ouvert 7j/7 à Nice.",
      buttonText: "Prendre Rendez-Vous",
      backgroundColor: "#b7cec3",
    },
    {
      title: "Consultation en urgence",
      text: "Besoin d'une consultation immédiate ? Nous vous accueillons sans rendez-vous Nice, 22 rue Gounod",
      buttonText: "Prendre Rendez-Vous",
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
                <button className="btn btn-primary">{slide.buttonText}</button>
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
      </section>
    </div>
  );
};

export default Hero;
