import React, { useEffect } from "react";
import "./main.css";
import Place from "../Place/Place";
import { useContext } from "react";
import { ContextData } from "../Context/Context";
import Aos from "aos";
import "aos/dist/aos.css";
const Main = () => {
  const { Data } = useContext(ContextData);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main">
      <div className="container">
        <div className="main-title" data-aos ="fade-right">
          <h2>
            most visited <span>destination</span>
          </h2>
        </div>
        <div className="available-places">
          {Data.map((product) => (
            <Place
              key={product.id}
              destTitle={product.destTitle}
              location={product.location}
              grade={product.grade}
              fees={product.fees}
              description={product.description}
              imgSrc={product.imgSrc}
              fade = "fade-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
