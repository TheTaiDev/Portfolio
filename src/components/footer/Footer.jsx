import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Manh The Tai</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
          <li>
            <a href="" className="footer__link"></a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.instagram.com/hipnolove/
        "
            className="footer__social-link"
            target="#_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/taiconpy/
        "
            className="footer__social-link"
            target="#_blank"
          >
            <i class="uil uil-facebook"></i>
          </a>
          <a
            href="https://github.com/manhthetaipy
        "
            className="footer__social-link"
            target="#_blank"
          >
            <i class="uil uil-github"></i>
          </a>
         
        </div>
        <span className="footer__coppy">
          &#169; Crypticalcoder. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
