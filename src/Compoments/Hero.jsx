import React from "react";
import "./Home.css";
import { Card } from "./Card";
import { FilterSection } from "./FilterSection";

export const Hero = () => {
  const [initialFilter, setInitialFilter] = React.useState({
    loc: false,
    date: false,
    price: false,
    type: false,
  });
  return (
    <div id="Herosection">
      <FilterSection setInitialFilter={setInitialFilter} />
      <Card initialFilter={initialFilter} />
    </div>
  );
};
