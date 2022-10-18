import { useState } from "react";
import MyButton from "../components/MyButton";
import Navigation from "../components/Navigation";
import s from "../styles/CamerasPage.module.css";
import CreatingCameraModal from "../components/modals/CreatingCameraModal";
import video_test from "../layouts/videos/test_video.mp4";
import { useNavigate } from "react-router-dom";
import MySearchInput from "../components/MySearchInput";
import NotificationAfterModal from "../components/NotificationAfterModal";
import CameraCard from "../components/CameraCard";
import DevelopmentModal from "../components/modals/DevelopmentModal";
import PluginsModal from "../components/modals/PluginsModal";
import Dropdown from "../components/Dropdown";

const CamerasPage = ({ cameras, service_packages, videoservers, isHaveAccess, setIsHaveAccess, developments }) => {
  const [isOpenCreatingCameraModal, setIsOpenCreatingCameraModal] =
    useState(false);

  const navigate = useNavigate();
  const navigateToPrevPage = () => {
    navigate(-1);
  };

  const [isActiveClassLive, setIsActiveClassLive] = useState(true);
  const [isActiveClassDevelopment, setIsActiveClassDevelopment] =
    useState(false);

  const setLive = () => {
    setIsActiveClassLive(true);
    setIsActiveClassDevelopment(false);
  };
  const setDevelopment = () => {
    setIsActiveClassLive(false);
    setIsActiveClassDevelopment(true);
  };

  const [isListSorted, setIsListSorted] = useState(true);
  const [isWindowSorted, setIsWindowSorted] = useState(false);

  const setListSort = () => {
    setIsListSorted(true);
    setIsWindowSorted(false);
  };
  const setWindowSort = () => {
    setIsListSorted(false);
    setIsWindowSorted(true);
  };

  const [isCurrentColumnWindowSort, setIsCurrentColumnWindowSort] = useState(2);

  const setTwoColumnWindowSort = () => {
    setIsCurrentColumnWindowSort(2);
  };
  const setThreeColumnWindowSort = () => {
    setIsCurrentColumnWindowSort(3);
  };

  const [isOpenDevelopmentModal, setIsOpenDevelopmentModal] = useState(false)

  const [isOpenPluginsModal, setIsOpenPluginsModal] = useState(true)

  const [selectedPlugin, setSelectedPlugin] = useState('Плагин')
  const [selectedCamera, setSelectedCamera] = useState('Камера')
  const [selectedDate, setSelectedDate] = useState('Дата')
  const [selectedTime, setSelectedTime] = useState('Время')
  const [selectedType, setSelectedType] = useState('Тип')

  return (
    <>
      <Navigation isHaveAccess={isHaveAccess}/>
      <div className={s.camerasPage}>
        <div className={s.camerasPage_wrapper}>
          <NotificationAfterModal>
            Камера успешно создана!
          </NotificationAfterModal>

          <header className={s.camerasPage_header}>
            <div onClick={navigateToPrevPage} className={s.header_prevPage}>
              Видеосерверы
            </div>
            <div className={s.header_arrow}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 9L13.5 12L10.5 15"
                  stroke="#232D42"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={s.header_currPage}>
              <span className={s.camera}> {videoservers[0].name}</span>
            </div>
          </header>

          <div className={s.camerasPage_chapter}>
            <div
              onClick={setLive}
              className={
                isActiveClassLive
                  ? `${s.camerasPage_chapter_item} + ' ' + ${s.camerasPage_chapter_item_active}`
                  : s.camerasPage_chapter_item
              }
            >
              Live
            </div>
            <div
              onClick={setDevelopment}
              className={
                isActiveClassDevelopment
                  ? `${s.camerasPage_chapter_item} + ' ' + ${s.camerasPage_chapter_item_active}`
                  : s.camerasPage_chapter_item
              }
            >
              События
            </div>
          </div>

          <div className={s.formsAndSort}>
            {isActiveClassLive ? (
              <div className={s.forms}>
                <div className={s.searchVideoServer}>
                  <MySearchInput placeholder="Поиск по названию" />
                </div>
                <div className={s.createCamera}>
                  <MyButton onClick={() => setIsOpenCreatingCameraModal(true)}>
                    <span className={s.plus_icon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 5V19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5 12H19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    Создать камеру
                  </MyButton>
                  {isOpenCreatingCameraModal && (
                    <CreatingCameraModal
                      service_packages={service_packages}
                      setIsOpenCreatingCameraModal={
                        setIsOpenCreatingCameraModal
                      }
                      title="Создание камеры"
                    />
                  )}
                </div>
              </div>
            ) : (
              <ul className={s.filter}>
                <li className={s.filter_item}>
                  <Dropdown selected={selectedPlugin} setSelected={setSelectedPlugin} options={developments[0].plugins}/>
                </li>
                <li className={s.filter_item}>
                  <Dropdown selected={selectedCamera} setSelected={setSelectedCamera} options={developments[0].camera}/>
                </li>
                <li className={s.filter_item}>
                  <Dropdown selected={selectedDate} setSelected={setSelectedDate} options={developments[0].date}/>
                </li>
                <li className={s.filter_item}>
                  <Dropdown selected={selectedTime} setSelected={setSelectedTime} options={developments[0].time}/>
                </li>
                <li className={s.filter_item}>
                  <Dropdown selected={selectedType} setSelected={setSelectedType} options={developments[0].plugins}/>
                </li>
              </ul>
            )}

            <div className={s.sort}>
              {(isActiveClassLive && isWindowSorted) && (
                <div
                  onClick={
                    isCurrentColumnWindowSort === 2
                      ? setThreeColumnWindowSort
                      : setTwoColumnWindowSort
                  }
                  className={s.sort_columns}
                >
                  {isCurrentColumnWindowSort === 2 ? "2 x 2" : "3 x 3"}
                </div>
              )}

              <div onClick={setListSort} className={s.sort_item}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12H20"
                    stroke={isListSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 6H20"
                    stroke={isListSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 18H20"
                    stroke={isListSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div onClick={setWindowSort} className={s.sort_item}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 3H3V10H10V3Z"
                    stroke={isWindowSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3H14V10H21V3Z"
                    stroke={isWindowSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 14H14V21H21V14Z"
                    stroke={isWindowSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14H3V21H10V14Z"
                    stroke={isWindowSorted ? "#3377FF" : "#C7C9D9"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {(isListSorted && isActiveClassLive)  ? (
            <div className={s.table}>
              <table cellSpacing="0" className={s.table_content}>
                <thead>
                  <tr>
                    <th className={s.table_header}>№</th>
                    <th className={s.table_header}>Камеры</th>
                    <th className={s.table_header}>Дата подключения</th>
                    <th className={s.table_header}>Доступные плагины</th>
                    <th className={s.table_header}>Активные плагины</th>
                    <th className={s.table_header}>Пакет услуг</th>
                    <th className={s.table_header}>Статус оплаты</th>
                    <th className={s.table_header}></th>
                  </tr>
                </thead>
                <tbody style={{ padding: "20px" }}>
                  {cameras.map((camera) => (
                    <tr key={camera.id}>
                      <td className={s.table_body}>{camera.id}</td>
                      <td className={s.table_body + " " + s.table_body_name}>
                        {camera.name}
                      </td>
                      <td className={s.table_body}>{camera.connection_date}</td>
                      <td className={s.table_body}>
                        {camera.cam_available_plugins.join()}
                      </td>
                      <td className={s.table_body}>
                        {camera.cam_active_plugins.join()}
                      </td>
                      <td className={s.table_body}>
                        {camera.service_packages}
                      </td>
                      <td className={s.table_body}>
                        до {camera.cam_payment_status}
                      </td>
                      <td className={s.table_body + " " + s.table_edits}>
                        <div className={s.table_edit}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 2L22 6"
                              stroke="#8F90A6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 20.5L19 9L15 5L3.5 16.5L2 22L7.5 20.5Z"
                              stroke="#8F90A6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <div className={s.table_delete}>
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 6H5H21"
                              stroke="#8F90A6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                              stroke="#8F90A6"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (isListSorted && isActiveClassDevelopment) ? (<div>
            <div className={s.table}>
              <table cellSpacing="0" className={s.table_content}>
                <thead>
                  <tr>
                    <th className={s.table_header}>№</th>
                    <th className={s.table_header}>Событие</th>
                    <th className={s.table_header}>Камера</th>
                    <th className={s.table_header}>Плагины</th>
                    <th className={s.table_header}>Дата</th>
                    <th className={s.table_header}>Время</th>
                  </tr>
                </thead>
                <tbody style={{ padding: "20px" }}>
                  {developments.map((development) => (
                    <tr key={development.id}>
                      <td className={s.table_body}>{development.id}</td>
                      <td className={s.table_body + " " + s.table_body_name}>
                        {development.name}
                      </td>
                      <td className={s.table_body}>{development.camera}</td>
                      <td className={s.table_body}>
                        {development.plugins.join()}
                      </td>
                      <td className={s.table_body}>
                        {development.date.join()}
                      </td>
                      <td className={s.table_body}>
                      {development.time}
                      </td>
                      
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>



          </div>) : (isActiveClassLive && isWindowSorted) ? (
            <div
              className={
                isCurrentColumnWindowSort === 2
                  ? s.window_wrapper_twoColumn
                  : s.window_wrapper_threeColumn
              }
            >
              <div
                className={
                  isCurrentColumnWindowSort === 2
                    ? s.window_video_twoColumn
                    : s.window_video_threeColumn
                }
              >
                <video src={video_test} />
              </div>
              <div
                className={
                  isCurrentColumnWindowSort === 2
                    ? s.window_video_twoColumn
                    : s.window_video_threeColumn
                }
              >
                <video src={video_test} />
              </div>
              <div
                className={
                  isCurrentColumnWindowSort === 2
                    ? s.window_video_twoColumn
                    : s.window_video_threeColumn
                }
              >
                <video src={video_test} />
              </div>
              <div
                className={
                  isCurrentColumnWindowSort === 2
                    ? s.window_video_twoColumn
                    : s.window_video_threeColumn
                }
              >
                <video autoPlay={true} src={video_test} />
              </div>
              <div
                className={
                  isCurrentColumnWindowSort === 2
                    ? s.window_video_twoColumn
                    : s.window_video_threeColumn
                }
              >
                <video src={video_test} />
              </div>
              <div
                className={
                  isCurrentColumnWindowSort === 2
                    ? s.window_video_twoColumn
                    : s.window_video_threeColumn
                }
              >
                <video src={video_test} />
              </div>
            </div>
          ) : (isActiveClassDevelopment && isWindowSorted) && <div className={s.development}>
          {videoservers[0].cameras.map((camera) => (
            <CameraCard onClick={() => setIsOpenDevelopmentModal(true)} key={camera.id} camera={camera} videoserver={videoservers[0]}/>
          ))}
          {isOpenDevelopmentModal && <DevelopmentModal videoserver={videoservers[0]} setIsOpenDevelopmentModal={setIsOpenDevelopmentModal} title={"События 1"}/>}
          {isOpenPluginsModal && <PluginsModal title="Редактирование плагинов" setIsOpenPluginsModal={setIsOpenPluginsModal}/>}
        </div>}

        
        </div>
      
        {isListSorted && (
        <div className={s.camerasPage_pageWrapper}>
          <div className={s.camerasPage_prevPage}>
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5433 12.6317L15.8516 14.6054L17.5433 16.5791"
                stroke="#3377FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4982 12.6317L12.8064 14.6054L14.4982 16.5791"
                stroke="#3377FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className={s.camerasPage_pageItem}>1</div>
          <div className={s.camerasPage_pageItem}>2</div>
          <div className={s.camerasPage_pageItem}>3</div>
          <div className={s.camerasPage_nextPage}>
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.5433 12.6317L15.8516 14.6054L17.5433 16.5791"
                stroke="#3377FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4982 12.6317L12.8064 14.6054L14.4982 16.5791"
                stroke="#3377FF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
      </div>
      
    </>
  );
};
export default CamerasPage;
