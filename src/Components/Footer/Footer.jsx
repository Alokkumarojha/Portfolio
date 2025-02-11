import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="https://github.com/alokkumarojha"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <svg className="bi" width={"30"} height={"24"}>
              <FaGithub size={"25px"} />
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2025 Alok Kumar Ojha. All Rights Reserved.
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://x.com/@91alokojha">
              <svg className="bi" width={"24"} height={"24"}>
                <FaXTwitter size={"25px"} />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/alok.kumar.ojha"
            >
              <svg className="bi" width={"24"} height={"24"}>
                <FaSquareInstagram size={"25px"} />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" 
            href="https://www.facebook.com/alok0000000">
              <svg className="bi" width="24" height="24">
                <FaFacebook size={"25px"} />
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
