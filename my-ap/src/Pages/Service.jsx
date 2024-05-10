import React, { useEffect, useState } from 'react';

import Data from './Data';
import "./Services.css"
import Carts from '../Carts';
import { CartProvider } from 'react-use-cart';

import {FaSearch} from "react-icons/fa"
import ServicesCard from './ServicesCard';
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

 const getUsers= async()=>{
  const response =await fetch("https://jsonplaceholder.typicode.com/posts")
  const Data =await response.json();
  console.log(Data)
 }
 useEffect(()=>{
  getUsers();
 },[])

  return (
    <>
    <div className='center'>
      <div className="input-wrapper r">
      <input
        placeholder="Type to search..."
    onChange={(event) => {setSearchTerm(event.target.value);
          }}  />
            <FaSearch id="search-icon" />
    </div>
    </div>
<CartProvider>
      <h1 className='text-center mt-6 '> OurProducts</h1>
      <section className='py-4 container1  '>
      <div className='row-justify-content-center d-flex align-content-start flex-wrap  '>
      {
            Data.filter((items) => {
                if(searchTerm == ""){
                  return items;
                }else if(items.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return items;
                }
              })
      .map((items, index)=>{

        return(
              <ServicesCard
                key={index}
              img={items.img}
              imgName={items.imgscr}

              title={items.title}
              description={items. des}
              price={items.price}
              items ={items}
        //        {...items}
        // key={index}


          />);

      })}


      </div>

      </section>


      <Carts/>
         </CartProvider>

    </>

  );
};

export default Home;

