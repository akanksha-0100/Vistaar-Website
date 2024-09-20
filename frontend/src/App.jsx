import React from "react";
import "./index.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Footer/>
      </div>
    </>
  );
}

export default App;
