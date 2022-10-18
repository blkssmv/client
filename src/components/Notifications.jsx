import s from '../styles/Notifications.module.css'


const Notifications = () => {
  return (
    <div className={s.notificationDropDown}>
      <header className={s.notificationDropDown_header}>
        <div className={s.notificationDropDown_header_title}>Уведомление</div>
        <div className={s.notificationDropDown_header_new}>1 новый</div>
      </header>
      <div className={s.notificationDropDown_wrapper}>
        <ul className={s.notificationDropDown_list}>
          <li className={s.notificationDropDown_list_item}>
            <div className={s.notificationDropDown_item_icon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#3377FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#3377FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={s.notificationDropDown_item_content}>
              <div className={s.notificationDropDown_item_text}>Вы запросили доступ  у Клиента 1</div>
              <div className={s.notificationDropDown_item_buttonGreen}>
                <button>Повторно запросить</button>
              </div>
            </div>
            <div className={s.notificationDropDown_item_when}>
              <div className={s.notificationDropDown_when_date}>12.03.2022</div>
              <div className={s.notificationDropDown_when_time}>12:34</div>
            </div>
          </li>
          <li className={s.notificationDropDown_list_item}>
            <div className={s.notificationDropDown_item_icon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#3377FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#3377FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={s.notificationDropDown_item_content}>
              Вы отклонили запрос на доступ к вашему личному кабинету
            </div>
            <div className={s.notificationDropDown_item_when}>
              <div className={s.notificationDropDown_when_date}>12.03.2022</div>
              <div className={s.notificationDropDown_when_time}>12:34</div>
            </div>
          </li>
          <li className={s.notificationDropDown_list_item}>
            <div className={s.notificationDropDown_item_icon}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#3377FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#3377FF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={s.notificationDropDown_item_content}>
            <div className={s.notificationDropDown_item_text}>Вы отклонили запрос на доступ к вашему личному кабинету</div>
              <div className={s.notificationDropDown_item_buttonRed}>
                <button>Отменить запрос</button>
              </div>
            </div>
            <div className={s.notificationDropDown_item_when}>
              <div className={s.notificationDropDown_when_date}>12.03.2022</div>
              <div className={s.notificationDropDown_when_time}>12:34</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Notifications;