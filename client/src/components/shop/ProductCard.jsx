import React from "react";

function ProductCard({ id, title, text, imageNumber, currentPrice, oldPrice, onAdd }) {
    return (
        <div className="col-10 col-sm-8 col-md-6 col-lg-4">
            <div className="card p-0 h-100">
                <img
                    src={`../images/shop/headphone${imageNumber}.jpg`}
                    className="card-img-top border-bottom shadow"
                    alt="headphone"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <div>
                        <strong className="card-text text-danger fs-5">{`${currentPrice} €`}</strong>
                        <s className="card-text text-black-50 mx-2">{`${oldPrice} €`}</s>
                    </div>
                    <button onClick={() => onAdd(id, title, currentPrice, 1)} className="btn btn-warning mt-2">
                        <img
                            style={{ height: "25px", width: "25px" }}
                            className="cursorPointer"
                            src="../images/shop/add.svg"
                            alt="add button"
                        />
                    </button>
                </div>
            </div>
        </div >
    );
}

export default ProductCard;