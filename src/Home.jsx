import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import HowitWork from "./HowitWork";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowitWork />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
