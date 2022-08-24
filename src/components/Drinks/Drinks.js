import React from 'react';
import './Drinks.css'

const Drinks = ({ drink, addToCart }) => {
    const { strDrink, strDrinkThumb, strGlass } = drink;


    return (
        <div className='info'>
            <img className='img-container' src={strDrinkThumb} alt="" />
            <p>Name : {strDrink}</p>
            <p>Category : {strGlass}</p>
            <button onClick={() => addToCart(drink)}>Add To Cart</button>
        </div>
    );
};

export default Drinks;