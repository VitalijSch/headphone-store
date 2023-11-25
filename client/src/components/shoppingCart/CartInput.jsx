import React, { useState } from "react";

function CartInput({ id, amount, title, price, totalPrice, onAdd, onDelete }) {
    // Zustand für die aktuelle Menge des Produkts
    const [currentAmount, setCurrentAmount] = useState(amount);

    // Funktion zur Behandlung der Mengeänderung
    const handleAmountChange = (change) => {
        const newAmount = currentAmount + change;
        setCurrentAmount(newAmount);

        // Wenn die Menge 0 ist, entferne das Produkt aus dem Warenkorb, sonst aktualisiere die Menge
        newAmount === 0 ? onDelete(id) : onAdd(id, title, price, newAmount);
    };

    // Funktionen für die Klickereignisse der Plus- und Minus-Buttons
    const handleDecreaseClick = () => handleAmountChange(-1);
    const handleIncreaseClick = () => handleAmountChange(1);

    return (
        <tr className="text-center">
            <td>
                {/* Bedienelemente für die Menge mit Plus- und Minus-Icons */}
                <div className="d-flex justify-content-between">
                    <img onClick={handleDecreaseClick} className="cursorPointer" src="/images/dash-circle.svg" alt="dash-circle icon" />
                    {currentAmount}
                    <img onClick={handleIncreaseClick} className="cursorPointer" src="/images/plus-circle.svg" alt="plus-circle icon" />
                </div>
                {/* Löschen-Schaltfläche */}
                <div>
                    <img onClick={() => onDelete(id)} className="cursorPointer" src="/images/delete.svg" alt="trash icon" />
                </div>
            </td>
            {/* Produktinformationen */}
            <td>{title}</td>
            <td>{`${price}€`}</td>
            <td>{`${totalPrice}€`}</td>
        </tr>
    );
}

export default CartInput;
