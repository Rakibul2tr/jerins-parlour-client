import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
     <Box sx={{background:'#e63e73',py:5}}>
         <Container>
         <Box sx={{ flexGrow: 1,py:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12}md={3}>
                    <Box>
                        <Typography variant='h5'>Ouer location</Typography>
                        <p>3+ years in business · Khulna <br/>Open ⋅ Closes 9PM · 01720-003684</p>
                    </Box>
                </Grid>
                <Grid item xs={12}md={3}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                <Typography variant='h5'>Compant</Typography>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>project</Link>
                </Box>
                </Grid>
                <Grid item xs={12}md={3}>
                 <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Typography variant='h5'>Quek Link</Typography>
                         <Link to='/'>Rantals</Link>
                        <Link to='/'>Sels</Link>
                        <Link to='/'>Contact</Link>
                   </Box>
                </Grid>
                <Grid item xs={12}md={3}>
                <Box sx={{display:'flex',flexDirection:'column'}}>
                        <Typography variant='h5'>About Us</Typography>
                         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere natus voluptas earum.</p>
                   </Box>
                </Grid>
            </Grid>
        </Box>
         </Container>
     </Box>
    );
};

export default Footer;