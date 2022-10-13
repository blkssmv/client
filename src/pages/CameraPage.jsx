import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import s from "../styles/CameraPage.module.css";
const CameraPage = ({camera, videoservers}) => {
    const navigate = useNavigate();
  const navigateToPrevPrevPage = () => {
    navigate('/videoservers');
  };
  const navigateToPrevPage = () => {
    navigate(-1)
  }
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
          <div className={s.cameraPage_content}></div>
        </div>
      </div>
    </>
  );
};
export default CameraPage;
