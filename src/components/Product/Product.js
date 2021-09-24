import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './product.css'
import Rating from 'react-rating';

const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock, star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="product">
            <div>
            <img src={img} alt="" srcset="" />
            </div>
           <div>
           <h4 className="product-name">{name}</h4>
            <p><small>by : {seller}</small></p>
            <p>Price : {price}</p>
            <p><small>Stock : {stock}</small></p>
            <Rating
            initialRating={star}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            ></Rating> 
            <br />
            <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">{cartIcon}Add to cart</button>
           </div>
        </div>
    );
};

export default Product;<h2>hello from</h2>