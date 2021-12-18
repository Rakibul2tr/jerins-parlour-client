import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Explore.css'
import useAuth from '../../Hoocks/useAuth';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';


const slides = [
    { title: 'Spa Care',
     description: 'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked',
     
    },
    { title: 'BeautyPress',
     description: 'After owning two successful salon locations they decided to move their passion to the small town of Gainesville',
   
    },
    { title: 'Beauty Care',
     description: 'The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked',
     
    }
  ];
const Explore = () => {
    const {services}=useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            
          <Container sx={{py:5}}>
          <Box className="explore-bg">
          <Slider>
                {slides.map((slide, index) => <div className="exploreCarosel" key={index}>
                    <Box sx={{textAlign:'center',color:'#fff',padding:'10px',maxWidth:'400px'}}>
                        <h2 style={{textAlign:'center',color:'#e63e73'}}>{slide.title}</h2>
                        <Typography >{slide.description}</Typography>
                    </Box>
                </div>)}
            </Slider>
          </Box>
          <Typography sx={{fontWeight:600,textAlign:'center',py:8}} variant="h4">Our Awesome <span style={{color:'#e63e73'}}>Service</span></Typography>
            <Grid container spacing={2}>
                {
                    services.map(service=><Grid item xs={12} md={3} key={service._id}>
                        <Paper elevation={3} sx={{textAlign:'center',position:'relative'}}>
                            <img src={service.img} alt="" />
                        <Typography sx={{fontWeight:500}} variant="h6">{service.title}</Typography>
                        
                        <Typography sx={{fontSize:'13px',color:'#999',padding:'5px'}} variant="h6">{service.des}</Typography>
                        <Box className="card-price">
                        <Typography sx={{color:'#e63e73',fontWeight:600}} variant="h6">$ {service.price}</Typography>
                        </Box>
                        <Link  to={`/Dashbord/booking/:${service._id}`}><Button sx={{background:'#ed6b94',color:'#fff',marginBottom:'5px'}}>Book now</Button></Link>
                        </Paper>
                        </Grid>)
                }
                </Grid>
                <Box sx={{textAlign:'center',py:5}}>
                <Link  to="/"><Button sx={{background:'#ed6b94',color:'#fff',margin:'auto'}}>Explore more</Button></Link>
                </Box>
          </Container>
        </Box>
    );
};

export default Explore;