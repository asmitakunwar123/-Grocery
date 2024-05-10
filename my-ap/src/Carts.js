import React from 'react'
import "./Cart.css"
import { CartProvider, useCart } from 'react-use-cart'
import { Link } from 'react-router-dom';

const Carts =() =>{
  const {
    isEmpty,totalUniqueItems,items,totalItems,updateItemQuantity,removeItem, emptyCart,
cartTotal  } = useCart();

  if(isEmpty) 
  return
  <h1 className='text-center'> Your Cart is Empty</h1>
  return (
   
  <>

 <div className ="py-4 container1">
 <div className='row-justify-content-center'>
 <div className='col-11'>
 <h2> Cart ({totalUniqueItems}) total Items:({totalItems})</h2>
 

 <table className='table table-light table-hover m-0  bg-black' >  
    <tbody >
    {items.map((item ,index)=>{ 
        return(
            <tr key={index}> 
            <td>
            <img src={item.img} style={{height:"3rem"}} />

            </td>
            <td className='m-0 '> <h5> {item.title}</h5> </td>
            <td className='m-0 '><h5>{item.price}</h5> </td>
            <td className='m-0 '><h5 > Quantity {(item.quantity)}</h5></td>
            <td> 
            <button className='btn btn-dark  w-25 m-1 '  onClick={()=> updateItemQuantity (item.id ,item.quantity +1 )}>+</button>
            <button className='btn btn-dark w-25 m-1' onClick={()=> updateItemQuantity (item.id ,item.quantity -1)}>-</button>
            <button className='btn btn-danger w-25 ' onClick={()=> removeItem(item.id )}> Delete</button>
            </td>
            </tr>

        )

    } ) }
    </tbody>
 </table>
 </div>
<div className='  col-auto  text-right' >
    <h2>Total Price: Rs {cartTotal}</h2>
</div>

<div className='col-auto' >
    <button className=' btn btn-danger w-25 text-center m-1' onClick={()=> emptyCart()}>
        Clear Cart
    </button>
    <Link to= "/Payment">
    <button className='btn btn-primary w-25'>
      Buy Now
    </button></Link> 
</div>
</div>
 </div>
{/* 
 </div> */}

  </>
  )
}


export default Carts