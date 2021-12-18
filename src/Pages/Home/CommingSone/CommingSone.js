import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Slider from 'react-animated-slider';
import './Commingsoon.css';
import 'react-animated-slider/build/horizontal.css';
import slidimg1 from "../../../Image/Image/comming-son1.jpg";
import slidimg2 from "../../../Image/Image/comming-son2.jpg";
import slidimg3 from "../../../Image/Image/comming-son3.jpg";

const slides = [
    { title: 'Spa Care',
     description: 'After owning two successful salon locations they decided to move their passion to the small town of Gainesville',
     image:slidimg1
    },
    { title: 'BeautyPress',
     description: 'After owning two successful salon locations they decided to move their passion to the small town of Gainesville',
     image:slidimg2
    },
    { title: 'Beauty Care',
     description: 'After owning two successful salon locations they decided to move their passion to the small town of Gainesville',
     image:slidimg3
    }
  ];
const CommingSone = () => {
    const [commingsoon,setcommingsoon]=useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/commingsoon')
      .then(res=>res.json())
      .then(data=>setcommingsoon(data))
    },[])
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container  sx={{margin:' auto'}}>
        <Typography sx={{fontWeight:600,textAlign:'center',py:8}} variant="h4">Our Expart <span style={{color:'#e63e73'}}>Other Service</span></Typography>
        <Grid container spacing={2} sx={{display:'flex',justifyContent:'center'}}>
          <Grid spacing={2} item xs={12}md={6}sx={{}}>
          <Typography className="text" sx={{fontWeight:600,color:'#444',padding:'5px',textAlign:'center'}} variant="h4"> Comming Soon..</Typography>
            <Box sx={{margin:'1px'}}>
            <Slider>
                {slides.map((slide, index) => <div key={index}>
                    <img  width="100%"height="60%" src={slide.image} alt="" />
                    <h2 style={{textAlign:'center',color:'#e63e73'}}>{slide.title}</h2>
                    <p>{slide.description}</p>
                </div>)}
            </Slider>
            </Box>
          </Grid>
          <Grid spacing={2} item xs={12}md={6}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
              {
              commingsoon.map(single=><Grid item xs={6}md={4} key={single._id}>
                    <Paper className="commingsooncard">
                      <Box >
                        <img width="100%" src={single.image} alt="" />
                      </Box>
                      <Box className="commingtext">
                        <Typography className="text" sx={{fontWeight:500,color:'#fff'}} variant="h6"> Comming Soon..</Typography>
                      </Box>
                    </Paper>
                </Grid>)
              }
                
              </Grid>
            </Box>
          </Grid>
        </Grid>
        </Container>
      </Box>
    );
};

export default CommingSone;