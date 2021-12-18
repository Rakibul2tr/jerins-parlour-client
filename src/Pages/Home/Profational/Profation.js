import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import profationimg from '../../../Image/Image/profational.png';

const Profation = () => {
    return (
        <Box sx={{ flexGrow: 1, }}>
        <Container sx={{borderTop:'1px solid #e63e73',py:8}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                 <Box>
                    <img width="100%" src={profationimg} alt="homebenner" />
                 </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                <Box sx={{position:'relative',top:'30%',left:'10%'}}>
                    <Typography sx={{fontWeight:600}} variant="h4">Let us Hendle your sreen<span style={{color:'#e63e73'}}>Profassionally</span></Typography>
                    <Typography sx={{py:2,fontSize:'14px',color:'#999'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati tempore, nisi atque in itaque. Autem obcaecati tempore, nisi atque in itaque.</Typography>
                    <Link to="/"><Button sx={{background:'#ed6b94',color:'#fff'}}>Learn More</Button></Link>
                </Box>
                </Grid>
            </Grid>
        </Container>
      </Box>
    );
};

export default Profation;