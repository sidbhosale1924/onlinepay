import React, { useState } from "react";
import ServiceApi from "./ServiceApi";

const Services = () => {
  const [curdata, setCurdata] = useState(ServiceApi);
  return (
    <>
      <section className="services-main-container">
        <div className="container services-container">
          <h1 className="main-heading text-center fw-bold">
            How to send money.
          </h1>
          <div className="row">
            {curdata.map((item) => {
              const { id, logo, title, info } = item;
              return (
                <div
                  className="col-11 col-lg-4 col-xxl-4 work-subcontainere"
                  key={id}
                >
                  <i className={`fontawosome-style ${logo}`}></i>
                  <h2 className="sub-headind">{title}</h2>
                  <p className="main-hero-para w-100">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
