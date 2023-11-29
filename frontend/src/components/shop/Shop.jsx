import React from "react";
import Carousel from "./Carousel"
import ProductCard from "./ProductCard";

function Shop({ searchArticle, onAdd }) {
    return (
        <>
            < Carousel />
            <div className="mx-3">
                <div className="row g-4 d-flex justify-content-center">
                    {searchArticle.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            text={product.text}
                            imageNumber={product.imageNumber}
                            currentPrice={Math.round(product.currentPrice)}
                            oldPrice={Math.round(product.oldPrice)}
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