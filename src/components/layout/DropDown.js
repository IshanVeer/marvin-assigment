import React, { useState } from "react";
import css from "./DropDown.module.css";
import { BsCaretDownFill } from "react-icons/bs";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDownHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={css.dropdown} onClick={toggleDropDownHandler}>
        {" "}
        <span>Menu</span> <BsCaretDownFill className={css.dropdownArrow} />
      </div>
      {isOpen && (
        <div className={css.dropdownContainer}>
          <ul className={css.dropdownList}>
            <li className={css.dropdownListItem}>Option 1</li>
            <li className={css.dropdownListItem}>Option 2</li>
            <li className={css.dropdownListItem}>Option 3</li>
            <li className={css.dropdownListItem}>Option 4</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
