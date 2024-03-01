import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeroBox from "./Components/HeroBox";
import Cards from "./Components/Cards";
import RelatedDeal from "./Components/RelatedDeal";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeroBox />
      <Cards />
      <RelatedDeal />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
