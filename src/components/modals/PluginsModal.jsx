import s from "../../styles/PluginsModal.module.css";
import test_video from "../../layouts/videos/test_video.mp4";
import MyButton from "../MyButton";
import { useState } from "react";

const PluginsModal = ({ setIsOpenPluginsModal, title, videoserver }) => {
  const [zones, setZones] = useState([])

  const addZone = () => {
    const newZone = { id: Date.now(), name: "Новая зона" }
    setZones([...zones, newZone])
    console.log(zones)
  }


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
                <div className={s.modalBody_list}>
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
                  <ul className={s.modalBody_zones}>
                    {zones.map((zone) => (
                      <li className={s.modalBody_zone} key={zone.id}>
                        <div className={s.modalBody_zone_title}>
                          {zone.name}
                        </div>
                        <div className={s.modalBody_zone_icons}>
                          <div className={s.modalBody_zone_icon}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clipPath="url(#clip0_803_10585)">
                                <path d="M15 1.66699L18.3333 5.00033" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.24935 17.0837L15.8327 7.50033L12.4993 4.16699L2.91602 13.7503L1.66602 18.3337L6.24935 17.0837Z" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </g>
                              <defs>
                                <clipPath id="clip0_803_10585">
                                  <rect width="20" height="20" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className={s.modalBody_zone_icon}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.5 5H4.16667H17.5" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M6.66602 5.00033V3.33366C6.66602 2.89163 6.84161 2.46771 7.15417 2.15515C7.46673 1.84259 7.89065 1.66699 8.33268 1.66699H11.666C12.108 1.66699 12.532 1.84259 12.8445 2.15515C13.1571 2.46771 13.3327 2.89163 13.3327 3.33366V5.00033M15.8327 5.00033V16.667C15.8327 17.109 15.6571 17.5329 15.3445 17.8455C15.032 18.1581 14.608 18.3337 14.166 18.3337H5.83268C5.39065 18.3337 4.96673 18.1581 4.65417 17.8455C4.34161 17.5329 4.16602 17.109 4.16602 16.667V5.00033H15.8327Z" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M8.33398 9.16699V14.167" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              <path d="M11.666 9.16699V14.167" stroke="#3377FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={s.modalBody_actions}>
                  <button className={s.pluginsModal_cancel}>Отмена</button>
                  <MyButton onClick={addZone}>Создать зону</MyButton>
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
