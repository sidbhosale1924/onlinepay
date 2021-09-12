import React, { useState } from "react";
import workapi from "./workapi";

const HowitWork = () => {
  const [data, setData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-comtainer container">
          <h1 className="main-heading text-center">How does it work.</h1>
          <div className="row">
            {data.map((item) => {
              const { id, logo, title, info } = item;
              return (
                <div className="col-12 col-lg-4 text-center work-subcontainere">
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

export default HowitWork;
