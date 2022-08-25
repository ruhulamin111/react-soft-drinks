import React, { useEffect, useState } from 'react';
import Drinks from '../Drinks/Drinks';
import { addToDb, getStoredDb } from '../Utilites/Db';
import './Home.css'
import Item from './Item/Item';

const Home = () => {
    const [drinks, setDrinks] = useState([]);
    const [cart, setCart] = useState([]);
    const [random, setRandom] = useState({});

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka')
            .then(res => res.json())
            .then(data => setDrinks(data.drinks))
    }, [drinks]);


    useEffect(() => {
        if (drinks.length) {
            const storedProductIds = getStoredDb();

            const previousCart = [];

            for (const idDrink in storedProductIds) {
                const foundProduct = drinks.find((product) => product.idDrink === idDrink);
                if (foundProduct) {
                    const quantity = storedProductIds[idDrink];
                    foundProduct.quantity = quantity;
                    previousCart.push(foundProduct);
                }
            }
            setCart(previousCart);
        }
    }, [drinks]);


    const addToCart = (selected) => {
        // const newCart = [...cart, selected];
        // setCart(newCart);

        let newCart = [];
        const exits = cart.find(product => product.idDrink === selected.idDrink);
        if (!exits) {
            selected.quantity = 1
            newCart = [...cart, selected]
        }
        else {
            const rest = cart.filter(product => product.idDrink !== selected.idDrink);
            exits.quantity = exits.quantity + 1;
            newCart = [...rest, exits];
        }
        setCart(newCart);
        addToDb(selected.idDrink)
    }

    const handleRandom = () => {
        const randomItem = Math.floor(Math.random() * cart.length);
        const item = cart[randomItem];
        setRandom(item);
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
                            random={random}
                        ></Item>)
                    }
                    <button onClick={handleRandom}>Order Now</button>
                    {<div className='item'>
                        <img className='item-img' src={random.strDrinkThumb} alt="" />
                        <p>{random.strDrink}</p>
                    </div>

                    }
                </div>
            </dir>
        </div>
    );
};

export default Home;