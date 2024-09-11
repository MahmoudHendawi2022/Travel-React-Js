import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../assets/Videooo.mp4";
import { IoIosSend } from "react-icons/io";
import Logo from "../Logo/Logo";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTripadvisor } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import Overlay from "../Overlay/Overlay";
import Video from "../Video/Video";
import Button from "../Button/Button";
import LinkNav from "../LinkFooter/Link";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <footer>
      <Overlay />
      <Video video={video2} />
      <div className="container">
        <div className="foot-top" data-aos ="fade-up">
          <div className="fTl">
            <p>keep in touch</p>
            <h3>travel with us</h3>
          </div>
          <div className="ftmail">
            <input type="email" placeholder="Enter Email Address" />
          </div>
          <div className="ftr">
            <button className="main-btn">
              <a href="">
                send <IoIosSend />
              </a>
            </button>
          </div>
        </div>
        <div className="foot-bottom">
          <div className="travel-info" data-aos ="fade-up">
            <Logo />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo qui
              minima dolore sit nulla repellat similique laudantium itaque,
              veniam cumque! Reprehenderit excepturi accusantium nisi fuga
            </p>
            <ul className="media">
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  <RiInstagramFill />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTripadvisor />
                </a>
              </li>
            </ul>
          </div>
          <div className="navLinksFooter">
            <ul className="our-agency" data-aos ="fade-up">
              <h5>our agency</h5>
              <LinkNav name="services" />
              <LinkNav name="insurance" />
              <LinkNav name="agency" />
              <LinkNav name="tourism" />
              <LinkNav name="payment" />
            </ul>
            <ul className="partners" data-aos ="fade-up">
              <h5>partners</h5>
              <LinkNav name="booking" />
              <LinkNav name="rentacar" />
              <LinkNav name="hostelWorld" />
              <LinkNav name="trivago" />
              <LinkNav name="tripAdvisor" />
            </ul>
            <ul className="last-minute" data-aos ="fade-up">
              <h5>last minute</h5>
              <LinkNav name="london" />
              <LinkNav name="california" />
              <LinkNav name="indonesia" />
              <LinkNav name="europe" />
              <LinkNav name="oceania" />
            </ul>
          </div>
          <div className="copyRight">
            <div className="copy">
              <p>BEST TRAVEL WEBSITE THEME</p>
            </div>
            <div className="copy">
              COPYRIGHTS &copy; RESERVED - MAHMOUD HENDAWI 2024
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
