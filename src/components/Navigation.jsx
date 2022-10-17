import React, { useState } from "react";
import s from "../styles/Navigation.module.css";
import blue_icon from "../layouts/icons/blue_logo.svg";
import notifications_icon from "../layouts/icons/notifications_icon.svg";
import { NavLink } from "react-router-dom";
// import NotificationDropDown from "./NotificationDropDown";

const Navigation = ({isHaveAccess}) => {
  const [isOpenNotificationDropDown, setIsOpenNotificationDropDown] =
    useState(false);
  return (
    <>
      <ul className={s.nav}>
        <NavLink to="/" className={s.logo_icon}>
          <span className={s.logo_img}>
            <img src={blue_icon} alt="" />
          </span>
          <span className={s.logo_text}>VBUS</span>
        </NavLink>
        <li
          onClick={() => {
            setIsOpenNotificationDropDown(!isOpenNotificationDropDown);
          }}
          className={s.notifications}
        >
          <span className={s.notifications_img}>
            <img src={notifications_icon} alt="notifications" />
          </span>
          <span className={s.notifications_text}>Уведомления</span>
        </li>
        {isHaveAccess && <li className={s.isHaveAccess}>
          <div className={s.isHaveAccess_icon}></div>
          <div className={s.isHaveAccess_text}>Предоставлен доступ</div>
          </li>}
        <li className={s.logout}>Выйти</li>
      </ul>
      {/* {isOpenNotificationDropDown && <NotificationDropDown />} */}
    </>
  );
};

export default Navigation;