import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={css.container}>
        <p className={css.heroSubHeading}>Revolutionize Your</p>
        <h1 className={css.heroHeading}>
          Creative Projects with the Ultimate AI-Powered Pattern
        </h1>
        
          <div className={css.heroButton}>Start Generating</div>
          <p className={css.heroPara}>
            The Next generation{" "}
            <span className={css.heroParaBold}>Production</span> for Designers
          </p>
        
      </div>
    </div>
  );
};

export default Header;
