import React from 'react';
import { Typography, List, ListItem, Button } from '@mui/material';
import './Profile.scss';
import resumeData from '../../utils/resumeData';
import { GetApp, PersonOutlineOutlined } from '@mui/icons-material';
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

const Profile = () => {

    return (
        <div className='profile container_shadow'>
            <div className='profile_name'>
                <Typography className='name'>{resumeData.latinName}</Typography>
                <Typography className='title'>{resumeData.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src={require("../../assets/images/profile-2.jpg")} alt=''/>
            </figure>

            <div className='profile_information'>
                <CustomTimeLine icon={<PersonOutlineOutlined/>}>
                    <CustomTimeLineItem title='Nationality' text={resumeData.nationality}/>
                    <CustomTimeLineItem title='Marital Status' text={resumeData.status}/>
                    <CustomTimeLineItem title='Email' text={resumeData.email}/>
                    <CustomTimeLineItem title='Phone' text={resumeData.phone}/>
                    <CustomTimeLineItem title='Address' text={resumeData.address}/>
                    <div className='language'>
                        {
                            resumeData.language.map((languages) => (
                                <Typography>
                                    <Typography className='timeline_title'>{ languages.title }</Typography>
                                    <Typography>
                                        <List sx={{ listStyleType: 'disc', pl: 2 }}>
                                            {
                                                languages.lang.map((l, index) => (
                                                    <ListItem key={index} sx={{ display: 'list-item', color: 'red'}} dense disablePadding> 
                                                        <Typography sx={{ fontSize: '13.5px', fontWeight: '600', color: "darkslategray"}}>{l}</Typography>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                    </Typography>
                                </Typography>
                            ))
                        }
                    </div>
                </CustomTimeLine>
                <br/>
                <div className={'button_container'} style={{marginTop: "-3em !important"}}>
                    <CustomButton  text={'Download My CV'} icon={<GetApp/>} />
                </div>

            </div>
        </div>
    );
}

export default Profile;
