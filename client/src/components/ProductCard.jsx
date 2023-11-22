import React, { useState } from "react";

function ProductCard(props) {
    const [showAdded, setShowAdded] = useState(true);

    const handleClickAdd = () => {
        props.onAdd(props.id, props.title, props.currentPrice)

        setShowAdded(false);
        setTimeout(() => {
            setShowAdded(true);
        }, 2000);
    };

    return (
        <div className="col-11 col-md-6 col-lg-4">
            <div className="card p-0 h-100">
                <img
                    src={`/images/headphone${props.imgData}.jpg`}
                    className="card-img-top border-bottom shadow"
                    alt="headphone"
                />
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <div>
                        <strong className="card-text text-danger fs-5">{`${props.currentPrice} €`}</strong>
                        <s className="card-text text-black-50 mx-2">{`${props.oldPrice} €`}</s>
                    </div>
                    {showAdded ?
                        <button onClick={handleClickAdd} className="btn btn-warning mt-2">
                            <img
                                style={{ height: "25px", width: "25px" }}
                                className="cursorPointer"
                                src="/images/add.svg"
                                alt="add button"
                            />
                        </button>
                        :
                        <div className="alert alert-success mt-2 px-1 py-1 text-center">Artikel wurde hinzugefügt</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default ProductCard;