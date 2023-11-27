import React, { useEffect, useState, useCallback } from 'react'

const SearchBar = ({ article, setFilteredArray }) => {
    const [search, setSearch] = useState("");

    const filteredArticle = useCallback(() => {
        return article.filter(article => {
            return search.toLowerCase() === "" ? article : article.title.toLowerCase().includes(search);
        });
    }, [article, search]);

    useEffect(() => {
        setFilteredArray(filteredArticle());
    }, [search, setFilteredArray, filteredArticle]);

    return (
        <div className="col-lg-3 offset-lg-0 col-md-6 d-flex align-items-center">
            <div className="input-group">
                <input
                    onChange={e => { setSearch(e.target.value) }}
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