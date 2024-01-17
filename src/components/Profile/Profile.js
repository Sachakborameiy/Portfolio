import React from 'react';
import { Typography } from '@material-ui/core';
import './Profile.scss';
import resumeData from '../../utils/resumeData';
import { GetApp, PersonOutlineOutlined } from '@material-ui/icons';
import { TimelineContent, TimelineItem } from '@mui/lab';
import CustomTimeLine, {CustomTimeLineSeparator} from '../Timeline/CustomTimeLine';
import CustomButton from '../Buttons/Button';

const CustomTimeLineItem = ({ title, text, link }) => {
    return (
        <TimelineItem>
            <CustomTimeLineSeparator />
            <TimelineContent className={'timeLine_content'}>
                { link ? (<Typography style={{fontSize: '13px', color: '#787878', fontWeight: '400', textDecoration: 'none'}}>
                    <span style={{fontSize: '13px', color: 'black', fontWeight: '400', textDecoration: 'none', textTransform: 'capitalize'}}>{ title }:</span> {" "}
                    <a href={link} target='_blank' style={{ color: 'black', fontSize: '13px'}}>
                        { text }
                    </a>
                </Typography>) : (
                    <Typography>
                        <span style={{fontSize: '13px', color: 'black', fontWeight: '400', textDecoration: 'none', textTransform: 'capitalize'}}>{title}:</span>
                        <a href={link} target='_blank' style={{ color: '#787878', fontSize: '13px'}}>
                            { text }
                        </a>
                    </Typography>
                )}
            </TimelineContent>
        </TimelineItem>
    );
};

const Profile = ({ text, icon }) => {
    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.name}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={require("../../assets/images/profile-1.jpg")} alt=''/>
            </figure>

            <div className='profile_information'>
                <CustomTimeLine icon={<PersonOutlineOutlined/>}>
                    <CustomTimeLineItem title='Nationality' text={resumeData.nationality}/>
                    <CustomTimeLineItem title='Marital Status' text={resumeData.status}/>
                    <CustomTimeLineItem title='Email' text={resumeData.email}/>
                    <CustomTimeLineItem title='Phone' text={resumeData.phone}/>
                    <CustomTimeLineItem title='Address' text={resumeData.address}/>
                
                    {/* {Object.keys(resumeData.socials).map((key) => (
                        <CustomTimeLineItem title={key} text={resumeData.socials[key].text} link={resumeData.socials[key].link} />
                    ))} */}
                </CustomTimeLine>
                <br/>
                <div className={'button_container'}>
                    <CustomButton text={'Download CV'} icon={<GetApp/>}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
