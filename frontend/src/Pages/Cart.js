import {useContext, useEffect,useState} from 'react'
import { CartContext } from '../Pages/CartContext'

const Cart = () => {
 
    let op=0
  //  local state
    const [products, setProducts] = useState([]); 
const {cart,setCart} =useContext(CartContext);

//const [priceFetched, togglePriceFetched] = useState(false);

useEffect(() => {
    if (!cart.items) {
        return;
    }

   
// console.log(Object.keys(cart.items))
    fetch('/api/products/cart-items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ ids: Object.keys(cart.items)})
    }).then(res => res.json())
    .then(products => {
        setProducts(products);
 
    })
}, [cart]);






const getSum=(productId,proce)=>
{
    const x=getQty(productId)*proce;
op+=x;
    return x;
}
const handleordernow=()=>
{
    window.alert('order placed suucesfullt');

    //reset everthing /e,pty cart and products
    setProducts([]);
    setCart({});
}
const getQty=(productId)=>
{

    return ( cart.items[productId])
}
const increment=(productId)=>
{
    const old=cart.items[productId]

    const _cart={...cart};
    _cart.items[productId]=old+1;
    _cart.totalItems+=1;
    setCart(_cart);
    


}

const decrement=(productId)=>
{
    const old=cart.items[productId]
    if(old==1)
    {
       return ;

    }
    const _cart={...cart};
    _cart.items[productId]=old-1;
   
    
    if(_cart.items[productId]<0)
    {
        _cart.items[productId]=0;

    }
   else
   {
    _cart.totalItems-=1;
   }
   setCart(_cart);

}
    return (
  products.length?
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1 className='my-12 font-bold'>Cart Items</h1>
            <ul>
                {
                    products.map(product => {
                        return (
                            //key is prop
                            <li className="mb-12" key={product._id}>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img className="h-16" src={product.image} alt="" />
                                    <span className="font-bold ml-4 w-48">{ product.name }</span>
                                    {/* <span className="font-bold ml-4 w-48"> $ { product.price }</span> */}
                                </div>
                                
                                <div>
                               
                                <button onClick={() => { decrement(product._id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>

                                <b className="px-4">{ getQty(product._id) }</b>
                                   {/* 
                                   <b className="px-4">{ getQty(product._id) }</b>*/
                                   <button onClick={() => { increment(product._id) }} className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+</button> }
                                </div>
                                { <span>₹ { getSum(product._id, product.price) }</span>
                            /*    <button onClick={() => { handleDelete(product._id) }} className="bg-red-500 px-4 py-2 rounded-full leading-none text-white">Delete</button> */}
                            </div>

                        </li>
                        )
                    })
                }
            </ul>

       
         
           <hr className='my-6'></hr>
            <div className='text-right'> order now:{op}</div>
            <div onClick={handleordernow}className='text-right'>             <button className="bg-red-500 px-4 py-2 rounded-full leading-none">order now</button></div>
        </div>

:
<img src="/images/empty-cart.png"/>
        
    )
}

export default Cart
