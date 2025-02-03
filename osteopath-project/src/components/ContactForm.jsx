import React, { useState } from "react";
import { Form } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-form" id="contact">
      <h2 className="contact-us-title"> Formulaire de contact </h2>
      <Form method="post">
        <div className="names">
          <div className="input-last-name">
            <label htmlFor="last-name">Nom:</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              autoComplete="family-name"
            />
          </div>
          <div className="input-name">
            <label htmlFor="name">Prenom:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="given-name"
            />
          </div>
        </div>
        <div className="contacts">
          <div className="input-email">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div className="phone-number">
            <label htmlFor="phone-number"> Téléphone:</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phone-number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>
        </div>{" "}
        <div className="message">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div className="form-button">
          <button className="submit-button" type="submit">
            Envoyer
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
