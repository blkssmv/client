import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import s from "../styles/CameraPage.module.css";
import test_video from "../layouts/videos/test_video.mp4";
import MyButton from "../components/MyButton";
import CameraCard from "../components/CameraCard";

const CameraPage = ({ camera,videoservers }) => {
  const navigate = useNavigate();
  const navigateToPrevPrevPage = () => {
    navigate("/videoservers");
  };
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
  



  return (
    <>
      <Navigation />
      <div className={s.cameraPage}>
        <div className={s.cameraPage_wrapper}>
          <header className={s.cameraPage_header}>
            <div onClick={navigateToPrevPrevPage} className={s.header_prevPage}>
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
            <div onClick={navigateToPrevPage} className={s.header_prevPage}>
              {videoservers[0].name}
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
              <span className={s.camera}> {camera.name}</span>
            </div>
          </header>



          <div className={s.cameraPage_chapter}>
            <div
              onClick={setLive}
              className={
                isActiveClassLive
                  ? `${s.cameraPage_chapter_item} + ' ' + ${s.cameraPage_chapter_item_active}`
                  : s.cameraPage_chapter_item
              }
            >
              Live
            </div>
            <div
              onClick={setDevelopment}
              className={
                isActiveClassDevelopment
                  ? `${s.cameraPage_chapter_item} + ' ' + ${s.cameraPage_chapter_item_active}`
                  : s.cameraPage_chapter_item
              }
            >
              События
            </div>
          </div>
          {isActiveClassLive ? (
            <div className={s.cameraPage_content}>
              <div className={s.cameraPage_video}>
                <video src={test_video} autoPlay={true} />
              </div>
              <div className={s.cameraPage_info}>
                <div className={s.cameraPage_info_title}>{camera.name}</div>
                <div className={s.cameraPage_info_body}>
                  <div className={s.cameraPage_info_item}>
                    <span>Видеосервер: </span>
                    {videoservers[0].name}
                  </div>
                  <div className={s.cameraPage_info_item}>
                    <span>Плагины: </span>
                    {camera.cam_active_plugins[0]}
                  </div>
                </div>
                <div className={s.cameraPage_info_edit}>
                  <MyButton>Редактировать камеру</MyButton>
                </div>
              </div>
            </div>
          ) : (
            <div className={s.development}>
              {videoservers[0].cameras.map((camera) => (
                <CameraCard key={camera.id} camera={camera} videoserver={videoservers[0]}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CameraPage;
