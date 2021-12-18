import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import bennerimg from '../../../Image/Image/bennerHome.png';

const Homebener = () => {
    return (
     <Box sx={{ flexGrow: 1,py:3 }}>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Box sx={{position:'relative',top:{xs:'1%',md:'40%'}}}>
                    <Typography sx={{fontWeight:600}} variant="h6">
                    <div class="typing-demo">
                    BEAUTI SELON FOR EVERY WOMEN
                    </div>  
                    </Typography>
                    <Typography sx={{py:2,fontSize:'14px',color:'#999'}} variant="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem obcaecati tempore, nisi atque in itaque. Autem obcaecati tempore, nisi atque in itaque.</Typography>
                    <Link to="/"><Button sx={{background:'#ed6b94',color:'#fff'}}>Get Started</Button></Link>
                </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        <img width="100%" src={bennerimg} alt="homebenner" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
      </Box>
    );
};

export default Homebener;