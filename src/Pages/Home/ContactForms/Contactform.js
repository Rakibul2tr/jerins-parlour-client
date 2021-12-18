import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Contactform.css'
import{ init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { Typography } from '@mui/material';



const Contactform = () => {
    const [confMasseg,setconfMasseg]=useState('')
    const form = useRef();
    init("user_TNKg0RPd7ro5Jpqag8Mc5");
    const contactform= e => {
        e.preventDefault();
        emailjs.sendForm('service_qnikr1h', 'template_w0n57sq', e.target, 'user_TNKg0RPd7ro5Jpqag8Mc5')
        .then((result) => {
            setconfMasseg(result.text);
      }, (error) => {
        setconfMasseg(error.text);
      });
      e.target.reset()
    };


    return( <Box sx={{ flexGrow: 1 }} className="contact-bg">
    <Grid container spacing={2} >
      <Grid item xs={12}md={8}sx={{margin:'auto'}}>
      <section id="contact">
  
        <h1 className="section-header"style={{color:'#e63e73'}}>Contact Us</h1>
        
        <div className="contact-wrapper">
        <div className="direct-contact-container">

            <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">City, State</span></i></li>

                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>

                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>

            </ul>

            <hr/>
            <ul className="social-media-list">
                <li><a href="/#" target="_blank" className="contact-icon">
                    <i className="fa fa-github" aria-hidden="true"></i></a>
                </li>
                <li><a href="/#" target="_blank" className="contact-icon">
                    <i className="fa fa-codepen" aria-hidden="true"></i></a>
                </li>
                <li><a href="/#" target="_blank" className="contact-icon">
                    <i className="fa fa-twitter" aria-hidden="true"></i></a>
                </li>
                <li><a href="/#" target="_blank" className="contact-icon">
                    <i className="fa fa-instagram" aria-hidden="true"></i></a>
                </li>       
            </ul>
            <hr/>

         </div>
        
         {/* right contact page */}
            
            <form onSubmit={contactform}ref={form} id="contact-form" className="form-horizontal" >
            
            <div className="form-group">
                <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="NAME" name="name" required />
                </div>
            </div>

            <div className="form-group">
                <div className="col-sm-12">
                <input type="email" className="form-control" placeholder="EMAIL" name="email" required/>
                </div>
            </div>

            <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
            
            <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div className="alt-send-button">
                <i className="fa fa-paper-plane"></i><span className="send-text">SEND</span>
                </div>
            
            </button>
            <Typography sx={{color:'#e63e73',fontSize:'36px',fontWeight:700,textAlign:'center'}}>{confMasseg}</Typography>
            </form>
            
                
            
         {/* right contact page  */}
            
        </div>
        
        </section>  
        
        
      </Grid>
    </Grid>
  </Box>
);
};

export default Contactform;