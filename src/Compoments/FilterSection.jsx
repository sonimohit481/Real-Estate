import React from "react";
import "./FilterSection.css";
import { IoIosArrowDropdownCircle } from "@react-icons/all-files/io/IoIosArrowDropdownCircle";
import { BiChevronDownCircle } from "@react-icons/all-files/bi/BiChevronDownCircle";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
export const FilterSection = ({ setInitialFilter }) => {
  let initial = {
    loc: false,
    date: false,
    price: false,
    type: false,
  };
  const loc = (e) => {
    initial.loc = e.target.value;
  };
  const date = (e) => {
    let date = e.target.value.split("-").join("");
    initial.date = +date;
  };
  const price = (e) => {
    let price = e.target.value.split("-").join("");
    initial.price = price;
  };
  const type = (e) => {
    initial.type = e.target.value;
  };
  const submit = (e) => {
    e.preventDefault();
    setInitialFilter(initial);
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
      <div id="filter_main">
        <form onSubmit={(e) => submit(e)}>
          <label>
            loc
            <input type="text" name="loc" onChange={loc} />
          </label>
          <label>
            price
            <input
              type="number"
              min={"500"}
              step={"100"}
              max={"90000"}
              name="price"
              onChange={price}
            />
          </label>
          <label>
            when to shift
            <input type="Date" name="date" onChange={date} />
          </label>
          <label>
            type:
            <select onChange={type}>
              <option value={"house"}>House</option>
              <option value={"flat"}>Flat </option>
              <option value={"Villa"}>Villa</option>
              <option value={"Office"}>Office</option>
            </select>
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
