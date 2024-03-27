import React from "react";
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react';
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useDocTitle } from '../components/CustomHook';
// import axios from 'axios';

const Career = () => {
  useDocTitle("KeenAble | Always be Open!");
  return (
    <>
      <div>
        <NavBar />
      </div>

      <div className="my-4 py-4" id="portfolio">
        <h2 className="my-2 text-center text-3xl text-black uppercase font-bold">
          Careers
        </h2>
        <div className="flex justify-center">
          <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
        </div>

        <div className="px-4" data-aos="fade-down" data-aos-delay="600">
          <div>
            <p className="my-3 text-xl text-black">
              We are thrilled to announce exciting opportunities within our
              organization, welcoming fresh talent to breathe new life into our
              team. We offer a three-month unpaid internship program designed to
              provide newcomers with invaluable industry experience. During this
              period, interns who showcase relevant technical skills aligned
              with our field may be considered for an extension of their
              internship for an additional three months. Upon successful
              completion of this six-month internship, outstanding performers
              may receive an offer for full-time employment. This structured
              approach ensures that we thoroughly assess candidates'
              capabilities and commitment before making long-term commitments.
            </p>
          </div>
          <div>
            <p className="my-3 text-xl text-black">
              Furthermore, we are actively seeking experienced professionals to
              join our team, particularly those with expertise in areas such as
              Nexus and Devox. If you have a minimum of two years of experience
              in the field, we encourage you to apply for our software engineer
              positions. Our commitment to excellence and innovation drives us
              to seek individuals who can contribute meaningfully to our
              projects and goals.
            </p>
          </div>
          <div>
            <p className="my-3 text-xl text-black ">
              Attached below, you will find the application forms for both the
              unpaid internship and software engineer positions, along with
              additional information. We look forward to reviewing your
              applications and welcoming new members to our dynamic team."
            </p>
          </div>
          <br />
          <br />

          <div className="flex justify-center grid sm:grid-cols-2 lg:grid-cols-20 gap-5 item-centre ">
            <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
              <div className="m-2 text-justify text-l">
                <h4 className="font-bold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                  <strong>Unpaid Internship</strong>
                </h4>
                <p className="text-xl font-lg leading-6 text-black h-auto md:h-48 pr-2 pl-4">
                  We welcome interns who are eager to learn new technologies,
                  demonstrate strong research skills,
                  and aspire for growth. Is there a promising future in
                  the development field? We are actively seeking individuals
                  with a passion for technical roles or non technical roles. If you're someone who
                  embraces challenges, thrives in dynamic environments,
                  and seeks continuous learning, we encourage you to join us.
                  Our team values dedication, innovation, and collaborative spirit.
                  As we navigate the ever-evolving landscape of technology.
                  Join us in shaping the future of technology and making an
                  impact in the development field.
                  Apply now and embark on a rewarding journey with us.
                </p><br />
                <div className="flex justify-center my-4">
                  <Link
                    to="/register"
                    target="_parent"
                    className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                    rel="noreferrer"
                  >
                    Apply Here
                    <svg
                      className="w-4 h-4 ml-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center item-center" >
              <div className=" bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3">
                <div className="m-2 text-justify text-sm">
                  <h4 className="font-bold my-4 text-lg md:text-2xl text-center mb-4 h-12">
                    <strong>Experience Role</strong>
                  </h4>
                  <p className="text-xl font-lg leading-6 text-black h-auto md:h-48 pr-2 pl-4">
                    Seeking an experienced software developer to join our team. You'll utilize your expertise in programming languages, frameworks, and methodologies to craft innovative software solutions. Responsibilities include collaborating with teams, contributing to architectural decisions, and ensuring scalability and performance. Ideal candidates possess strong frontend and backend development skills with a keen eye for detail. If you thrive in a dynamic environment and are passionate about technology, apply now to make an impact.
                  </p>
                  <br />

                  <div className="flex justify-center my-4">
                    <Link
                      to="/register1"
                      target="_parent"
                      className="text-white bg-black hover:bg-red-500 inline-flex items-center justify-center w-50 px-6 py-3 my-4 text-lg shadow-xl rounded-xl"
                      rel="noreferrer"
                    >
                      Apply Here
                      <svg
                        className="w-4 h-4 ml-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;