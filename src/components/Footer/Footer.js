import React from 'react';
import { Typography } from '@mui/material';
import './Footer.scss';
import resumeData from '../../utils/resumeData';

const Footer = () => {
    return (
        <div className='footer'>
                <div className='footer_left'>
                    <Typography className="footer_name">
                    {resumeData.name}
                    </Typography>
                </div>
                <div className='footer_right'>
                    <Typography className="footer_copyright">
                        Design and developed by {"Beyramo"}
                        <a href='/' target='_blank'>
                            Vuth Sachakborameiy
                        </a>
                        <br/>
                        Clone idea from {" "}
                        <a href='https//www.google.com' target='_blank'>
                         google
                        </a>
                    </Typography>
                </div>
            </div>
    );
}

export default Footer;
