import { Dashboard } from '@mui/icons-material';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import ContextProvider from './ContextApi/ContextProvider';
import AddMember from './Pages/Dashbord/AddTeamMember/AddMember';
import Booking from './Pages/Dashbord/Book/Booking';
import DeshbordHome from './Pages/Dashbord/Dashbordhome/DeshbordHome';
import DHome from './Pages/Dashbord/Dashbordhome/DHome';
import Explore from './Pages/Explorpage/Explore';
import Contactform from './Pages/Home/ContactForms/Contactform';
import Homemain from './Pages/Home/HomeMain/Homemain';
import Login from './Pages/Logins/Login/Login';
import Register from './Pages/Logins/Register/Register';
import Notfound from './Pages/NotFountd/Notfound';
import Footer from './Pages/Shierd/Footers/Footer';
import Navigetions from './Pages/Shierd/Headers/Navigetions';
import Teams from './Pages/Teams/Teams';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Navigetions></Navigetions>
        <Routes>
        <Route path="/" element={<Homemain />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/Dashbord" element={<DeshbordHome />} />

        <Route path="/Dashbord/booking" element={<DeshbordHome>
          <Booking />
        </DeshbordHome>}> 
        </Route>
        <Route path="/Dashbord/addmember" element={<DeshbordHome>
          <AddMember></AddMember>
        </DeshbordHome>}> 
        </Route>
        <Route path="/Dashbord/booking/:bookingid" element={<Booking />}></Route>
        {/* <Route path="/addmember" element={<AddMember />} /> */}
        <Route path="/contact" element={<Contactform />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/admin" element={<DeshbordHome />} /> */}
        <Route path="*" element={<Notfound />} />
          
          {/* <Route exact path="/explore">
            <Explore></Explore>
          </Route> */}
          {/* <Route exact path="/teams">
            <Teams></Teams>
          </Route> */}
          {/* <Route exact path="/deshbord">
            <DHome></DHome>
          </Route> */}
          {/* <Route exact path="/login">
            <Login></Login>
          </Route> */}
          {/* <Route exact path="/register">
            <Register></Register>
          </Route> */}
          {/* <Route exact path="/admin">
            <DeshbordHome></DeshbordHome>
          </Route> */}
          {/* <Route  path="*">
            <Notfound></Notfound>
          </Route> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
