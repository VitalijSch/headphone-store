import React from "react";
import CartInput from "./CartInput";

function ShoppingCart({ shoppingCart, onAdd, onDelete }) {
    // Berechnung des Gesamtpreises
    const total = shoppingCart.reduce((accumulator, currentProduct) =>
        accumulator + parseInt(currentProduct.totalPrice), 0);

    return (
        <div className="container">
            <h2 className="mt-5 mb-3">Warenkorb</h2>
            <span className="fs-5 text-muted">Gesamtpreis: {`${total} €`}</span>
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
                        {shoppingCart.map(product => (
                            <CartInput
                                key={product.id}
                                id={product.id}
                                amount={product.amount}
                                title={product.title}
                                price={product.price}
                                totalPrice={product.totalPrice}
                                onAdd={onAdd}
                                onDelete={onDelete}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShoppingCart;