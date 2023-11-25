import React from "react";

function Header({ logIn, shop, shoppingCart, logOut, showIcons }) {
    return (
        <div className="border-bottom shadow px-4 mb-3 fixed-top bg-white">
            <div className="row p-2">
                <div className="col-lg-5 col-md-12 d-flex align-items-center">
                    <img className="h-75" src="../images/headphoneIcon.svg" alt="headphone icon" />
                    <h1 className="my-2">Headphone-Store</h1>
                </div>
                {showIcons ? (
                    <>
                        <div className="col-lg-3 offset-lg-0 col-md-6 d-flex align-items-center">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Produkt..." aria-label="Search" aria-describedby="button-addon" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon">Suchen</button>
                            </div>
                        </div>
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
                ) : (
                    // Icon für Anmeldung
                    <div className="col-2 col-sm-5 col-md-4 col-lg-3 p-3 d-flex algin-items-center justify-content-end">
                        <button onClick={logIn} className="btn btn-success mb-0">
                            <img
                                className="cursorPointer h-100"
                                src={"../images/logIn.svg"}
                                alt="log in icon"
                            />
                        </button>
                    </div>

                )}
            </div>
        </div>
    )
}

export default Header;