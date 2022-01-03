import React from "react";
import Explore from "../../Explore/Explore";
import Navbar from "../../Shared/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";
import Experts from "../Experts/Experts";
import Faq from "../Faq/Faq";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Counter></Counter>
      <Services></Services>
      <Explore></Explore>
      <Faq></Faq>
      <Review></Review>
    </div>
  );
};

export default Home;
