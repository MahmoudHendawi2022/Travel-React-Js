import React from "react";
import './logo.css'
import { MdOutlineTravelExplore } from "react-icons/md";
const Logo = () => {
  return (
    <div className="logo ">
      <a href="/#" className="flex">
        <MdOutlineTravelExplore className="icon" />
        Travel.
      </a>
    </div>
  );
};

export default Logo;
