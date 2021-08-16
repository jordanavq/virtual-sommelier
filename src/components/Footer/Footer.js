import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <footer
        className="navbar   navbar-static-bottom"
        style={{ backgroundColor: "#911d47" }}
      >
        <div className="footer-contacts ">
          <div className="name-container">
            <div className="fa-icon-container d-flex align-items-start">
              <a
                className="d-flex align-items-center"
                href="https://github.com/jordanavq"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="m-0 name-text text-light">JORDANA QUEIROZ </h6>
                <FaGithub className="fa-icons mx-1 text-light" />
              </a>
            </div>
          </div>
          <div className="name-container">
            <div className="fa-icon-container d-flex align-items-start">
              <a
                className="d-flex align-items-center"
                href="https://github.com/VictorCamp-Front"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="m-0 name-text text-light">VICTOR CAMPOS</h6>
                <FaGithub className="fa-icons mx-1 text-light" />
              </a>
            </div>
          </div>
        </div>
        <div className="developed">
          <p className=" m-0 text-light">
            <small>
              Developed by: <strong>Jordana Queiroz</strong> &{" "}
              <strong>Victor Campos</strong>
            </small>
          </p>
          <p className=" m-0 text-light">
            <small>© 2021 Copyright: JordanaQueiroz/VictorCampos</small>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
