import React, { useEffect, useState } from 'react';
import Drinks from '../Drinks/Drinks';
import './Home.css'
import Item from './Item/Item';

const Home = () => {
    const [drinks, setDrinks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka   ')
            .then(res => res.json())
            .then(data => setDrinks(data.drinks))
    }, [drinks]);
    const addToCart = (selected) => {
        const newCart = [...cart, selected];
        setCart(newCart);
    }

    return (
        <div className='container'>
            <dir className='home-container'>
                <div className='shop-container'>
                    {
                        drinks.map((drink, index) => <Drinks
                            key={index}
                            drink={drink}
                            addToCart={addToCart}
                        ></Drinks>)
                    }
                </div>
                <div className='order-container'>
                    <h2>Cart Item : {cart.length}</h2>
                    {
                        cart.map((item, index) => <Item
                            key={index}
                            item={item}
                        ></Item>)
                    }
                    <button>Order Now</button>
                </div>
            </dir>
        </div>
    );
};

export default Home;