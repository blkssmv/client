import s from '../styles/MySearchInput.module.css'


const MySearchInput = ({ placeholder }) => {
  return (
    <div className={s.myInput}>
      <div className={s.myInput_icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#3377FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 20.9999L16.65 16.6499"
            stroke="#3377FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className={s.myInput_input}>
        <input type="text" placeholder={placeholder} />
      </div>
    </div>
  );
};
export default MySearchInput;