import React from 'react';
import './App.css';
import WindowsNews from "./WindowNews";

function Search() {
    return(
        <nav className="navbar">
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-dark my-2 my-sm-2" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default Search;
