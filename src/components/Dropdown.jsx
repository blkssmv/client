import { useState } from "react";
import s from "../styles/Dropdown.module.css";

const Dropdown = ({ selected, setSelected ,options }) => {
    const [isActive, setIsActive] = useState(false)
    const toggleSelect = () => {
        setIsActive(!isActive)
    }
    
  return (
    <div className={s.dropdown}>
      <div onClick={toggleSelect} className={s.dropdown_btn}>
        <div className={s.dropdown_title}>{selected}</div>
        <div className={s.dropdown_icon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#3377FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      {isActive && <div className={s.dropdown_content}>
        {options.map((option, index) => (
            <div key={index} onClick={() => {setSelected(option); setIsActive(false)}} className={s.dropdown_item}>{option}</div>
        ))}
        
      </div>}
      
    </div>
  );
};
export default Dropdown;
