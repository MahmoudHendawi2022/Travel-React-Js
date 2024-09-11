import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar.jsx";
import Main from "./Component/Main/Main.jsx";
import Home from "./Component/Home/Home.jsx";
import Footer from "./Component/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
};

export default App;
