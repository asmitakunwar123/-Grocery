import React from 'react';

import { Route,Routes,} from 'react-router-dom';
import Products from './Products';

import Apps from './Apps';
import Customer from './Customer';



const Appss =() =>{
  return (
 <>


<Apps/>
  
   
  <Routes>
    <Route path='/Products' element={<Products/>}/>
    <Route path='/Customer' element={<Customer/>}/>

 
</Routes>




 </>
  )
}

export default Appss