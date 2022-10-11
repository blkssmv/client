import s from "../styles/MyInput.module.css";

const MyInput = ({ placeholder, children }) => {
  return (
    <div className={s.myInput}>
      {children}
      <input placeholder={placeholder} />
    </div>
  );
};
export default MyInput;
