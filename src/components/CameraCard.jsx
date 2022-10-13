import s from "../styles/CameraCard.module.css";
import test_video from "../layouts/videos/test_video.mp4";

const CameraCard = ({ camera, videoserver }) => {
  return (
    <div className={s.cameraCard}>
      <div className={s.cameraCard_video}>
        <video src={test_video} />
      </div>
      <div className={s.cameraCard_info}>
        <div className={s.cameraCard_info_title}>person</div>
        <div className={s.cameraCard_info_body}>
          <div className={s.cameraCard_info_item}>
            <span className={s.cameraCard_info_names}>Время: </span>
            {Date.now()}
          </div>
          <div className={s.cameraCard_info_item}>
            <span className={s.cameraCard_info_names}>Плагин: </span>
            {camera.cam_active_plugins[0]}
          </div>
          <div className={s.cameraCard_info_item}>
            <span className={s.cameraCard_info_names}>Камера: </span>
            {camera.name}
          </div>
          <div className={s.cameraCard_info_item}>
            <span className={s.cameraCard_info_names}>Видеосервер: </span>
            {videoserver.name}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CameraCard;
