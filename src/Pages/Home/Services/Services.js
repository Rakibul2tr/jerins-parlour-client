import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';

const Services = () => {
    const {services}=useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container sx={{py:5}}>
          <Typography sx={{fontWeight:600,textAlign:'center',py:8}} variant="h4">Our Awesome <span style={{color:'#e63e73'}}>Service</span></Typography>
            <Grid container spacing={2}>
                {
                    services.map(service=><Grid item xs={12} md={4} key={service._id}>
                        <Paper elevation={3} sx={{textAlign:'center',p:3}}>
                            <img src={service.img} alt="" />
                        <Typography sx={{fontWeight:500}} variant="h6">{service.title}</Typography>
                        <Typography sx={{color:'#e63e73',fontWeight:600}} variant="h6">$ {service.price}</Typography>
                        <Typography sx={{fontSize:'13px',color:'#999'}} variant="h6">{service.des}</Typography>
                        </Paper>
                        </Grid>)
                }
                </Grid>
                <Box sx={{textAlign:'center',py:5}}>
                <Link  to="/explore"><Button sx={{background:'#ed6b94',color:'#fff',margin:'auto'}}>Explore more</Button></Link>
                </Box>
          </Container>
        </Box>
    );
};

export default Services;