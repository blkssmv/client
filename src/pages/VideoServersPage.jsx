import Navigation from "../components/Navigation";
import MyButton from "../components/MyButton";
import s from "../styles/VideoServersPage.module.css";
import { useState } from "react";
// import CreatingVideoServerModal from "../../components/modals/CreatingVideoServerModal";
// import DeletingClientModal from "../../components/modals/DeletingVideoServerModal";
// import EditingVideoServerModal from "../../components/modals/EditingVideoServerModal";
import { useNavigate } from "react-router-dom";
import DeletingVideoServerModal from "../components/modals/DeletingVideoServerModal";
import EditingVideoServerModal from "../components/modals/EditingVideoServerModal";
import CreatingVideoServerModal from "../components/modals/CreatingVideoServerModal";
import MySearchInput from "../components/MySearchInput";
import NotificationAfterModal from "../components/NotificationAfterModal";

const VideoServersPage = ({ videoservers }) => {
  const navigate = useNavigate();

  const [isOpenDeletingVideoServerModal, setIsOpenDeletingVideoServerModal] =
    useState(false);

  const [isOpenCreatingVideoServerModal, setIsOpenCreatingVideoServerModal] =
    useState(false);

  const [isOpenEditingVideoServerModal, setIsOpenEditingVideoServerModal] =
    useState(false);
  return (
    <>
      <Navigation />
      <div className={s.videoServers}>
        <div className={s.videoServers_wrapper}>
          <NotificationAfterModal>
            Видеосервер успешно создан!
          </NotificationAfterModal>
          <header className={s.videoServers_header}>
            <div className={s.videoServers_header_title}>Видеосерверы</div>
          </header>
          <div className={s.forms}>
            <div className={s.searchVideoServers}>
              <MySearchInput placeholder="Поиск по названию сервера" />
            </div>
            <div className={s.createVideoServers}>
              <MyButton onClick={() => setIsOpenCreatingVideoServerModal(true)}>
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
                Создать видеосервер
              </MyButton>

              {isOpenCreatingVideoServerModal && (
                <CreatingVideoServerModal
                  title="Создание видеосервера"
                  setIsOpenCreatingVideoServerModal={
                    setIsOpenCreatingVideoServerModal
                  }
                />
              )}

              {isOpenDeletingVideoServerModal && (
                <DeletingVideoServerModal
                  text={`Удаление видеосервера приведет к удалению всех видео в этом сервере. Вы уверены что хотите удалить клиента "${videoservers[0].name}"`}
                  setIsOpenDeletingVideoServerModal={
                    setIsOpenDeletingVideoServerModal
                  }
                />
              )}
              {isOpenEditingVideoServerModal && (
                <EditingVideoServerModal
                  title="Редактирование видеосервера"
                  setIsOpenEditingVideoServerModal={
                    setIsOpenEditingVideoServerModal
                  }
                />
              )}
            </div>
          </div>
          <div className={s.table}>
            <table cellSpacing="0" className={s.table_content}>
              <thead>
                <tr>
                  <th className={s.table_header}>№</th>
                  <th className={s.table_header}>Видеосерверы</th>
                  <th className={s.table_header}>Количество камер</th>
                  <th className={s.table_header}>Доступные плагины</th>
                  <th className={s.table_header}>Активные плагины</th>
                  <th className={s.table_header}>Статус оплаты</th>
                  <th className={s.table_header}></th>
                </tr>
              </thead>
              <tbody style={{ padding: "20px" }}>
                {videoservers.map((videoserver) => (
                  <tr key={videoserver.id}>
                    <td className={s.table_body}>{videoserver.id}</td>
                    <td
                      onClick={() => navigate(`/cameras`)}
                      className={s.table_body + " " + s.table_body_name}
                    >
                      {videoserver.name}
                    </td>
                    <td className={s.table_body}>
                      {videoserver.vid_camera_count}
                    </td>
                    <td className={s.table_body}>
                      {videoserver.available_plugins.join()}
                    </td>
                    <td className={s.table_body}>
                      {videoserver.vid_active_plugins.join()}
                    </td>
                    <td className={s.table_body}>
                      {videoserver.vid_payment_status}
                    </td>
                    <td className={s.table_body + " " + s.table_edits}>
                      <div
                        onClick={() => {
                          setIsOpenEditingVideoServerModal(true);
                        }}
                        className={s.table_edit}
                      >
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
                      <div
                        onClick={() => {
                          setIsOpenDeletingVideoServerModal(true);
                        }}
                        className={s.table_delete}
                      >
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
        </div>
      </div>
      <div className={s.videoServers_pageWrapper}>
        <div className={s.videoServers_prevPage}>
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
        <div className={s.videoServers_pageItem}>1</div>
        <div className={s.videoServers_pageItem}>2</div>
        <div className={s.videoServers_pageItem}>3</div>
        <div className={s.videoServers_nextPage}>
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
    </>
  );
};
export default VideoServersPage;
