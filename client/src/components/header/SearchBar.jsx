import React, { useEffect, useState, useCallback } from 'react'

const SearchBar = ({ products, setSearchArticle }) => {
    const [search, setSearch] = useState("");

    const filteredArticle = useCallback(() => {
        return products.filter(product => {
            return search.toLowerCase() === "" ? product : product.title.toLowerCase().includes(search);
        });
    }, [products, search]);

    useEffect(() => {
        setSearchArticle(filteredArticle());
    }, [search, setSearchArticle, filteredArticle]);

    return (
        <div className="col-lg-3 offset-lg-0 col-md-6 d-flex align-items-center">
            <div className="input-group">
                <input
                    onChange={e => setSearch(e.target.value)}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Produkt..."
                    aria-label="Search"
                    aria-describedby="button-addon"
                />
            </div>
        </div>
    )
}

export default SearchBar