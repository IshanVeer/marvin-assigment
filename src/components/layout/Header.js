import React from "react";
import css from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div className={css.container}>
        <h2 className={css.heroSubHeading}>Revolutionize Your</h2>
        <h1 className={css.heroHeading}>
          Creative Projects with the Ultimate AI-Powered Pattern
        </h1>
        
          <div className={css.heroButton}>Start Generating</div>
          <h3 className={css.heroPara}>
            The Next generation{" "}
            <span className={css.heroParaBold}>Production</span> for Designers
          </h3>
        
      </div>
    </div>
  );
};

export default Header;
