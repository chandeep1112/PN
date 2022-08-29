import { BrowserRouter as Router, Routes ,Route,Link} from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import ProductsPage from './Pages/ProductsPage'
import Navigation from './Components/Navigation';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import { CartContext } from './Pages/CartContext';
import { useEffect, useState } from 'react';
// import { getCart, storeCart } from './helpers';
function App()
{

  const [ cart, setCart ] = useState({});
// Fetch cart from local storage
useEffect(() => {
  const cart=window.localStorage.getItem('cart');
  setCart(JSON.parse(cart));
}, []);


//set items in local storage whenever cart changs
useEffect(() => {
  window.localStorage.setItem('cart',JSON.stringify(cart));
}, [cart]);

    return (

        <>
    
           <Router>
              
              {/* prop ede vich wa jehra oh har function vich jayuga */}
             <CartContext.Provider value={{cart,setCart}}>
           <Navigation/>
           {}
      <Routes>
        <Route path="/" element={<Home exact/>}> </Route>
        
        <Route path="/products" element={<ProductsPage />}> </Route>
        <Route path="/products/:_id"  element={<SingleProduct />}> </Route>
        <Route path="/cart" element={<Cart />}> </Route>
      </Routes>
      </CartContext.Provider>
    </Router>
    
        </>
    )

    }
export default App;