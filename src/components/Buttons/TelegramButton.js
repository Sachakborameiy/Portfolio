import React from 'react';
import { Button, Link } from '@mui/material';
import './Button.scss'; 

const TelegramButton = ({ text, icon }) => {

    const handleOpenTelegram = () => {
        window.open('https://t.me/Borameii', '_blank');
    };

    return (
        <Button className='custom_btn' onClick={handleOpenTelegram} endIcon={ icon ? <div className='btn_icon_container'>{icon}</div> : null }>
            <span className='btn_text'>{ text }</span>
        </Button>
    );
}

export default TelegramButton;
