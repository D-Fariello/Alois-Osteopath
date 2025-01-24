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
    element: <Hero />,
  },
  {
    path: "/specialities", // Add the contact route
    element: <Specialities />,
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      {" "}
      {/* Use RouterProvider for routing */}
      <div className="app">
        {/* <Header /> */}

        {/* Page Content */}
        {/* Routes will be rendered automatically */}

        {/* Footer */}
        <Footer />
      </div>
    </RouterProvider>
  );
};

export default App;
