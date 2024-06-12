import React from "react";
import cow from "../assets/cow1.png";
import cows from "../assets/cows.jpg";
import Gaushalas from "../components/Gaushalas";

const Home = () => {
  return (
    <>
      <section className="home-sec" id="home">
        <div className="container">
          <div className="home-content">
            <div className="row">
              <div className="col-lg-6 align-item-center">
                <div className="home-info">
                  <h1>Let&apos;s save our gaushalas, one step at a time</h1>
                  <h2>
                    We <span>Gau Nidhi,</span> helps to fund various gaushalas
                  </h2>
                  <p>
                    Make a difference today: donate to Gau Nidhi and save our
                   gaumatha
                  </p>
                  <div className="buttons">
                    <a href="#donation" className="btn1">
                      Donate now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-first order-lg-last">
                <div className="img-sec">
                  <img src={cows} alt="home-image"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Gaushalas />

      <section className="about-sec" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={cow} alt="about"></img>
            </div>
            <div className="col-lg-8 order-first order-lg-last">
              <div className="heading">
                <h2>What We Do & Why We Do</h2>
              </div>
              <p>
                At Gau Nidhi, we are dedicated to supporting and preserving
                goshals that are struggling due to a lack of funding. Our
                mission is to ensure the wellbeing and protection of cows, which
                are deeply valued in our culture. By providing financial
                assistance and resources, we aim to sustain these shelters and
                promote a more humane and compassionate society. Through Gaunidi,
                we strive to create a network of support that empowers goshals
                to continue their vital work, safeguarding the lives of
                countless cows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container">
          <div className="heading">
            <h2>Connect With Us</h2>
            <p>
              Fill this form, to get in touch with us regarding <span>Donation</span>{" "}
              or <span>any other queries.</span> 
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-3">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Mobile No."
                            />
                          </div>
                        </div>

                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              name="text"
                              id=""
                              cols="90"
                              rows="1"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 mt-3">
                        <a href="#" className="btn1 mt-5">
                          Submit Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
