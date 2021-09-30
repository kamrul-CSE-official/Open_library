import './App.css';
import { useEffect, useState } from 'react';
import Shop from './Shop/Shop';
import Cart from './Cart/Cart';
import Header from './Header';
import SearchBar from './SearchBar/SearchBar';

function App() {
  // https://kamrul-h-manzur.github.io/jsonapi/tools.JSON
    
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([])

  useEffect(() =>{
    fetch('https://kamrul-h-manzur.github.io/jsonapi/tools.JSON')
  .then(res => res.json())
  .then(data => { 
    setProducts(data);
    setDisplayProducts(data);
  
  })
  }, [])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
}
  
  return (
    <div>      
      <Header></Header>
      <SearchBar/>
      <div className="shop-container">
      <div>
      {        
          <Shop 
              product={products}
              handleAddToCart={handleAddToCart}
          ></Shop>  
      }
      </div>
      <div className="product">
          <Cart cart={cart}></Cart>
      </div>
      
    </div>
      </div>
  );
}

export default App;
