import React from "react";
import './Card.css';

interface CardData {
    heading: string;
    data:string | number;
}
const WeatherCard = ({heading, data} : CardData) => {

    return(
        <>
            <div className='cardItem'>
                <h2>{heading}</h2>
                <p>{data}</p>
            </div>
        </>
    )
}

export default WeatherCard;