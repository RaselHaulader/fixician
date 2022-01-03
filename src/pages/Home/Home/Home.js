import React from "react";
import ServiceDetails from "../Services/ServiceDetails/ServiceDetails";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Services></Services>
      <ServiceDetails />
    </div>
  );
};

export default Home;
