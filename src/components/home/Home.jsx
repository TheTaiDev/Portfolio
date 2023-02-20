import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
const Home = () => {
  return (
    <selection className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
      </div>
      <ScrollDown />
    </selection>
  );
};
    
export default Home;
