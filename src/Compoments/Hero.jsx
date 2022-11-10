import React from "react";
import "./Home.css";
import { Card } from "./Card";
import { FilterSection } from "./FilterSection";

export const Hero = () => {
  return (
    <div id="Herosection">
      <FilterSection />
      <Card />
    </div>
  );
};
