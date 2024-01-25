import React from 'react';
import { Button, Link } from '@mui/material';
import './Button.scss'; 

const TelegramButton = ({ text }) => {

    return (
        <Button target='_blank' className='custom_btn'>
            <span className='btn_text'>{ text }</span>
        </Button>
    );
}

export default TelegramButton;
