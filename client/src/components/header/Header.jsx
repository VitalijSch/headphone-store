import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";


function Header({ products, setSearchArticle, showAdded }) {
    return (
        <div className="border-bottom shadow px-4 mb-3 fixed-top bg-white">
            <div className="row p-2">
                <div className="col-lg-5 col-md-12 d-flex align-items-center">
                    <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-to-top cursorPointer h-75" src="../images/header/headphoneIcon.svg" alt="headphone icon" />
                    <h1 className="my-2">Headphone-Store</h1>
                </div>
                <SearchBar products={products} setSearchArticle={setSearchArticle} />
                <div className="col-lg-3 offset-lg-1 col-md-4 offset-md-2 p-3 d-flex algin-items-center justify-content-around">
                    <NavLink to={"/shop"}>
                        <img
                            className="cursorPointer headerIcons h-100"
                            src={"../images/header/shop.svg"}
                            alt="shop icon"
                        />
                    </NavLink>
                    <NavLink to={"/shoppingCart"}>
                        <img
                            className="cursorPointer headerIcons h-100"
                            src={"../images/header/shoppingCart.svg"}
                            alt="shopping cart icon"
                        />
                    </NavLink>
                </div>
            </div>
            {showAdded && (
                <div className="alert alert-success mt-2 px-1 py-1 text-center">
                    Artikel wurde hinzugefügt
                </div>
            )}
        </div>
    )
}

export default Header;