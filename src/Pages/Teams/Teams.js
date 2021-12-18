import  React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import teamsbg from '../../Image/Image/Our-Team-IBN.jpg'
import useAuth from '../../Hoocks/useAuth';
import "./Teams.css"

const Teams = () => {
    const [teams,setteams]=useState([])
    console.log(teams);
    useEffect(()=>{
        fetch('http://localhost:5000/teams')
        .then(res=>res.json())
        .then(data=>setteams(data))
    },[])

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Container sx={{py:5}}>
              <Box>
                  <img width="100%" src={teamsbg} alt="" />
              </Box>
          <Typography sx={{fontWeight:600,textAlign:'center',py:8}} variant="h4">Our Expart <span style={{color:'#e63e73'}}>Teams Members</span></Typography>
            <Grid container spacing={2}>
                {
                    teams.map(team=><Grid item xs={6} md={3} key={team._id}>
                        <Paper elevation={3}className="teamMembercard" sx={{textAlign:'center',position:'relative'}}>
                            <img src={`data:image/png;base64,${team.image}`} alt="teamImage" />
                        
                            <Box className="team">
                            <Typography sx={{fontWeight:500,color:'#e63e73'}} variant="h6">{team.name}</Typography>
                            
                            <Typography sx={{fontSize:'15px',color:'#fff',padding:'5px',fontWeight:600,textTransform:'capitalize'}} variant="h6">{team.profission}</Typography>
                            <Typography sx={{color:'#fff',fontSize:'13px'}} variant="p">$ {team.des}</Typography><br/><br/>
                            <Link  to="/Dashbord/booking"><Button sx={{background:'#ed6b94',color:'#fff',marginBottom:'5px'}}>Book now</Button></Link>
                            </Box>
                        </Paper>
                        </Grid>)
                }
                </Grid>
                <Box sx={{textAlign:'center',py:5}}>
                <Link  to="/explore"><Button sx={{background:'#ed6b94',color:'#fff',margin:'auto'}}>Explore more</Button></Link>
                </Box>
          </Container>
        </Box>
    );
};

export default Teams;