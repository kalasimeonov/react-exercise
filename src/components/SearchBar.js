import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";
import "../styles/SearchBar.css";

export default function SearchBar({setData}) {

    function debounce(func, timeout = 500) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {func.apply(this, args);}, timeout);
        };
    }

    const fetchData = (value) => {
        try {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=97ef9d07dda770e6afe3d447b2866190&units=metric&cnt=5`)
                .then(response => response.json())
                .then(json => {
                    setData(prevState => ({...prevState, forecast: json}));
                });
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=97ef9d07dda770e6afe3d447b2866190&units=metric`)
                .then(response => response.json())
                .then(json => {
                    setData(prevState => ({...prevState, weather: json}));
                });
        } catch(error) {
            console.log(error);
        }
    };

    const handleChange = debounce((value) => {
        if(value.length < 1) {
            setData(undefined);
            return;
        }

        fetchData(value);
    });


    return (
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input placeholder="Type city for forecast..." onChange={(e) => handleChange(e.target.value)} />
        </div>
    );
}





