const addToDb = (idDrink) => {
    let drinksCart;
    const storedCart = localStorage.getItem('drinks-cart');
    if (storedCart) {
        drinksCart = JSON.parse(storedCart);
    }
    else {
        drinksCart = {};
    }

    const quantity = drinksCart[idDrink];
    if (quantity) {
        const newQuantity = quantity + 1;
        drinksCart[idDrink] = newQuantity;
    }
    else {
        drinksCart[idDrink] = 1;
    }
    localStorage.setItem('drinks-cart', JSON.stringify(drinksCart));

}

const getStoredDb = () => {
    let drinksCart;
    const storedCart = localStorage.getItem('drinks-cart');
    if (storedCart) {
        drinksCart = JSON.parse(storedCart);
    }
    else {
        drinksCart = {};
    }
    return drinksCart;
}

export {
    addToDb,
    getStoredDb
}