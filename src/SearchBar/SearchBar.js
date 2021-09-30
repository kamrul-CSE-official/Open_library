import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="bg">
             <div className="center">
            <h1 className="title">Book-Finder</h1>
                <input type="text" placeholder="Search Book" className="input" />
                <button className="btn-search">Search</button>
            </div>
        </div>
    );
};

export default SearchBar;