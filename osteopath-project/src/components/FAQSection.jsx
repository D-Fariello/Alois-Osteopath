import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce que l'ostéopathie ?",
      answer:
        "L'ostéopathie est une approche thérapeutique qui vise à soulager les douleurs et améliorer la mobilité grâce à des techniques manuelles.",
    },
    {
      question: "Quand devrais-je consulter un ostéopathe ?",
      answer:
        "Vous pouvez consulter en cas de douleurs musculo-squelettiques, maux de tête, troubles digestifs, ou encore après un accident.",
    },
    {
      question: "Les consultations sont-elles remboursées ?",
      answer:
        "Oui, la plupart des mutuelles remboursent partiellement ou totalement les consultations d'ostéopathie.",
    },
    {
      question: "Combien de temps dure une séance ?",
      answer:
        "Une séance d'ostéopathie dure généralement entre 30 et 45 minutes.",
    },
    {
      question: "Puis-je venir avec mon enfant ?",
      answer:
        "Bien sûr ! L'ostéopathie est adaptée pour les bébés, les enfants et les adultes.",
    },
  ];

  return (
    <section id="faq-section" className="faq-section">
      <h2 className="faq-title">FAQ - Vos Questions, Nos Réponses</h2>
      <div className="faq-items">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              {openFAQ === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQ === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
