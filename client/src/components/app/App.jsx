import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../app/App.css";
import products from "../products/products.js"
import Header from "../header/Header";
import Shop from "../shop/Shop";
import ShoppingCart from "../shoppingCart/ShoppingCart";

function App() {
    const [searchArticle, setSearchArticle] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [showAdded, setShowAdded] = useState(false);

    const addToShoppingCart = (id, title, price, amount) => {
        const existingProductIndex = shoppingCart.findIndex(product => product.id === id);

        if (existingProductIndex !== -1) {
            const updatedCart = shoppingCart.map((product, index) => {
                if (index === existingProductIndex) {
                    return {
                        ...product,
                        id,
                        amount,
                        price,
                        totalPrice: amount * price,
                    }
                }
                return product;
            })
            setShoppingCart(updatedCart)
        } else {
            const newProduct = {
                id,
                amount: 1,
                title,
                price,
                totalPrice: price,
            }
            setShoppingCart(prevProducts => [...prevProducts, newProduct]);
            showAddedAlert();
        }
    }

    const showAddedAlert = () => {
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 2000);
    };

    function articleDeleteFromShoppingCart(product) {
        const updatedCart = shoppingCart.filter(article => article.id !== product);
        setShoppingCart(updatedCart);
    }

    return (
        <div className="vh-100">
            <Header
                products={products}
                setSearchArticle={setSearchArticle}
                showAdded={showAdded}
            />
            <Routes>
                <Route path="/shoppingCart" element={
                    <ShoppingCart
                        onAdd={addToShoppingCart}
                        onDelete={articleDeleteFromShoppingCart}
                        shoppingCart={shoppingCart}
                    />}
                />
                <Route path="/shop" element={
                    <Shop
                        onAdd={addToShoppingCart}
                        searchArticle={searchArticle.length === 0 ? products : searchArticle}
                    />}
                />
            </Routes>
        </div>
    )
}

export default App;