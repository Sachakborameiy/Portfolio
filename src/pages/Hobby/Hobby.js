import React from 'react';
import { Grid, Typography, List, ListItem } from '@mui/material';
import resumeData from '../../utils/resumeData';
import CustomTimeLine, { CustomTimeLineSeparator } from '../../components/Timeline/CustomTimeLine';
import InterestsIcon from '@mui/icons-material/Interests';
import { TimelineItem, TimelineContent } from "@mui/lab";
import './Hobby.scss';

const Hobby = () => {
    return (
        <div>
            <Grid container className="section pb_45">
                <Grid item xs={12}>                    
                    <Grid container>
                        {/* Hobby  */}
                        <Grid item xs={12}>
                            <CustomTimeLine title="HOBBIES & INTERESTS" icon={<InterestsIcon />} >
                                {resumeData.hobbies.map((hobby, index) => (
                                    <TimelineItem>
                                        <CustomTimeLineSeparator/>
                                        <TimelineContent key={index}>
                                            <Typography className='timeline_title'>{ hobby.title }</Typography>
                                            <Typography>
                                                <List sx={{ listStyleType: 'disc', pl: 2 }}>
                                                    {
                                                        hobby.description.map((desc, index) =>(
                                                            <ListItem key={index} sx={{ display: 'list-item'}} dense disablePadding> 
                                                                <Typography sx={{ fontSize: '12px', color: '#000', fontWeight: '5', justifyContent: 'baseline'}}>{desc}</Typography>
                                                            </ListItem>
                                                        ))}    
                                                </List>
                                            </Typography>
                                        </TimelineContent>
                                    </TimelineItem>
                                ))}
                            </CustomTimeLine>
                        </Grid>                        
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Hobby;
