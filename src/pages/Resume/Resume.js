import React from 'react';
import { Grid, Typography, List, ListItem, Paper, TextField } from '@mui/material';
import resumeData from '../../utils/resumeData';
import CustomTimeLine, { CustomTimeLineSeparator } from '../../components/Timeline/CustomTimeLine';
import { Work } from '@mui/icons-material';
import { TimelineItem, TimelineContent, TimelineDot } from "@mui/lab";
import './Resume.scss';
import SchoolIcon from '@mui/icons-material/School';
import Contact from '../Contact/Contact';

const Resume = () => {
    return (
        <>
            {/* about me  */}
            <Grid container className="section">
                <Grid item className='section_title mb_20'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutMe_text'>{resumeData.aboutMe}</Typography>
                    <Typography variant='body2' className='aboutMe_textSub'>{resumeData.aboutMeSub}</Typography>
                </Grid>
            </Grid>


            {/* education and experience  */}
            <Grid container className="section top_30 pb_45">
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>Resume</h6>
                </Grid>
                <Grid item xs={12}>                    
                    <Grid container>
                        {/* Experience  */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title="Work Experience" icon={<Work/>} style={{fontSize: '8px !important', color: '#787878'}}>
                                {resumeData.experiences.map((experience) => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{ experience.title }</Typography>
                                            <Typography variant='caption' className='timeline_date'>{ experience.date }</Typography>
                                            <Typography variant='body2' className='timeline_desc'>{ experience.description }</Typography>
                                            <Typography>
                                                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                                                    {
                                                        experience.subDescription.map((subdesc, index) => (
                                                            <ListItem key={index} sx={{ display: 'list-item'}} dense disablePadding>
                                                                {/* <ListItemText primary={subdesc} /> */}
                                                                <Typography sx={{ fontSize: '12px', color: '#000', fontWeight: '5', justifyContent: 'baseline'}}>{subdesc}</Typography>
                                                            </ListItem>
                                                            // <ListSubheader style={{fontSize: '12px !important', lineHeight: '2'}}>{subdesc}</ListSubheader>
                                                    ))}
                                                </List>
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}>
                            <CustomTimeLine title={resumeData.education} sx={{fontWeight: "bolder !important"}} icon={<SchoolIcon/>} style={{fontSize: '8px !important', color: '#787878'}}>
                                {resumeData.edu.map((edu) => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{ edu.school }</Typography>
                                            <Typography variant='caption' className='timeline_date'>{ edu.date }</Typography>
                                            <Typography variant='body2' sx={{ fontSize: '12px', color: '#000', fontWeight: '5', justifyContent: 'baseline'}}>{ edu.title }</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                            <CustomTimeLine title={resumeData.training} sx={{fontWeight: "bolder !important"}} icon={<SchoolIcon/>} style={{fontSize: '8px !important', color: '#787878'}}>
                                {resumeData.ot.map((other) => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{ other.school }</Typography>
                                            <Typography variant='caption' className='timeline_date'>{ other.date }</Typography>
                                            <Typography variant='body2' sx={{ fontSize: '12px', color: '#000', fontWeight: '5', justifyContent: 'baseline'}}>{ other.title }</Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            {/* services  */}
            <Grid container className="section pb_45">
                <Grid className='section_title mb_30'>
                    <span></span>
                    <h6 className=''>My Services</h6>
                </Grid>

                <Grid item xs={12}>
                    <Grid container spacing={3} justifyContent={'space-around'}>
                        {
                            resumeData.services.map((service, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <div className='service'>
                                        <Typography className='service_icon' variant='body2'>
                                            {service.icon}
                                        </Typography>
                                        <Typography className='service_title' variant='h6'>
                                            {service.title}test
                                        </Typography>
                                        <Typography className='service_description' variant='body2'>
                                            {service.description}
                                        </Typography>
                                    </div>
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>

            {/* skill  */}
            <Grid container spacing={3} justifyContent={'space-between'} className="section graybg pb_45 p_50">
                <Grid item xs={12}>
                    <Grid container justifyContent={'space-between'} spacing={3}>
                        {
                            resumeData.skills.map((skill) => (
                                <Grid item xs={12} sm={6} md={3}> 
                                    <Paper elevation={0} className='skill'>
                                        <Typography variant='h6' className='skills_title'>
                                            {skill.title}
                                        </Typography>
                                        {
                                            skill.description.map((e) => (
                                                <Typography variant='body2' className='skill_description'>
                                                    <TimelineDot variant={'outlined'} className="timeline_dot" />
                                                    {e}
                                                </Typography>
                                        ))}
                                    </Paper>
                                </Grid>                     
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            
            <Contact/>

        </>
    );
}

export default Resume;
