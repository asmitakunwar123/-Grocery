import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
   <>
   <div className=' text-center'>
  
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img style={{width:"100%", height:"30rem"}} src='./img/grocery.jpg' />
   <div className="carousel-caption text-center  ">
        <h1  >Welcome to Our Website</h1>
        <p>this is the home page content.</p>
      </div>
    

    </div>  </div>
    </div>
   </>
  );
};

export default Home;
