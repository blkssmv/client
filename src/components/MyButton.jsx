import React from 'react';
import s from '../styles/MyButton.module.css'

const MyButton = ({onClick,children}) => {
    return (
        <button type="button" onClick={onClick} className={s.myButton}>
            {children}
        </button>
    );
};

export default MyButton;