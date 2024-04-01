import React from "react";
import PopulationGraph from "../../components/PopulationGraph/PopulationGraph";
import CryptoCard from "../../components/CryptoCard/CryptoCard";
import "./style.css";

const Homepage = () => {
  return (
    <div className="wrapper">
      <div>
        <h2 className="mb-2">Population Graph</h2>
        <PopulationGraph />
      </div>
      <div>
        <h2 className="mb-2">Crypto Price</h2>
        <CryptoCard />
      </div>
    </div>
  );
};

export default Homepage;
