import React from 'react';
import { useNavigate } from "react-router-dom";

const BackButton = ({children, target = -1}) => {
    const navigate = useNavigate();

    return (
        <button
        type="back"
        className='back-button'
        onClick={(e) => {
          e.preventDefault();
          navigate(target);
        }}
        >
        <img src="../assets/back.svg" alt="back" />
        {children}
        </button>
    )
}

export default BackButton;


