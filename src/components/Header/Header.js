import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeRounded, Telegram } from '@material-ui/icons';
import { Router as withRouter, NavLink } from 'react-router-dom';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Buttons/Button';
import './Header.scss';

const Header = ({props}) => {
    const pathName = props?.location?.pathName;

    return (
        <Navbar expand="lg" sticky="top" className="header">
            {/* Home Link  */}
            <Nav.Link as={NavLink} to="/">
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav>
                        {/* Resume Link  */}
                        <Nav.Link as={NavLink} to='/' className={pathName == "/" ? "header_link_active" : "header_link"}>Resume</Nav.Link>
                        {/* Portfolio Link  */}
                        <Nav.Link as={NavLink} to='/portfolio' className={pathName == "/portfolio" ? "header_link_active" : "header_link"}>Portfolio</Nav.Link>

                        <div className='header_right'>
                            {Object.keys(resumeData.socials).map((key) => (
                                <a href={resumeData.socials[key].link} target='_blank' rel='no'>
                                    {resumeData.socials[key].icon}
                                </a>
                            ))}
                            <CustomButton text={'Hire Me'} icon={<Telegram/>}/>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Nav.Link>
        </Navbar>
    );
}

export default withRouter(Header);
// export default Header;
