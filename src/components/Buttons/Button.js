import React from 'react';
import { Button } from '@mui/material';
import './Button.scss'; 
import { saveAs } from 'file-saver';

const CustomButton = ({ text, icon }) => {

    const handleDownload = () => {
        const pdfBlob = new Blob(['This is the content of the PDF file.'], { type: 'CV_Vuth_Sachakborameiy_2024.pdf' });
    
        // Trigger download using FileSaver
        saveAs(pdfBlob, 'CV_Vuth_Sachakborameiy_2024.pdf');
    };
    
    return (
        <Button onClick={handleDownload} className='custom_btn' endIcon={ icon ? <div className='btn_icon_container'>{icon}</div> : null }>
            <span className='btn_text'>{text}</span>
        </Button>
    );
};

export default CustomButton;
