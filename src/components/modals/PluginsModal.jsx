import s from "../../styles/DevelopmentModal.module.css";
import test_video from "../../layouts/videos/test_video.mp4";

const PluginsModal = ({ setIsOpenPluginsModal, title, videoserver }) => {
  return (
    <>
      <div className={s.darkBG} onClick={() => setIsOpenPluginsModal(false)} />
      <div className={s.centered}>
        <div className={s.modal}>
          <button
            className={s.closeBtn}
            onClick={() => setIsOpenPluginsModal(false)}
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
            <div className={s.modalTitle}>{title}</div>
            <div className={s.modalBody}>
              <div className={s.modalBody_video}>
                <video src={test_video} />
              </div>
              <div className={s.modalBody_switchDevelopment}>
                <div className={s.modalBody_switcher}>
                  <div className={s.modalBody_switcher_icon}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2559 6.21436L9.17055 12.1278L15.084 18.2131"
                        stroke="#3377FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className={s.modalBody_switcher_text}>
                    Предыдущее событие
                  </div>
                </div>
                <div className={s.modalBody_switcher}>
                  <div className={s.modalBody_switcher_text}>
                    Следующее событие
                  </div>
                  <div className={s.modalBody_switcher_icon}>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.2559 6.21436L9.17055 12.1278L15.084 18.2131"
                        stroke="#3377FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className={s.modalBody_info}>
                <div className={s.modalBody_title}>person</div>
                <div className={s.modalBody_information}>
                  <div className={s.modalBody_information_item}>
                    <span>Время: </span>12.01.2021 17:09
                  </div>
                  <div className={s.modalBody_information_item}>
                    <span>Камера: </span>Вход в магазин и еще длинное название
                  </div>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PluginsModal;
