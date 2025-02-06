import React, { useEffect } from "react";

const Apropos = () => {
  useEffect(() => {
    console.log("La mappa è stata caricata");
  }, []);

  return (
    <section className="apropos-container">
      <section className="Location">
        <h2>Location</h2>
      </section>
      <section className="tarifs">
        <h2>Tarifs</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit
          amet accumsan arcu.
        </p>
        <div className="tarif-list">
          <h4>Tarif 1: €50</h4>
          <h4>Tarif 2: €100</h4>
          <h4>Tarif 3: €150</h4>
        </div>
        <button>Prendez Rendez-vous</button>
      </section>
    </section>
  );
};

export default Apropos;
