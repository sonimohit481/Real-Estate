import React from "react";
import "./FilterSection.css";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { BiChevronDownCircle } from "@react-icons/all-files/bi/BiChevronDownCircle";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
export const FilterSection = () => {
  const handlechange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div id="FilterSection">
      <div id="filter_text">
        <div id="filterheadding">Search properties to rent</div>
        <div id="foltersearchbox">
          <input type="search" placeholder="Search with Search Bar" />
          <BiChevronDown
            style={{
              backgroundColor: "#E7E5F6",
              color: "#736AE5",
              borderRadius: "100%",
            }}
          />
        </div>
      </div>
      <div id="filter_main"></div>
    </div>
  );
};
