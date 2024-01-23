import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import resumeData from '../../utils/resumeData';
import './Contact.scss';
import CustomButton from '../../components/Buttons/Button';

const Contact = () => {
    return (
        <div>
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
        </div>
    );
}

export default Contact;
