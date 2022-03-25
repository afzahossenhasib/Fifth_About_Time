import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Product.css'

const Product = () => {

    const [product, setProduct] = useState ([]);
    const [cart, setCart] = useState([]);

    useEffect ( () => {
        fetch ('data.json')
        .then (res => res.json())
        .then (data => setProduct(data))
    } , []) 

    const addToCart = (product) => {
        console.log (product)
        const newCart = [...cart, product]
        setCart(newCart);
    }

    return (
        <div className='container'>
            <div className="product-container">
                {
                    product.map(product => <Products 
                        key={product.id}
                        product= {product}
                        addToCart = {addToCart}
                        ></Products>)
                }
            </div>

            <div className="cart-container">
                <h2>This Is Cart</h2>
                <h1>Name: {cart.length} </h1>
            </div>
        </div>
    );
};

export default Product;