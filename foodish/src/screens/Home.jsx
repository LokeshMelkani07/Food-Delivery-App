import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Carousel />
      <div className="m-3">
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
