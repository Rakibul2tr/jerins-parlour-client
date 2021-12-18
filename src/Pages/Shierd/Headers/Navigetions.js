// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Container } from '@mui/material';
// import { Link } from 'react-router-dom';
// import logo from '../../../Image/Group 33092.png'
// import useAuth from '../../../Hoocks/useAuth';

// const Navigetions = () => {
//     const {user,logOut}=useAuth()
//     console.log(user);
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <AppBar position="static"sx={{backgroundColor:'#fff'}}>
//             <Container>
//             <Toolbar>
//                 <Typography variant="h6" component="div" sx={{ flexGrow: 1,color:'white' }}>
//                 <img width="150px" src={logo} alt="" />
//                 </Typography>
//                 <Box className="menu">
//                 <Link to="/"><Button color="inherit">Home</Button></Link>
//                 <Link to="/portfolio"><Button color="inherit">Our portfolio</Button></Link>
//                 <Link to="/login"><Button color="inherit">Our Team</Button></Link>
//                 <Link to="/login"><Button color="inherit">Contact us</Button></Link>
//                 <Link to="/admin"><Button color="inherit">Admin</Button></Link>
//                 {
//                 user.email?<><Link to="/login"><Button onClick={logOut} color="inherit">Log Out</Button></Link><span style={{color:'tomato'}}>{user?.displayName}</span></>:<Link to="/login"><Button color="inherit">Login</Button></Link>
//                 }
//                 </Box>
//                 <IconButton
//                 size="large"
//                 edge="end"
//                 color="inherit"
                
//                 aria-label="menu"
//                 sx={{ mr: 1 ,background:'#e63e73'}}
//                 >
//                  <MenuIcon />
//                 </IconButton>
//             </Toolbar>
//             </Container>
//             </AppBar>
//         </Box>
        
//     );
// };

// export default Navigetions;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hoocks/useAuth';
import logo from '../../../Image/Group 33092.png'



const Navigetions = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const {user,logOut}=useAuth()
      console.log(user);
  return (
    <AppBar position="static"sx={{backgroundColor:'#fff'}}>
      <Container >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <img width="150px" src={logo} alt="" />
            
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color:'#000'}} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                    <Box className="smaldevicemenu">
                        <Link to="/"><Button color="inherit">Home</Button></Link>
                        <Link to="/explore"><Button color="inherit">Explore</Button></Link>
                        <Link to="/login"><Button color="inherit">Our Team</Button></Link>
                        <Link to="/login"><Button color="inherit">Contact us</Button></Link>
                        
                    </Box>
                </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img width="150px" src={logo} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:'center' }}>
    
            <Box>
                <Link to="/"><Button color="inherit">Home</Button></Link>
                <Link to="/explore"><Button color="inherit">Explore</Button></Link>
                <Link to="/teams"><Button color="inherit">Our Team</Button></Link>
                <Link to="/contact"><Button color="inherit">Contact us</Button></Link>
             </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user.photoURL} />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
            <MenuItem  onClick={handleCloseNavMenu}>
            <Box className="smaldevicemenu">
                <Link to="/Dashbord"><Button color="inherit">Dashbord</Button></Link>
                {
                user.email?<><Link to="/login"><Button onClick={logOut} color="inherit">Log Out</Button></Link><span style={{color:'tomato'}}>{user?.displayName}</span></>:<Link to="/login"><Button color="inherit">Login</Button></Link>
                }
             </Box>
            </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigetions;
