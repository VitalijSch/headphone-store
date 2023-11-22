import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../styles/styles.css"
import Axios from "axios";
import Header from "./Header";
import LogIn from "./LogIn";
import Carousel from "./Carousel";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";

function App() {
    const [article, setArticle] = useState([]);
    const [addToShoppingCart, setAddToShoppingCart] = useState([]);

    const [showLogIn, setShowLogIn] = useState(false);
    const [showShop, setShowShop] = useState(false);
    const [showShoppingCart, setShowShoppingCart] = useState(false);
    const [showIcons, setShowIcons] = useState(false);

    useEffect(() => {
        viewChange(true, false, false, false);
    }, []);

    useEffect(() => {
        const article = async () => {
            try {
                const response = await Axios.get("http://localhost:3001/article");
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };
        article();
    }, [article]);

    const viewChange = (showLogIn, showShop, showShoppingCart, showIcons) => {
        setShowLogIn(showLogIn);
        setShowShop(showShop);
        setShowShoppingCart(showShoppingCart);
        setShowIcons(showIcons);
    }

    const articleAddShoppingCart = (id, title, price) => {
        const existingProductIndex = addToShoppingCart.findIndex(product => product.id === id);

        if (existingProductIndex !== -1) {
            const updatedCart = addToShoppingCart.map((product, index) => {
                if (index === existingProductIndex) {
                    const newAmount = product.amount + 1;
                    return {
                        ...product,
                        id,
                        amount: newAmount,
                        price,
                        totalPrice: newAmount * price,
                    }
                }
                return product;
            })
            setAddToShoppingCart(updatedCart)
        } else {
            const newProduct = {
                id,
                amount: 1,
                title,
                price,
                totalPrice: price,
            }
            setAddToShoppingCart(prevProducts => [...prevProducts, newProduct]);
        }
    }

    return (
        <div className="vh-100">
            <Header
                logIn={() => { viewChange(true, false, false, false) }}
                shop={() => { viewChange(false, true, false, true) }}
                shoppingCart={() => { viewChange(false, false, true, true) }}
                logOut={() => { viewChange(true, false, false, false) }}
                showIcons={showIcons}
            />
            {showShoppingCart &&
                <div className="container">
                    <h2 className="mt-5 mb-3">Warenkorb</h2>
                    <div className="table-responsive small">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr className="text-center">
                                    <th>Menge</th>
                                    <th>Artikel</th>
                                    <th>Preis</th>
                                    <th>Gesamtpreis</th>
                                </tr>
                            </thead>
                            <tbody>
                                {addToShoppingCart.map(product => (
                                    <ShoppingCart
                                        key={product.id}
                                        amount={product.amount}
                                        title={product.title}
                                        price={product.price}
                                        totalPrice={product.totalPrice}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
            {showShop &&
                <>
                    < Carousel />
                    <div className="container">
                        <div className="row g-4 d-flex justify-content-center">
                            {article.map(product => (
                                <ProductCard
                                    key={product.item_id}
                                    id={product.item_id}
                                    title={product.title}
                                    text={product.text}
                                    imgData={product.img_data}
                                    currentPrice={product.current_price}
                                    oldPrice={product.old_price}
                                    onAdd={articleAddShoppingCart}
                                />
                            ))}
                        </div>
                    </div>
                </>
            }
            {showLogIn &&
                <LogIn
                    logIn={() => { viewChange(false, true, false, true) }}
                />
            }
            <img
                className="scroll-to-top backToTopImg cursorPointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                src="./images/backToTop.svg"
                alt="back to top icon"
            />
        </div >
    )
}

export default App;