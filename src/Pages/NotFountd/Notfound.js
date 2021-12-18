import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Notfound = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container sx={{padding:'80px 0'}}>
            <Grid spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography sx={{fontSize:'50px',fontWeight:700,textAlign:'center'}}>
                        404
                    </Typography>
                </Grid>
            </Grid>
        </Container>
      </Box>
    );
};

export default Notfound;