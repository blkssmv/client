import s from "../styles/NotificationAfterModal.module.css";

const NotificationAfterModal = ({ children }) => {
  return (
    <div className={s.notificationAfterModal}>
      <div className={s.notificationAfterModal_icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.5264 11.2632C22.5264 16.7872 18.0494 21.2632 12.5264 21.2632C7.00337 21.2632 2.52637 16.7872 2.52637 11.2632C2.52637 5.74118 7.00337 1.26318 12.5264 1.26318C18.0494 1.26318 22.5264 5.74118 22.5264 11.2632Z"
            fill="#00A044"
          />
          <path
            d="M10.761 17C10.4328 17 10.1045 16.8692 9.85383 16.6059L6.37593 12.9532C5.87469 12.4268 5.87469 11.574 6.37593 11.0491C6.87717 10.5227 7.68765 10.5211 8.1889 11.0476L10.761 13.749L16.8111 7.39483C17.3123 6.86839 18.1228 6.86839 18.6241 7.39483C19.1253 7.92127 19.1253 8.77403 18.6241 9.30047L11.6683 16.6059C11.4176 16.8692 11.0893 17 10.761 17Z"
            fill="white"
          />
        </svg>
      </div>
      <div className={s.notificationAfterModal_text}>{children}</div>
    </div>
  );
};
export default NotificationAfterModal;