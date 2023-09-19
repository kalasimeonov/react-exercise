import React, {useState} from "react";
import "../styles/Main.css";

export default function Main({data}) {
    if(data === undefined || data.weather === undefined || data.forecast === undefined || data.cod === "404") {
        return;
    }

    const {weather, forecast} = data;

    return (
        <div className="container">
            <div className="card">
                <h1>{weather ? weather.name : "Please type a city name!"}, {weather.main && weather.main.temp + "°"}</h1>
                <div className="cardBody">
                    <div className="hourlyCast">
                        {forecast.list && forecast.list.map((item, index) => {
                            return <p key={index}>{item.dt_txt} {item.main.temp}°</p>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}