import { Alert, Button, Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import '../Login/Login.css';
import googlelogo from '../../../Image/Icon/Group 573.png';
import fblogo from '../../../Image/Icon/Vector.png'
import useAuth from '../../../Hoocks/useAuth';

const Register = () => {
    const {user,registerUser,googlelogin}=useAuth()
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    if(user){
        alert('Conform Your register')
    }
      const {name,email,password}=data;
      registerUser(email,password,name);
      
  }
    return (
        <Box sx={{py:8}}>
          <Container spacing={2}>
          <p style={{margin:'auto'}}>{user?.email &&<Paper sx={{width:'300px',height:'100px',textAlign:'center'}}><Typography variant='h6' sx={{textAlign:'center',color:'#e63e73',fontWeight:600,py:3}}>Your Acount Created is Successfull</Typography></Paper>}</p>
            <Grid item xs={12} >
            <Typography variant='h4' sx={{textAlign:'center',color:'#e63e73',fontWeight:600,py:3}}>Create An Acount</Typography>
                <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
                    <TextField  id="standard-basic"{...register("name")} label="Full Name" variant="standard"type="text" /><br/>
                    <TextField  id="standard-basic"{...register("email")} label="Email" variant="standard"type="email" /><br/>
                    <TextField  id="standard-basic"{...register("password")} label="Password" variant="standard"type="password" /><br/>
                    <TextField  id="standard-basic"{...register("password2")} label="Conform Password" variant="standard"type="password" /><br/>
                    <input type="submit" value="Register" /><br/>
                    <Link to="/login">
                    <Button sx={{color:'#6eede7'}} size="small">Are you Old user ? pleas Login.</Button>
                    </Link>
                </form>
                <p style={{textAlign:'center'}}>=========Or==========</p>
                  <Box sx={{textAlign:'center'}}>
                    <Button onClick={googlelogin} sx={{width:'300px',height:'50px',border:'1px solid #444',textAlign:'center'}}><img width="30px" sx={{mx:5}} src={googlelogo} alt="" />  Login to Google</Button><br/><br/>


                    <Button sx={{width:'300px',height:'50px',border:'1px solid #444',textAlign:'center'}}><img width="30px" sx={{mx:5}} src={fblogo} alt="" />  Login to Facebook</Button>
                  </Box>
            </Grid>
          </Container>
        </Box>
    );
};

export default Register;