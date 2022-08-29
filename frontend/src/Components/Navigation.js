import React from 'react'
import { Link } from 'react-router-dom'
import {useContext} from 'react'
import {CartContext} from '../Pages/CartContext'
const cartStyle = {
    background: '#F59E0D',
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px'
  }
export default function Navigation() {

    // to print total items currenlty
    const {cart,setCart}=useContext(CartContext);
    return (
        <>
        <nav className="">
          <div className='flex justify-between py-12 px-23  '>
              
              <div>
              <Link  to="/"> 
              <img  className=" ml-10 p-23 py-23" src="/images/logo.png" alt="logo" style={{height:45}}/>
              </Link>
              </div>

              <div>
              <ul className='flex py-23'> 
                    <li className="ml-6 font-bold ">  <Link to="/">Home</Link>   </li>
                    <li className="ml-6 font-bold  ">  <Link to="/products">Products</Link>   </li>
                    <li className="ml-6 mr-10" >    <Link to="/cart">
                                <div style={cartStyle}  >
                                    <span className="text-black">{cart.totalItems}</span>
                                    <img className="ml-2" src="/images/cart.png" alt="cart-icon" />
                                </div>
                            </Link>
                     </li>
                  </ul>
                  </div>
         </div>
    </nav>
        </>
    )
}
