import React, { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    address: "",
    message: "",
  });
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fname, lname, mobile, email, address, message } = user;
    if (fname && lname && mobile && email && address && message) {
      const res = fetch(
        "https://onlinepay-2c664-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fname,
            lname,
            mobile,
            email,
            address,
            message,
          }),
        }
      );
      if (res) {
        setUser({
          fname: "",
          lname: "",
          mobile: "",
          email: "",
          address: "",
          message: "",
        });
        alert("User data is filled.");
      } else {
        alert("please fill the data.");
      }
    } else {
      alert("please fill the data.");
    }
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact with our <br />
                    <span> Sales team.</span>
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quos facere neque, maxime distinctio voluptatibus ad ratione
                    vitae et quae.
                  </p>
                  <figure>
                    <img
                      src="./images/call-centre.jpg"
                      alt="aboutus1"
                      className="contactimg"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="fname"
                          value={user.fname}
                          onChange={postUserData}
                          placeholder="First Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lname"
                          value={user.lname}
                          onChange={postUserData}
                          placeholder="Last Name"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="mobile"
                          value={user.mobile}
                          onChange={postUserData}
                          placeholder="Phone Number"
                          className="form-control"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          value={user.email}
                          onChange={postUserData}
                          placeholder="Email ID"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="address"
                          value={user.address}
                          onChange={postUserData}
                          placeholder="Add Address"
                          className="form-control contact-input-field"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          value={user.message}
                          onChange={postUserData}
                          placeholder="Add Message"
                          className="form-control contact-input-field"
                        />
                      </div>
                    </div>
                    <div className="form-check form-chck-boxstyle">
                      <input
                        className="form-check-input "
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label main-hero-para"
                        for="flexCheckChecked"
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Cumque, rerum. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Quos, praesentium.
                      </label>
                      <button
                        className="btn submit-btn w-100"
                        type="submit"
                        onClick={submitData}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
