import React from "react";
import Carousel from "./Carousel"
import ProductCard from "./ProductCard";

function Shop({ filteredArray, onAdd }) {
    return (
        <>
            < Carousel />
            <div className="container">
                <div className="row g-4 d-flex justify-content-center">
                    {filteredArray.map(product => (
                        <ProductCard
                            key={product.item_id}
                            id={product.item_id}
                            title={product.title}
                            text={product.text}
                            imageNumber={product.img_data}
                            currentPrice={Math.round(product.current_price)}
                            oldPrice={Math.round(product.old_price)}
                            onAdd={onAdd}
                        />
                    ))
                    }
                </div>
            </div>
        </>
    )
}

export default Shop;