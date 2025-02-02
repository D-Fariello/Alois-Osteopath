import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style/main.scss";
import Hero from "./pages/Hero";
import Specialities from "./pages/Specialities";
import Equipe from "./pages/Equipe";
import MemberDetail from "./pages/MemberDetail";

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/*<Header />  Header for the Hero page */}
        <Hero />
        <Footer />
      </>
    ),
  },
  {
    path: "/specialities",
    element: (
      <>
        <Header /> {/* Header for the Specialities page */}
        <Specialities />
        <Footer />
      </>
    ),
  },

  {
    path: "/equipe",
    element: (
      <>
        <Header /> {/* Header for the Equipe page */}
        <Equipe />
        <Footer />
      </>
    ),
  },

  {
    path: "/equipe",
    element: (
      <>
        <Header /> {/* Header for the Member page */}
        <MemberDetail />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <div className="app">{/* Routes will be rendered automatically */}</div>
    </RouterProvider>
  );
};

export default App;
