import s from "../../styles/CreatingCameraModal.module.css";
import MyButton from "../MyButton";
import MyInput from "../MyInput";

const CreatingCameraModal = ({
  setIsOpenCreatingCameraModal,
  title,
  service_packages,
}) => {
  console.log(service_packages);

  return (
    <>
      <div
        className={s.darkBG}
        onClick={() => setIsOpenCreatingCameraModal(false)}
      />
      <div className={s.centered}>
        <div className={s.modal}>
          <button
            className={s.closeBtn}
            onClick={() => setIsOpenCreatingCameraModal(false)}
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
            <div className={s.modalActions}>
              <MyInput placeholder="Название камеры">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#3377FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#3377FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MyInput>

              <div className={s.service_packages}>
                <div className={s.icon}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="#3377FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L8 14"
                      stroke="#3377FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className={s.select_servicePackage}>
                  <select defaultValue="0">
                    <option value="0" disabled>
                      Выберите пакет услуг
                    </option>

                    {service_packages.map((service_package) => (
                      <option
                        key={service_package.id}
                        value={service_package.value}
                      >
                        {service_package.value}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <MyInput placeholder="Серийный номер">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#3377FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#3377FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </MyInput>
              <MyButton
                onClick={() => {
                  setIsOpenCreatingCameraModal(false);
                }}
              >
                Создать
              </MyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatingCameraModal;
