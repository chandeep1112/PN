import React from 'react'
import Product from './Product'
import {useState ,useEffect,useContext} from 'react'
import { CartContext } from '../Pages/CartContext';
import axios from 'axios'
const Products = () => {
const {name}=useContext(CartContext);
const[products,setproducts]=useState([]);



// useEffect(()=>
// {

//     axios.get('/api/products')
//     .then(response => response.json())
//          .then(products => {
//            setproducts(products);
//           });
// },[]);
useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(products => {

     setproducts(products);
    });
 }, []);


    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">PRODUCTS {name}</h1>
            <div className="grid grid-cols-5 my-8 gap-24">


         {
             products.map(product=><Product key={product._id} product={product}/>)
         }
              
                  
            </div>

            
        </div>

    )
}

export default Products
