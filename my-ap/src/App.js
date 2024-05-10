import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from './Navbar/Navbar';
import Home from './Components/Home';
import Service from './Pages/Service'
import { Route,Routes,} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
// import Footer  from './Components/Footer'
import Card from './Card';
import Payment from './Components/Payment';
import About from './Components/About';
import Contact from './Components/Contact';






const App =() =>{
  return (
 <>

 <Navbar/>

  
   
  <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/> 
  <Route path='/Contact' element={<Contact/>}/>
  <Route path='/Service' element={<Service/>}/>
  <Route path='/Signup' element={<Signup/>}/>
  <Route path='/Login' element={<Login/>}/>
  <Route path='/payment' element={<Payment/>}/>
  <Route path='/Card' element={<Card/>}/> 
  {/* <Route path='/Appss' element={<Appss/>}/>
   */}

 
</Routes>


{/* <Footer></Footer> */}
 </>
  )
}

export default App