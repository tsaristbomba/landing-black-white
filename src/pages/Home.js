import React, { useState } from "react";
import Hero from "../components/Hero";
import Info1 from "../components/Info1";
import Navbar from "../components/Navbar";
import { homeObj, info1Obj, info2Obj, info3Obj, info4Obj } from "../data";
import { animateScroll as scroll } from "react-scroll";
import Info2 from "../components/Info2";
import Info3 from "../components/Info3";
import Info4 from "../components/Info4";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleHome() {
    scroll.scrollToTop();
  }

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggleHome={toggleHome} handleMenu={handleMenu} />
      <Sidebar isOpen={isOpen} handleMenu={handleMenu} />
      <Hero {...homeObj} />
      <Info1 {...info1Obj} />
      <Info2 {...info2Obj} />
      <Info3 {...info3Obj} />
      <Info4 {...info4Obj} />
      <Footer />
    </>
  );
};

export default Home;
