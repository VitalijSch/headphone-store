import React, { useState } from "react";

function ProductCard({ id, title, text, imageNumber, currentPrice, oldPrice, onAdd }) {
    // Zustand für die Sichtbarkeit der Hinzugefügt-Benachrichtigung
    const [showAdded, setShowAdded] = useState(false);

    // Funktion: Produkt zum Warenkorb hinzufügen und Hinzugefügt-Benachrichtigung anzeigen
    const handleAddToCart = () => {
        addToCart();
        showAddedAlert();
    };

    // Funktion: Produkt zum Warenkorb hinzufügen
    const addToCart = () => onAdd(id, title, currentPrice, 1);

    // Funktion: Hinzugefügt-Benachrichtigung anzeigen und nach 2 Sekunden ausblenden
    const showAddedAlert = () => {
        setShowAdded(true);
        setTimeout(() => setShowAdded(false), 2000);
    };

    return (
        <div className="col-11 col-md-6 col-lg-4">
            <div className="card p-0 h-100">
                <img
                    src={`/images/headphone${imageNumber}.jpg`}
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
                    {showAdded && (
                        <div className="alert alert-success mt-2 px-1 py-1 text-center">
                            Artikel wurde hinzugefügt
                        </div>
                    )}
                    <button onClick={handleAddToCart} className="btn btn-warning mt-2">
                        <img
                            style={{ height: "25px", width: "25px" }}
                            className="cursorPointer"
                            src="/images/add.svg"
                            alt="add button"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;