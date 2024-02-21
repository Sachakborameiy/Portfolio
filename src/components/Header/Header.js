import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeRounded, Telegram } from '@mui/icons-material';
import {  NavLink } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import TelegramButton from '../Buttons/TelegramButton';
import './Header.scss';
import { useLocation } from 'react-router-dom';


const Header = () => {

    let location = useLocation();
    
    return (
        <Navbar expand="lg" sticky="top" className="header">
            {/* Home Link  */}
            <Nav.Link as={NavLink} to="/" className='header_navLink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>
            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>

                    {/* Resume Link  */}
                    <Nav.Link as={NavLink} to='/' className={location.pathname == "/" ? "header_link_active" : "header_link"}>
                        Resume
                    </Nav.Link>
                    
                    {/* Contact Link  */}
                    <Nav.Link as={NavLink} to='/knowledge' className={location.pathname == "/knowledge" ? "header_link_active" : "header_link"}>
                        Knowledge
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/hobby' className={location.pathname == "/hobby" ? "header_link_active" : "header_link"}>
                        Hobby
                    </Nav.Link>
                    <Nav.Link as={NavLink} to='/portfolio' className={location.pathname == "/portfolio" ? "header_link_active" : "header_link"}>
                        Service
                    </Nav.Link>
                    {/* <Nav.Link as={NavLink} to='/service' className={location.pathname == "/service" ? "header_link_active" : "header_link"}>
                        Service
                    </Nav.Link> */}
                    <Nav.Link as={NavLink} to='/contact' className={location.pathname == "/contact" ? "header_link_active" : "header_link"}>
                        Contact
                    </Nav.Link>

                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map((key, index) => (
                        <a key={index} href={resumeData.socials[key].link} target='_blank'>
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    <TelegramButton text={"Hire Me"}  icon={<Telegram style={{color: "#2481CC"}}/>}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
