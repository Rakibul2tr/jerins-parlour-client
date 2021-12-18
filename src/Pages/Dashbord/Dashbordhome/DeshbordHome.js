
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Orderlist from '../Orderlist/Orderlist';
import Booking from '../Book/Booking';
import Revew from '../Revews/Revew';
import DHome from './DHome';
import AddMember from '../AddTeamMember/AddMember';
const DeshbordHome = () => {
    const [control,setcontrol]=React.useState('home')
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}md={2}sx={{backgroundColor:'#fff',marginTop:'17px'}}>
            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                <Button onClick={()=>setcontrol('orderlist')}>Order List</Button>
                <Button onClick={()=>setcontrol('booking')}>Book New</Button>
                <Button onClick={()=>setcontrol('revew')}>Revew</Button>
                <Button onClick={()=>setcontrol('addteam')}>Add Team</Button>
            </Box>
          </Grid>
          <Grid item xs={12}md={10}sx={{minHeight:'400px'}}>
            <Box >
                {
                control==="home"&&<DHome></DHome>
                }
                {
                control==="orderlist"&&<Orderlist></Orderlist>
                }
                {
                control==="booking"&&<Booking></Booking>
                }
                {
                control==="revew"&&<Revew></Revew>
                }
                {
                control==="addteam"&&<AddMember></AddMember>
                }
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
};

export default DeshbordHome;