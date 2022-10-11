
import s from '../../styles/DeletingModal.module.css'

const DeletingModal = ({ setIsOpenDeletingModal, text }) => {
  return (
    <>
      <div
        className={s.darkBG}
        onClick={() => setIsOpenDeletingModal(false)}
      />
      <div className={s.centered}>
        <div className={s.modal}>
          <button
            className={s.closeBtn}
            onClick={() => setIsOpenDeletingModal(false)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9492 7.05029L7.04972 16.9498"
                stroke="#3377FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.05078 7.05029L16.9503 16.9498"
                stroke="#3377FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className={s.modalContent}>
            <div className={s.modalText}>{text}</div>
            <div className={s.modalActionsDeleting}>
              <button className={s.cancelButton} onClick={() => setIsOpenDeletingModal(false)}>
                Отмена
              </button>
              <button className={s.deletingButton} onClick={() => setIsOpenDeletingModal(false)}>
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeletingModal;