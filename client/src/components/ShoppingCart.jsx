import React from "react";

function ShoppingCart(props) {
    return (
        <tr className="text-center">
            <td>{props.amount}</td>
            <td>{props.title}</td>
            <td>{`${props.price} €`}</td>
            <td>{`${props.totalPrice} €`}</td>
        </tr>
    )
}

export default ShoppingCart;