import React from 'react';
import './product.css'

const Product = (props) => {
    const { name, price, stock, img } = props.product;
    
    console.log(props)
    return (
        <div>
            <div className="cardText">
                <img src={img} alt="" />
                <h1>{name}</h1>
                <h3>Price : {price}</h3>
                <p>We have only {stock} pieces</p>
                <button onClick={() => props.handleAddToCart(props.product)}>Add to Cart</button>
                
            </div>
        </div>
    );
};

export default Product;