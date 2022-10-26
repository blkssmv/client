import React, { useState } from "react";
import s from "../styles/Navigation.module.css";
import blue_icon from "../layouts/icons/blue_logo.svg";
import notifications_icon from "../layouts/icons/notifications_icon.svg";
import { NavLink } from "react-router-dom";
import Notifications from "./Notifications";

const Navigation = ({ isHaveAccess }) => {
  const [isOpenNotificationDropDown, setIsOpenNotificationDropDown] =
    useState(false);
  return (
    <>
      <ul className={s.nav}>
        <li
          onClick={() => {
            setIsOpenNotificationDropDown(!isOpenNotificationDropDown);
          }}
          className={s.notifications}
        >
          <NavLink to="/" className={s.logo_icon}>
            <span className={s.logo_img}>
              <img src={blue_icon} alt="" />
            </span>
            <span className={s.logo_text}>VBUS</span>
          </NavLink>
          <span className={s.notifications_img}>
            <img src={notifications_icon} alt="notifications" />
          </span>
          <span className={s.notifications_text}>Уведомления</span>
        </li>
        <li className={s.logout}>
          {isHaveAccess && (
            <div className={s.isHaveAccess}>
              <div className={s.isHaveAccess_icon}>
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#FF3B3B" />
                </svg>
              </div>
              <div className={s.isHaveAccess_text}>Предоставлен доступ</div>
              <div className={s.closeAccess}>
                <div className={s.closeAccess_wrapper}>
                  <button className={s.closeAccess_btn}>Закрыть доступ</button>
                </div>
              </div>
            </div>
          )}
          <div className={s.logout_text}>Выйти</div>
        </li>
      </ul>
      {isOpenNotificationDropDown && <Notifications />}
    </>
  );
};

export default Navigation;
