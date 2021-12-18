import {  Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hoocks/useAuth';

const Revew = () => {
    const { register, handleSubmit } = useForm();
    const {user}=useAuth()
    const onSubmit = data =>{
      fetch('http://localhost:5000/testimonials',{
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
                <TextField  defaultValue={user.displayName} id="standard-basic"{...register("name")} label="name" variant="standard"type="name" /><br/>
                <TextField  id="standard-basic"{...register("title")} label="title" variant="standard" type="text"/><br/>
                <TextField  id="standard-basic"{...register("des")} label="des" variant="standard"type="text" /><br/>
                <TextField  defaultValue={user.photoURL} id="standard-basic"{...register("img")} label="image link" variant="standard"type="text" /><br/>
                <input type="submit" value="Give Revew" /><br/>
            </form>
            </Grid>
        </Box>
    );
};

export default Revew;