import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container ">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side ">
              <h1 className="diplay-2">
                Online payment made
                <br />
                <span> easy for you.</span>
              </h1>
              <p className="main-hero-para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                quos iure labore natus, rerum tempore voluptate. Cum deleniti
                est maiores iste itaque, voluptate, dolorem eveniet eligendi
                tempora quisquam aperiam inventore.
              </p>
              <h3>Get early access for you.</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill me-3 w-75 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side head-img">
              <img
                src="./images/head1.jpg"
                alt="head1"
                className="img-fluid head-img1"
              />
              <img
                src="./images/head3.jpg"
                alt="head3"
                className="img-fluid head-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
