import React from 'react';
import { Button } from '@mui/material';
import './Button.scss'; 

const CustomButton = ({ text, icon }) => {
    
    return (
        <Button className='custom_btn' endIcon={ icon ? <div className='btn_icon_container'>{icon}</div> : null }></Button>
    );
};

export default CustomButton;
