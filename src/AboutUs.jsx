import React, { useState } from "react";
import HowTouse from "./HowTouse";

const AboutUs = () => {
  const [items, setItems] = useState(HowTouse);
  return (
    <>
      <section className="aboutus-section our-services">
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-left-img">
              <img src="./images/aboutus1.jpg" alt="aboutus1" />
            </div>
            <div className="col-12 col-lg-7  our-services-list">
              <h3 className="mini-title">
                --AVAILABLE AT GOOGLE AND IOS STORE ONLY
              </h3>
              <h1 className="main-heading">How to use app</h1>

              {items.map((data) => {
                const { id, title, info } = data;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-num">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <button className="btn-style">Lear More</button>
            </div>
          </div>
        </div>
      </section>

      <section className="aboutus-section our-services">
        <div className="container mb-5 mt-5">
          <div className="row">
            <div className="col-12 col-lg-7  our-services-list-right">
              <h3 className="mini-title">
                --AVAILABLE AT GOOGLE AND IOS STORE ONLY
              </h3>
              <h1 className="main-heading">How to use app</h1>

              {items.map((data) => {
                const { id, title, info } = data;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-num">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <button className="btn-style">Lear More</button>
            </div>
            <div className="col-12 col-lg-4 text-center our-services-left-img">
              <img
                src="./images/aboutus2.jpg"
                alt="aboutus1"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
