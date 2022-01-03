import React from "react";
import Explore from "../../Explore/Explore";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Services></Services>
      <Explore></Explore>
      <Footer></Footer>
    </div>
  );
};

export default Home;
