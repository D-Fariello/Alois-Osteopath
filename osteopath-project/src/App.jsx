import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/main.scss";
import Hero from "./pages/Hero";
import Specialities from "./pages/Specialities";
import ContactForm from "./components/ContactForm";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/*<Header />  Header for the Hero page */}
        <Hero />
      </>
    ),
  },
  {
    path: "/specialities",
    element: (
      <>
        <Header /> {/* Header for the Specialities page */}
        <Specialities />
      </>
    ),
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="app">
        {/* Routes will be rendered automatically */}
        <Footer />
      </div>
    </RouterProvider>
  );
};

export default App;
