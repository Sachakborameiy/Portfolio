import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeRounded, Telegram } from '@mui/icons-material';
import { Router as withRouter, NavLink } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Button';
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
                    
                    {/* Portfolio Link  */}
                    <Nav.Link as={NavLink} to='/portfolio' className={location.pathname == "/portfolio" ? "header_link_active" : "header_link"}>
                        Portfolio
                    </Nav.Link>

                </Nav>

                <div className='header_right'>
                    {Object.keys(resumeData.socials).map((key) => (
                        <a href={resumeData.socials[key].link} target='_blank'>
                            {resumeData.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
