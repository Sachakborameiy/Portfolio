import React from 'react';
import { Button, Link } from '@mui/material';
import './Button.scss'; 

const CustomButton = ({ text, icon }) => {
    
    return (
        <Button className='custom_btn' LinkComponent={Link} endIcon={ icon ? <div className='btn_icon_container'>{icon}</div> : null }>
            <span className='btn_text'>{ text }</span>
        </Button>
    );
};

export default CustomButton;
