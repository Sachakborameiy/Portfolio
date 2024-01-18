import React from 'react';
import { Grid, Typography, List, ListItem } from '@mui/material';
import resumeData from '../../utils/resumeData';
import './Resume.scss';
import CustomTimeLine, { CustomTimeLineSeparator } from '../../components/Timeline/CustomTimeLine';
import { Work } from '@mui/icons-material';
import { TimelineItem, TimelineContent } from "@mui/lab";

// const useStyles = makeStyles((theme) => ({
//     // listItem: {
//     //     backgroundColor: '#f0f0f0',
//     //     border: '1px solid #ddd',
//     //     margin: '4px',
//     //     borderRadius: '4px',
//     // },
// }));

const Resume = () => {

    // const classes = useStyles();

    return (
        <>
            {/* about me  */}
            <Grid container className="section pb_45">
                <Grid item className='section_title mb_30'>
                    <span></span>
                    <h6 className='section_title_text'>About Me</h6>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' className='aboutMe_text'>{resumeData.aboutMe}</Typography>
                </Grid>
            </Grid>


            {/* education and experience  */}
            <Grid container className="pb_45">
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
                                        {/* <TimelineSeparator className='separator_padding'>
                                            <TimelineDot variant="outlined" className="timeline_dot"/>
                                            <TimelineConnector/>
                                        </TimelineSeparator> */}
                                        <TimelineContent>
                                            <Typography className='timeline_title'>{ experience.title }</Typography>
                                            <Typography variant='caption' className='timeline_date'>{ experience.date }</Typography>
                                            <Typography cariant='body2' className='timeline_desc'>{ experience.description }</Typography>
                                            <Typography className='timeline_desc'>
                                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                                    {
                                                        experience.subDescription.map((subdesc) => (
                                                            // <ListItem className={classes.listItem}>
                                                            //     <ListItemIcon className={classes.dotIcon}>
                                                            // {subdesc}
                                                            //     </ListItemIcon>
                                                            // </ListItem>     
                                                            <ListItem>
                                                                {subdesc}
                                                            </ListItem>
                                                    ))}
                                                </List>
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>

                        {/* Education */}
                        <Grid item sm={12} md={6}></Grid>
                    </Grid>

                </Grid>
            </Grid>

            {/* services  */}
            <Grid container className="">
            </Grid>
            {/* skill  */}
            <Grid container className=""></Grid>
            {/* Contact  */}
            <Grid container className=""></Grid>
        </>
    );
}

export default Resume;
