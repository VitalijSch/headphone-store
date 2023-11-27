import React, { useEffect, useState } from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/styles.css";
import Header from "./header/Header";
import LogIn from "./logIn/LogIn";
import Shop from "./shop/Shop";
import ShoppingCart from "./shoppingCart/ShoppingCart";

function App() {
    // State-Hooks für verschiedene Teile der App
    const [article, setArticle] = useState([]);
    const [searchArticle, setSearchArticle] = useState([]);
    const [shoppingCart, setShoppingCart] = useState([]);
    const [showLogIn, setShowLogIn] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

    // Daten von der Datenbank abrufen und View initialisieren
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("http://localhost:3001/article");
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching article data:", error);
            }
        };

        fetchData();
        setView(true, false, false, false);
    }, []);

    // Funktion, um den View-Zustand zu setzen
    const setView = (showLogIn, showShop, showShoppingCart, showIcons) => {
        setShowLogIn(showLogIn);
        setShowShop(showShop);
        setShowShoppingCart(showShoppingCart);
        setShowIcons(showIcons);
    }

    // Event-Handler für verschiedene Ansichten
    const handleShop = () => setView(false, true, false, true);
    const handleShoppingCart = () => setView(false, false, true, true);
    const handleLogOut = () => setView(true, false, false, false);

    // Funktion zum Hinzufügen von Artikeln zum Warenkorb
    const addToShoppingCart = (id, title, price, amount) => {
        const existingProductIndex = shoppingCart.findIndex(product => product.id === id);

        if (existingProductIndex !== -1) {
            // Produkt existiert bereits im Warenkorb, aktualisiere die Menge
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
            // Produkt ist neu im Warenkorb
            const newProduct = {
                id,
                amount: 1,
                title,
                price,
                totalPrice: price,
            }
            setShoppingCart(prevProducts => [...prevProducts, newProduct]);
        }
    }

    // Funktion zum Löschen von Artikeln aus dem Warenkorb
    function articleDeleteFromShoppingCart(product) {
        const updatedCart = shoppingCart.filter(article => article.id !== product);
        setShoppingCart(updatedCart);
    }

    return (
        <div className="vh-100">
            {/* Header-Komponente mit Event-Handlern und Icons */}
            <Header
                shop={handleShop}
                shoppingCart={handleShoppingCart}
                logOut={handleLogOut}
                showIcons={showIcons}
                article={article}
                setSearchArticle={setSearchArticle}
            />

            {/* Anzeige des Warenkorbs, wenn showShoppingCart true ist */}
            {showShoppingCart &&
                <ShoppingCart
                    onAdd={addToShoppingCart}
                    onDelete={articleDeleteFromShoppingCart}
                    shoppingCart={shoppingCart}
                />}

            {/* Anzeige des Shops, wenn showShop true ist */}
            {showShop &&
                <Shop
                    onAdd={addToShoppingCart}
                    searchArticle={searchArticle.length === 0 ? article : searchArticle}
                />
            }

            {/* Anzeige des Login-Fensters, wenn showLogIn true ist */}
            {showLogIn &&
                <LogIn
                    shop={handleShop}
                />
            }
        </div>
    )
}

export default App;