import React from 'react';
import { Grid, Typography, List, ListItem, Paper, TextField } from '@mui/material';
import resumeData from '../../utils/resumeData';
import CustomTimeLine, { CustomTimeLineSeparator } from '../../components/Timeline/CustomTimeLine';
import { Work } from '@mui/icons-material';
import { TimelineItem, TimelineContent, TimelineDot } from "@mui/lab";
import './Resume.scss';
import CustomButton from '../../components/Buttons/Button';

const Resume = () => {
    return (
        <>
            {/* about me  */}
            <Grid container className="section pb_45 pt_45">
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutMe_text'>{resumeData.aboutMe}</Typography>
                    <Typography variant='body2' className='aboutMe_textSub'>{resumeData.aboutMeSub}</Typography>
                </Grid>
            </Grid>


            {/* education and experience  */}
            <Grid container className="section pb_45">
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
                            <CustomTimeLine title={resumeData.education} sx={{fontWeight: "bolder !important"}} icon={<Work/>} style={{fontSize: '8px !important', color: '#787878'}}>
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
                            <CustomTimeLine title={resumeData.training} sx={{fontWeight: "bolder !important"}} icon={<Work/>} style={{fontSize: '8px !important', color: '#787878'}}>
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
            {/* Contact  */}
            <Grid container spacing={5} className="section pt_45 pb_45">
                {/* Contact Form   */}
                <Grid item xs={12} lg={7}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Form</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                      id=""
                                      label="Name"
                                      fullWidth
                                      value={'Enter Name'}
                                      onChange={0}
                                      variant='outlined'
                                      />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                      id=""
                                      label="Email"
                                      fullWidth
                                      value={'Enter Email'}
                                      onChange={0}
                                      variant='outlined'
                                      />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                      id=""
                                      label="Message"
                                      fullWidth
                                      value={'Enter Message'}
                                      onChange={0}
                                      multiline 
                                      rows={4}
                                      variant='outlined'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                   <CustomButton text={'submit'} />                     
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>                                     
                </Grid>

                {/* Contact Information  */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='seaction_title_text'>Contact Information</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo_item'>
                                        <span>Address: </span> {resumeData.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo_item'>
                                        <span>Phone: </span> {resumeData.phone}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography className='contactInfo_item'>
                                        <span>Email: </span> {resumeData.email}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>   

                        <Grid item xs={12}>
                            <Grid container className='contactInfo_socialsContainer'>
                                {
                                    Object.keys(resumeData.socials).map((key) => (
                                        <Grid item className='contactInfo_social'>
                                            <a href={resumeData.socials[key].link}>
                                                {resumeData.socials[key].icon}
                                            </a>
                                        </Grid>
                                ))}
                            </Grid>
                        </Grid>                                   
                    </Grid>

                </Grid>
            </Grid>


        </>
    );
}

export default Resume;
