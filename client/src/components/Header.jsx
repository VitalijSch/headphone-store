import React from "react";

function Header() {
    return (
        <>
            <div className="border-bottom shadow py-2 px-4">
                <div className="row">
                    <div className="col-sm-7 col-md-8 col-lg-9 d-flex align-items-center">
                        <h1>Headphone-Store</h1>
                    </div>
                    <div className="col-sm-5 col-md-4 col-lg-3 p-3 d-flex algin-items-center justify-content-between">
                        <button className="btn btn-warning">Anmelden</button>
                        <img className="h-75 cursorPointer" src="../images/shop.svg" alt="shop icon" />
                        <img className="h-75 cursorPointer" src="../images/shoppingCart.svg" alt="shopping cart icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;