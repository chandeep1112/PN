import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../Pages/CartContext'

const Product = (props) => {
    // console.log(props);


const [isAdding,setIsAdding]=useState(false);

    const {cart,setCart}=useContext(CartContext);
    const {product} = props;





//

    const addToCart=(event,product)=>
    {
        // spread operator to clone cart as they are passed by reference 
        let _cart={...cart}; 
        event.preventDefault();
if(!_cart.items)
{

    //make it empty object 
    _cart.items={}

}
if(_cart.items[product._id])
{

    _cart.items[product._id]=_cart.items[product._id]+1;

}
else
{    _cart.items[product._id]=1;

}
  if(!_cart.totalItems)
  {
    _cart.totalItems=0;
  }
_cart.totalItems+=1;


setCart(_cart);
setIsAdding(true);
setTimeout(() => {
    setIsAdding(false);
}, 400);
        console.log(product);
    }
    return (

        <Link to={`/products/${product._id}`}>
        <div>
             <div>
            
                  <img src={props.product.image}   alt="pizza" />

                  <div className="text-center">
                   <h2 className="text-lg font-bold py-2">{props.product.name} </h2>
                   <span className="bg-gray-200 py-1 rounded-full  text-sm px-4 "> {props.product.size} </span>
                   </div>


                   <div className="flex justify-between items-center mt-4">
                   <span> ₹ {props.product.price}  </span>
                   <button disabled={isAdding}  onClick={(e)=>{addToCart(e,product)}}className={`${isAdding ? 'bg-green-500' : 'bg-yellow-500'} font-bold py-1 px-4 rounded-full `}> ADD{isAdding ? 'ED' : ''} </button>
                     </div>  

                  </div> 
        </div>
        </Link>
    )
}

export default Product
