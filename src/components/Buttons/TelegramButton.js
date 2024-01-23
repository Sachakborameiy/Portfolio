import React from 'react';
import { Button, Link } from '@mui/material';
import './Button.scss'; 

const TelegramButton = ({ text, icon }) => {
    const TelegramChatUrl = "https://t.me/Borameii"; 

    return (
        <Button href={TelegramChatUrl} target='_blank' className='custom_btn' endIcon={ icon ? <div className='btn_icon_container'>{icon}</div> : null }>
            <span className='btn_text'>{ text }</span>
        </Button>
    );
}

export default TelegramButton;
