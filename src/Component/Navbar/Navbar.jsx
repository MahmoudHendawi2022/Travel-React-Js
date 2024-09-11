import React from "react";
import "./navbar.css";

import { CgMenuGridO } from "react-icons/cg";
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from "react";
import Logo from "../Logo/Logo";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState("links flex");

  return (
    <section className="navBar">
      <div className="container flex">
        <Logo />
        <ul className={toggleMenu}>
          <IoMdCloseCircle onClick={()=>setToggleMenu("links flex")} className="close-icon"/>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#">Packages</a>
          </li>
          <li>
            <a href="/#">Shop</a>
          </li>
          <li>
            <a href="/#">About</a>
          </li>
          <li>
            <a href="/#">Pages</a>
          </li>
          <li>
            <a href="/#">News</a>
          </li>
          <li>
            <a href="/#">Contact</a>
          </li>
          <button>
            <a href="/#">BOOK NOW</a>
          </button>
        </ul>
        
        <CgMenuGridO onClick={()=>setToggleMenu("links flex activeNavber")}
          className="menu-icon"
        />
      </div>
    </section>
  );
};

export default Navbar;
