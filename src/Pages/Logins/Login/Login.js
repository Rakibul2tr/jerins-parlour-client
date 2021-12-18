import { Alert, Button, Container, Grid, Modal, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Login.css';
import googlelogo from '../../../Image/Icon/Group 573.png';
import fblogo from '../../../Image/Icon/Vector.png'
import useAuth from '../../../Hoocks/useAuth';

const Login = () => {
    const {user,LoginUser,googlelogin}=useAuth()
    const { register, handleSubmit } = useForm();
  const onSubmit = data =>{
    const {email,password}=data;
    LoginUser(email,password);
  }
    return (
        <Box sx={{ flexGrow: 1,py:8 }}>
          <Container>
            <Grid container spacing={2}>
                <p style={{margin:'auto'}}>{user?.email &&<Paper sx={{width:'300px',height:'100px',textAlign:'center'}}><Typography variant='h6' sx={{textAlign:'center',color:'#e63e73',fontWeight:600,py:3}}>Your Login  is Successfull</Typography></Paper>}</p>
                
                <Grid item xs={12} md={8} sx={{margin:'auto'}}>
                <Typography variant='h4' sx={{textAlign:'center',color:'#e63e73',fontWeight:600,py:3}}>Plese Login</Typography>
                    <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
                        <TextField  id="standard-basic"{...register("email")} label="Email" variant="standard"type="email" /><br/>
                        <TextField  id="standard-basic"{...register("password")} label="Password" variant="standard"type="password" /><br/>
                        <input type="submit" value="Login" /><br/>
                        <Link to="/register">
                        <Button sx={{color:'#6eede7'}} size="small">Are you new user ? pleas register.</Button>
                        </Link>
                  </form>
                  <p style={{textAlign:'center'}}>=========Or==========</p>
                  <Box onClick={googlelogin} sx={{textAlign:'center'}}>
                    <Button sx={{width:'300px',height:'50px',border:'1px solid #444',textAlign:'center'}}><img width="30px" sx={{mx:5}} src={googlelogo} alt="" />  Login to Google</Button><br/><br/>


                    <Button sx={{width:'300px',height:'50px',border:'1px solid #444',textAlign:'center'}}><img width="30px" sx={{mx:5}} src={fblogo} alt="" />  Login to Facebook</Button>
                  </Box>
                </Grid>
            </Grid>
          </Container>
        </Box>
    );
};

export default Login;