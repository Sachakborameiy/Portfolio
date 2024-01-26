import React from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import resumeData from '../../utils/resumeData';
import { TimelineDot } from "@mui/lab";
import './Knowledge.scss';

const Knowledge = () => {
    return (
        <>
            <Grid container spacing={1} className="section graybg">             
                {/* skills  */}
                <Grid container justifyContent={'space-between'} spacing={2}>
                    {
                        resumeData.knowledge.map((skill) => (
                            <Grid item xs={12} sm={4} spacing={3}> 
                                <Paper elevation={0} className='skill' style={{ padding: '20px' }}>
                                    <Typography className='skills_title'>
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
        </>
    );
}

export default Knowledge;
