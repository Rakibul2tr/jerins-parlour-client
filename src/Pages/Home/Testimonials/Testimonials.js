import React, { useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { Rating, RatingView } from 'react-simple-star-rating'
import { Box } from '@mui/system';
import { Container, Grid, Paper, Typography } from '@mui/material';

const Testimonials = () => {
    const [rating, setRating] = useState(0)
    const [testimonials,setTestimonials]=useState([])
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
      }

        useEffect( ()=>{
        fetch('http://localhost:5000/testimonials')
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
        },[])
   
    console.log(testimonials);

    return (
     <Container sx= {{py:5}}>
         <Typography sx={{fontWeight:600,textAlign:'center',py:5}} variant="h4"> <span style={{color:'#e63e73'}}>Testimonials</span></Typography>
         {/* <Carousel show={3.2} slide={3} swiping={true}transition={0.5}> */}
         <Grid container spacing={2}>
         
         {
            testimonials.map(testimonial=><Grid item xs={12}md={4} >
                <Paper sx={{p:3,m:2}}>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <img width='100px' src={testimonial?.img} alt="" />
                        <Box>
                            <Typography variant='h5'>{testimonial?.name}</Typography>
                            <Typography variant='h6'>{testimonial?.profassion}</Typography>
                        </Box>
                    </Box>
                    <p>{testimonial?.des}</p>
                    <Rating onClick={handleRating} ratingValue={rating}/>
                </Paper>
            </Grid>)
            }
          </Grid>  
        {/* </Carousel> */}   
     </Container>
    );
};

export default Testimonials;