import React from "react";
import SearchBar from "./SearchBar";


function Header({ shop, shoppingCart, logOut, showIcons }) {
    return (
        <div className="border-bottom shadow px-4 mb-3 fixed-top bg-white">
            <div className="row p-2">
                <div className="col-lg-5 col-md-12 d-flex align-items-center">
                    <img onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="scroll-to-top cursorPointer h-75" src="../images/headphoneIcon.svg" alt="headphone icon" />
                    <h1 className="my-2">Headphone-Store</h1>
                </div>
                {showIcons && (
                    <>
                        <SearchBar />
                        <div className="col-lg-3 offset-lg-1 col-md-4 offset-md-2 col-sm-5 col-7 p-3 d-flex algin-items-center justify-content-between">
                            <button onClick={shop} className="btn btn-warning mb-0">
                                <img
                                    className="cursorPointer h-100"
                                    src={"../images/shop.svg"}
                                    alt="shop icon"
                                />
                            </button>
                            <button onClick={shoppingCart} className="btn btn-primary mb-0">
                                <img
                                    className="cursorPointer h-100"
                                    src={"../images/shoppingCart.svg"}
                                    alt="shopping cart icon"
                                />
                            </button>
                            <button onClick={logOut} className="btn btn-danger mb-0">
                                <img
                                    className="cursorPointer h-100"
                                    src={"../images/logOut.svg"}
                                    alt="log out icon"
                                />
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Header;