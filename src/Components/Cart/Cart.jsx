import React from 'react';
import './Cart.css';
import SelectItem from '../SelectItem/SelectItem';

const Cart = (props) => {
    const { cart } = props;

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 10;
    const grandTotal = total + shipping + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {totalQuantity}</h5>
            <br />
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            <h1>This is selected products</h1>
            {
                cart.map(item => <SelectItem
                key={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                />)
            }

        </div>
    );
};

export default Cart;