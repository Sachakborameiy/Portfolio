import React from 'react';
import { Typography } from '@mui/material';
import './Footer.scss';
import resumeData from '../../utils/resumeData';

const Footer = () => {
    return (
        <div className='footer mb_20'>
                <div className='footer_left'>
                    <Typography className="footer_name">
                    {resumeData.latinName}
                    </Typography>
                </div>
                <div className='footer_right'>
                    <Typography className="footer_copyright">
                    &#169; 2024 design and developed by &nbsp;
                        <a href='/' target='_blank'>
                            { resumeData.name }
                        </a>
                        <br/>
                        Clone idea from {" "} tavonline
                    </Typography>
                </div>
            </div>
    );
}

export default Footer;
