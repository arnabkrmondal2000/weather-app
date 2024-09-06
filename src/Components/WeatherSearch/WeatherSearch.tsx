import React, { useState, ChangeEvent,KeyboardEvent } from 'react';
import WeatherData from '../WeatherView/WeatherView';
import './WeatherSearch.css';

const WeatherSearch = () => {
    const [city, setCity] = useState<string>('');
    const [searchItem, setSearchItem] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }

    const handleButtonClick = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    }

    const handleSearch = () => {
        setSearchItem(city)
    }

    console.log('search item ====>',searchItem);
    return(
        <>
        <div className="display-container">
            <div className='input-item'>
                <input type='text' placeholder='Write the name of the city' value={city} onChange={handleChange} onKeyDown={handleButtonClick} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <WeatherData searchItem={searchItem} />
        </div>
        </>
    )
}

export default WeatherSearch;
