import React, {useState} from 'react';
import { Grid, Typography, TextField, Button } from '@mui/material';
import resumeData from '../../utils/resumeData';
import './Contact.scss';


const Contact = () => {

    const [inputName, setName] = useState('');
    const [inputEmail, setEmail] = useState('');
    const [inputMessage, setInputMessage] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setInputMessage(event.target.value);
    };

    const handleSubmit = async () => {

        try {
        
        if (!inputName || !inputEmail) {
            setError(`Excuse me, please enter your information. \n\n Thank you!`);
            return;
        }

        // Replace 'YOUR_BOT_TOKEN' with the actual token obtained from BotFather
        const botToken = '6500050126:AAEJR5_k3CZ3t3JLtZWjjiVswECUDah4xno';
        
        // Replace 'YOUR_CHAT_ID' with your Telegram chat ID
        const chatId = '333329654';

        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            chat_id: chatId,
            text: `Name: ${inputName}\n Age: ${inputEmail} \nMessage:${inputMessage}`,
            }),
        });

        const data = await response.json();

        if (data.ok) {
            setMessage('Your message has been send successfully!!');
        } else {
            setMessage('Failed to submit form. Please try again.');
        }
        } catch (error) {
            console.error('Error submitting form:', error.message);
            setMessage('Error submitting form. Please try again.');
        }  finally {
            // Reset the message after a short delay (e.g., 3 seconds)
            setTimeout(() => {
              setMessage('');
              setError('');
            }, 3000);
        }
    };

    return (
        <div>
            {/* Contact  */}
            <Grid container spacing={5} className="section pt_45 pb_45">
                {/* Contact Form   */}
                <Grid item xs={12} lg={6}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Form</h6>
                        </Grid>

                        <Grid item xs={12}>
                            <form container>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6} >
                                        <TextField
                                            label="Enter your name"
                                            variant="outlined"
                                            fullWidth
                                            value={inputName}
                                            onChange={handleNameChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                        label="Enter your email"
                                        fullWidth
                                        type="email"
                                        value={inputEmail}
                                        variant='outlined'
                                        required
                                        onChange={handleEmailChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        label="Message"
                                        fullWidth
                                        value={inputMessage}
                                        multiline 
                                        rows={4}
                                        variant='outlined'
                                        onChange={handleMessageChange}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>               
                                        <Button variant="contained" className='custom_btn' onClick={handleSubmit} style={{ color: 'green', fontWeight: '700'}}>
                                            <span className='btn_text'>Send Message</span>
                                        </Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </Grid>
                    </Grid>  
                </Grid>

                {/* Contact Information  */}
                <Grid item xs={12} lg={5}>
                    <Grid container>
                        <Grid item className='section_title mb_30'>
                            <span></span>
                            <h6 className='section_title_text'>Contact Information</h6>
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
                                    Object.keys(resumeData.socials).map((key, index) => (
                                        <Grid key={index} item className='contactInfo_social'>
                                            <a href={resumeData.socials[key].link}>
                                                {resumeData.socials[key].icon}
                                            </a>
                                        </Grid>
                                ))}
                            </Grid>
                        </Grid>                                   
                    </Grid>

                </Grid>

                <Grid item xs>
                    {error && <div style={{ marginLeft: '5px', marginTop: '10px', color: 'red' }}>{error}</div>}
                    {message && <div style={{ marginLeft: '5px', marginTop: '10px', color: 'green' }}>{message}</div>}
                </Grid>
            </Grid>
        </div>
    );
}

export default Contact;


