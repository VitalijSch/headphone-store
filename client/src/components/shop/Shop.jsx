import React from "react";
import Carousel from "./Carousel"
import ProductCard from "./ProductCard";

function Shop({ onAdd, article }) {
    return (
        <>
            < Carousel />
            <div className="container">
                <div className="row g-4 d-flex justify-content-center">
                    {article.map(product => (
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
                    ))}
                </div>
            </div>
        </>
    )
}

export default Shop;