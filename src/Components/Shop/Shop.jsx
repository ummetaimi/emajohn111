import React, { useEffect, useState } from "react";
import Product from "./../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([])

  useEffect(() => {
    fetch("../../../public/fadata.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);


  const handleAddToCart = (product) =>{
      const newCart = [...carts, product]
      setCart(newCart)
  }

  return (
    <div>
      <h1>We have : {products.length} Products</h1>
      <div className="shop">
        <div className="card">
          {products.map((product) => (
            <Product 
            product={product} 
            key={product.id}
            handleAddToCart={handleAddToCart} />
          ))}
        </div>
        <div className="cart-container">
          <Cart 
          cart={carts}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
