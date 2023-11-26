import React, { useState } from 'react'

const SearchBar = () => {
    const [search, setSearch] = useState("");

    return (
        <div className="col-lg-3 offset-lg-0 col-md-6 d-flex align-items-center">
            <div className="input-group">
                <input
                    onChange={e => { setSearch(e.target.value) }}
                    value={search}
                    name="search"
                    type="text"
                    className="form-control"
                    placeholder="Produkt..."
                    aria-label="Search"
                    aria-describedby="button-addon"
                />
                <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon">
                    Suchen
                </button>
            </div>
        </div>
    )
}

export default SearchBar