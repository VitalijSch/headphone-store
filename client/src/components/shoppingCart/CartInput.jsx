import React, { useState } from "react";

function CartInput({ id, amount, title, price, totalPrice, onAdd, onDelete }) {
    const [currentAmount, setCurrentAmount] = useState(amount);

    const handleAmountChange = (change) => {
        const newAmount = currentAmount + change;
        setCurrentAmount(newAmount);

        newAmount === 0 ? onDelete(id) : onAdd(id, title, price, newAmount);
    };

    const handleDecreaseClick = () => handleAmountChange(-1);
    const handleIncreaseClick = () => handleAmountChange(1);

    return (
        <tr className="text-center">
            <td>
                <div className="d-flex justify-content-center">
                    <img onClick={handleDecreaseClick} className="cursorPointer" src="../images/shoppingCart/dash-circle.svg" alt="dash-circle icon" />
                    <span className="mx-1">{currentAmount}</span>
                    <img onClick={handleIncreaseClick} className="cursorPointer" src="../images/shoppingCart/plus-circle.svg" alt="plus-circle icon" />
                </div>
                <div>
                    <img onClick={() => onDelete(id)} className="cursorPointer" src="../images/shoppingCart/delete.svg" alt="trash icon" />
                </div>
            </td>
            <td>{title}</td>
            <td>{`${price}€`}</td>
            <td>{`${totalPrice}€`}</td>
        </tr>
    );
}

export default CartInput;
