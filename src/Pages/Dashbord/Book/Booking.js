import {  Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';

const Booking = () => {
    const {bookingid}=useParams();
    const { register, handleSubmit } = useForm();
    const [booking,setbooking]=useState()
    const {user}=useAuth()
    const onSubmit = data =>{
      fetch('http://localhost:5000/book',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
          if(data.insertedId){
              alert('Congrasulation your Booking is successfull')
          }
      })
    }
    return (
        <Box sx={{py:5}}>
            <Grid>
            <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
                <TextField defaultValue={user.displayName} id="standard-basic"{...register("name")} label="name" variant="standard"type="name" /><br/>
                <TextField defaultValue={user.email} id="standard-basic"{...register("email")} label="Email" variant="standard"type="email" /><br/>
                <TextField defaultValue={bookingid} id="standard-basic"{...register("service_ID")} label="ID" variant="standard" /><br/>
                <input type="submit" value="Book This" /><br/>
            </form>
            </Grid>
        </Box>
    );
};

export default Booking;