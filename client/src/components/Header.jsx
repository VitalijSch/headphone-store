import React from "react";

function Header(props) {
    return (
        <div className="border-bottom shadow px-4 mb-3">
            <div className="row p-2">
                <div className="col-10 col-sm-7 col-md-8 col-lg-9 d-flex align-items-center">
                    <img className="h-75" src="../images/headphoneIcon.svg" alt="headphone icon" />
                    <h1 className="my-2">Headphone-Store</h1>
                </div>
                {props.showIcons ?
                    <div className="col-sm-5 col-md-4 col-lg-3 p-3 d-flex algin-items-center justify-content-between">
                        <div onClick={props.shop} className="alert alert-warning mb-0">
                            <img
                                className="cursorPointer h-100"
                                src="../images/shop.svg"
                                alt="shop icon"
                            />
                        </div>
                        <div onClick={props.shoppingCart} className="alert alert-primary mb-0">
                            <img
                                className="cursorPointer h-100"
                                src="../images/shoppingCart.svg"
                                alt="shopping cart icon"
                            />
                        </div>
                        <div onClick={props.logOut} className="alert alert-danger mb-0">
                            <img
                                className="cursorPointer h-100"
                                src="../images/logOut.svg"
                                alt="shopping cart icon"
                            />
                        </div>
                    </div>
                    :
                    <div className="col-2 col-sm-5 col-md-4 col-lg-3 p-3 d-flex algin-items-center justify-content-end">
                        <div onClick={props.logIn} className="alert alert-success mb-0">
                            <img
                                className="cursorPointer h-100"
                                src="../images/logIn.svg"
                                alt="shopping cart icon"
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header;