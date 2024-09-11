import React from "react";
import "./place.css";
import { CiLocationOn } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import Button from "../Button/Button";
const Place = (props) => {
  return (
    <div className="place" data-aos ={props.fade}>
      <div className="image">
        <img src={props.imgSrc} alt="" />
      </div>
      <div className="place-content">
        <div className="name">
          <h3>{props.destTitle}</h3>
          <p>
            <CiLocationOn className="icon" />
            <span>{props.location}</span>{" "}
          </p>
        </div>
        <div className="price-div">
          <div className="left">
            <p>{props.grade}</p>
            <p>
              relax <span>+1</span>
            </p>
          </div>
          <div className="right">
            <p className="price">{props.fees}</p>
          </div>
        </div>
        <div className="place-bottom">
          <p>{props.description}</p>
          <Button name="detailes" icon={<SlCalender />} />
        </div>
      </div>
    </div>
  );
};

export default Place;
