import s from "../../styles/PluginsModal.module.css";
import test_video from "../../layouts/videos/test_video.mp4";
import MyButton from "../MyButton";

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
              <div className={s.modalBody_main}>
              <ul className={s.modalBody_plugins}>
                <li className={s.modalBody_pluginsItem}>
                  <div className={s.modalBody_pluginsItem_title}>
                    <div className={s.pluginsItem_icon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#232325"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={s.pluginsItem_text}>Face detection</div>
                  </div>

                  <label className={s.pluginsItem_check}>
                    <input type="checkbox" />
                    <span className={s.slider}></span>
                  </label>
                </li>
                <li className={s.modalBody_pluginsItem}>
                  <div className={s.modalBody_pluginsItem_title}>
                    <div className={s.pluginsItem_icon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="#232325"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={s.pluginsItem_text}>Face detection</div>
                  </div>
                  <label className={s.pluginsItem_check}>
                    <input type="checkbox" />
                    <span className={s.slider}></span>
                  </label>
                </li>
              </ul>
              <div className={s.modalBody_actions}>
                <button className={s.pluginsModal_cancel}>Отмена</button>
                <MyButton>Создать зону</MyButton>
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
