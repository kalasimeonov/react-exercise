import React from "react";
import '../styles/Nav.css';
import SearchBar from "./SearchBar";

export default function Nav({setData}) {
    return (
        <nav className="nav-bar">
            <img alt="logo" src="./forecast-logo.png" className="logo" />
            <h2 className="title">Clima</h2>
            <SearchBar setData={setData} />
        </nav>
    );
}