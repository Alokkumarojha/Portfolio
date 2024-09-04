import React, { useState } from "react";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
const data = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Resume",
    to: "/resume",
  },
  {
    label: "Skills",
    to: "/skills",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "contact",
    to: "/contact",
  },
];

const Index = () => {
  const [toggal, setToggal] = useState(false);

  const HandleToggalIcon = () => {
    setToggal(!toggal);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to={"/"} className="navbar__container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className="navbar__container__menu">
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav__icon" onClick={HandleToggalIcon}>
          {toggal ? <HiMenu size={30} /> : <RxCross1 size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Index;
