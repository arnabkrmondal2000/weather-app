import React, { useState, ChangeEvent,MouseEvent } from "react";
import WeatherData from "./WeatherView";
import './WeatherSearch.css';

const WeatherSearch = () => {
    const [city, setCity] = useState<string>('');
    const [searchItem, setSearchItem] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleSearch = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearchItem(city)
        setCity('');
    }

    console.log('search item ====>',searchItem);
    return(
        <>
        <div className="displayContainer">
            <div className='inputItem'>
                <input type='text' placeholder='Write the name of the city' value={city} onChange={handleChange}  />
                <button onClick={handleSearch}>Search</button>
            </div>
            <WeatherData searchItem={searchItem} />
        </div>
        </>
    )
}

export default WeatherSearch;
