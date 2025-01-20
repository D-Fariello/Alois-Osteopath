import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/main.scss";
import Hero from "./components/Hero";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
