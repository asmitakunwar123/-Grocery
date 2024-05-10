
import React from 'react';
import { useCart } from 'react-use-cart';
import './Services.css';
const ServicesCard= (props) => {
const { addItem }= useCart()
  return (


    <div className ="card p-o overflow-hidden h-100 shadow">
      <img src={props.img} alt={props.imgName} className="card-image" />
      <div className="card-body  text-center ">
        <h2 className="card-title">{props.title}</h2>
        <h5 className="card-price"> Rs {props.price}</h5>
        <p className="card-text">{props.description}</p>

        <button className=" btn-btn  btn btn-success m-2" onClick={ (n)=>addItem (props.items)}> Add to Cart </button>


        </div></div>




  );
};



export default ServicesCard;