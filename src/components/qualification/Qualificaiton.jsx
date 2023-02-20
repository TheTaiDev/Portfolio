import React, { useState } from "react";
import "./qualification.css";
const Qualificaiton = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personel journey</span>

      <div className="qualifition__container container">
        <div className="qualification__tabs">
          <div
            className={
              setToggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__active qualification__icon"></i>{" "}
            Education
          </div>
          <div
            className={
              setToggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="quatification__title">Web Design</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="quatification__title">Art Director</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="quatification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="quatification__title">UX Expert</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2017-2018
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="quatification__title">Web oke</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="quatification__title">Art 1</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="quatification__title">Web 2</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="quatification__title">UX 3</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__celender">
                  <i className="uil uil-calendar-alt"></i> 2017-2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificaiton;
