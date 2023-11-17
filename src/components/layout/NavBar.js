import React from "react";
import css from "./NavBar.module.css";
import DropDown from "./DropDown";

const NavBar = () => {
  return (
    <nav>
      <div className={css.container}>
        <div>
          {" "}
          <a href="/" className={css.logo}>
            AIPatrn
          </a>
        </div>
        <div className={css.navMenuContainer}>
          <ul className={css.navLinks}>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Home Page
              </a>
            </li>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Generator
              </a>
            </li>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Pricing-Plan
              </a>
            </li>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Blog - News
              </a>
            </li>
          </ul>
          <ul className={css.navLinks}>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                About Us
              </a>
            </li>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Features
              </a>
            </li>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Collection-2023
              </a>
            </li>
            <li className={css.linkItems}>
              <a href="/" className={css.navLink}>
                Career
              </a>
            </li>
          </ul>
          <div><DropDown /></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
