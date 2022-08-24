import React, { useEffect, useState } from 'react';
import Drinks from '../Drinks/Drinks';
import './Home.css'

const Home = () => {
    const [drinks, setDrinks] = useState([]);
    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka   ')
            .then(res => res.json())
            .then(data => setDrinks(data.drinks))
    }, [drinks])

    return (
        <div className='home-container'>
            <div className='shop-container'>
                {
                    drinks.map((drink, index) => <Drinks
                        key={index}
                        drink={drink}
                    ></Drinks>)
                }
            </div>
            <div className='order-container'>

            </div>
        </div>
    );
};

export default Home;