import React from 'react';
import './Item.css'

const Item = ({ item }) => {
    const { strDrink, strDrinkThumb } = item;

    return (
        <div className='item'>
            <img className='item-img' src={strDrinkThumb} alt="" />
            <p>{strDrink}</p>
        </div>
    );
};

export default Item;