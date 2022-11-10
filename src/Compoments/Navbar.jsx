import React from "react";
import "./Navbar.css";
import { HiMailOpen } from "@react-icons/all-files/hi/HiMailOpen";
import { BiChevronDown } from "@react-icons/all-files/bi/BiChevronDown";
export const NavBar = () => {
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
        <div id="Subnav2_left">
          <a href="#">
            <button>Rent</button>
          </a>

          <a href="#">
            <button>Buy</button>
          </a>

          <a href="#">
            <button>Sell</button>
          </a>

          <a href="#">
            <button>
              Manage Property <BiChevronDown />{" "}
            </button>
          </a>

          <a href="#">
            <button>
              Resources <BiChevronDown />
            </button>
          </a>
        </div>
        <div id="Subnav2_right">
          <button id="SubnavLogin">Login</button>
          <button id="SubnavSignup">Sign in</button>
        </div>
      </div>
    </div>
  );
};
