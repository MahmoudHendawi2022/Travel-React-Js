import React, { useEffect } from "react";
import "./home.css";
import { CiLocationOn } from "react-icons/ci";
import { HiFilter } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { TfiMenuAlt } from "react-icons/tfi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import video from "../../assets/Videooo.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import Overlay from "../Overlay/Overlay";
import Video from "../Video/Video";

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="home .overVideo">
      <Overlay />
      <Video video={video} />
      <div className="container">
        <div className="titles" data-aos ="fade-up">
          <p>our packages</p>
          <h2>search your holiday</h2>
        </div>
        <div className="homeContent" data-aos ="fade-up">
          <div className="form-content">
            <div className="cardDiv">
              <div className="destination inForm">
                <label htmlFor="">search yor description: </label>
                <div className="input">
                  <input type="text" placeholder="Enter name here..." />
                  <CiLocationOn className="icon" />
                </div>
              </div>
              <div className="date inForm">
                <label htmlFor="">select your date: </label>
                <div className="input">
                  <input type="date" />
                </div>
              </div>
              <div className="max-price inForm">
                <label htmlFor="">
                  max price: <span>$5000</span>
                </label>
                <div className="input">
                  <input type="range" max="5000" min="1000" />
                </div>
              </div>
            </div>
            <div className="searchOption">
              <HiFilter />
              <span>MORE FILTER</span>
            </div>
          </div>

          <div className="homeFooter">
            <div className="icons-left">
              <FaFacebookF />
              <CiInstagram />
            </div>
            <div className="icons-right">
              <TfiMenuAlt />
              <HiOutlineViewGridAdd />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
