import { useState } from "react";
import s from "../styles/MyPasswordInput.module.css";

const MyPasswordInput = () => {
  const [passwordValue, setPasswordValue] = useState('')
  const [passwordShown, setPasswordShown] = useState(false)
  const handlePasswordValue = (e) => {
    setPasswordValue(e.target.value)
}
  return (
    <div className={s.myPasswordInput}>
      <svg
        className={s.myPasswordInput_icon}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
          stroke="#3377FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
          stroke="#3377FF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        value={passwordValue}
        onChange={handlePasswordValue}
        type={passwordShown ? "text" : "password"}
        placeholder="Пароль"
      />
      <svg
        className={s.hide_pass}
        onClick={() => setPasswordShown(!passwordShown)}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
          stroke={passwordShown ? "#0063F7" : "rgba(143, 144, 166, 1)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke={passwordShown ? "#0063F7" : "rgba(143, 144, 166, 1)"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default MyPasswordInput;