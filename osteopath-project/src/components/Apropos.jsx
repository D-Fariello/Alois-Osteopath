import React, { useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Apropos = () => {
  useEffect(() => {
    console.log("La mappa è stata caricata");
  }, []);

  return (
    <section className="apropos-container">
      <section className="Location">
        <h2>Location</h2>
        <MapContainer
          center={[48.866667, 2.333333]}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
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
