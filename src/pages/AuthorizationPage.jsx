import React from "react";
import s from "../styles/AuthorizationPage.module.css";
import MyButton from "../components/MyButton";
import MyInput from "../components/MyInput";
import MyPasswordInput from "../components/MyPasswordInput";

const Authorization = () => {
  return (
    <div className={s.authorization}>
      <div className={s.authorization_content}>
        <div className={s.authorization_title}>Авторизация</div>
        <MyInput placeholder="Логин">
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
        <MyPasswordInput/>
        <MyButton>Войти</MyButton>
      </div>
      <div className={s.authorization_info}>
        <div className={s.logo}>
          <div className={s.logo_icon}>
            <svg
              viewBox="0 0 212 202"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask
                id="mask0_355_10471"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="212"
                height="202"
              >
                <rect width="212" height="201.034" fill="url(#pattern0)" />
              </mask>
              <g mask="url(#mask0_355_10471)">
                <rect
                  x="-14.6206"
                  y="-25.5864"
                  width="266.828"
                  height="266.828"
                  fill="white"
                />
              </g>
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_355_10471"
                    transform="scale(0.00343643 0.00362387)"
                  />
                </pattern>
                <image
                  id="image0_355_10471"
                  width="291"
                  height="276"
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <div className={s.logo_name}>VBUS</div>
        </div>
        <div className={s.about}>
          Платформа для обеспечения простого и удобного подключения детекторов
          видеоаналитики к потокам клиентов.
        </div>
      </div>
    </div>
  );
};

export default Authorization;
