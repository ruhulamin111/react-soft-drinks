import React from 'react';
import './Drinks.css'

const Drinks = ({ drink }) => {
    const { strDrink, strDrinkThumb, strGlass, strInstructionsDE } = drink;


    return (
        <div className='info'>
            <img className='img-container' src={strDrinkThumb} alt="" />
            <p>Name : {strDrink}</p>
            <p>Category : {strGlass}</p>
            <button>Add To Cart</button>
        </div>
    );
};

export default Drinks;