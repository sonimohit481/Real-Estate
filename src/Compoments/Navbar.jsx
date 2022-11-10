import React from "react";
import "./Navbar.css";
import { HiMailOpen } from "@react-icons/all-files/hi/HiMailOpen";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
export const Navbar = () => {
  return (
    <div id="Nav">
      <div id="Subnav1">
        <div>
          <HiMailOpen style={{ color: "6E66E6", fontSize: "32px" }} />
        </div>
        <div>
          <h3>Estatery</h3>
        </div>
      </div>
      <div id="Subnav2">
        <ul>
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>
            Manage Property <BiChevronDown />{" "}
          </li>
          <li>
            Resources <BiChevronDown />
          </li>
        </ul>
      </div>
      <div id="Subnav3">
        <button>Login</button>
        <button>Sign in</button>
      </div>
    </div>
  );
};
