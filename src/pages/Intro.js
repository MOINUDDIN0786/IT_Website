import React from "react";
import img from "../images/about.png";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";

const Intro = () => {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="m-auto max-w-6xl p-2 md:p-14 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
            <img alt="card img" className="rounded-t float-right w-399 h-auto" src={img} />
          </div>
          <div
            className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <h3 className="text-3xl  text-black-900 font-bold">
              MORE ABOUT KEEN AND ABLE
            </h3>
            <div>
              <p className="my-3 text-xl text-black">
                Keen and Able started as a college dream in the mind of a few
                youngsters who just wished to have something to call their own.
                Open Source happened by chance. But has stuck for long. Over the
                years, we have dabbled in many associated Open Source
                technologies and successfully helped our customers adopt them.
              </p>
            </div>
            <div>
              <p className="my-3 text-xl text-black">
                We believe our strength lies in taking challenges head on and be
                of help to our customers in all areas of software deployment -
                architecture and planning, deployment and support.
              </p>
            </div>
            <div>
              <p className="my-3 text-xl text-black ">
                Being a services focused organisation, we are able to think
                beyond product and strive to provide our customers with
                solutions that help them address their business need rather than
                deploy a product.{" "}
              </p>
            </div>
            <div>
              <p className="my-3 text-xl text-black ">
                We have been quite fortunate to have been able to work both in
                community and enterprise Open Source solution deployments. We
                have been living our dream of creating people who are deft in
                fulfilling customer needs through Open Source means.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          >
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-black mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path>
                  <path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path>
                </svg>
              </div>
              <h3
                className="text-3xl  text-black
                            font-bold"
              >
                Our <span className="font-black">Mission</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  With over 10 years experience in software analysis and design
                  and a deep understanding of the latest IT trends and
                  solutions, we provide customized recommendations and
                  strategies to help you improve your operations, reduce costs,
                  and increase efficiency.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
              <div className="text-black mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </div>
              <h3 className="text-3xl  text-black font-bold">
                Join Us on<span className="font-black"> Our Journey</span>
              </h3>
              <div>
                <p className="my-3 text-xl text-gray-600 font-semibold">
                  We can collaborate with your existing tech team to scale
                  existing software applications or design customized software
                  applications that suits your everyday need and simplifies
                  various processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Intro;