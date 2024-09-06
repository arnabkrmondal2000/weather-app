import React, { useState,useEffect } from "react";
import axios from "axios";
import WeatherCard from "../CardComponent/Card";
import './WeatherView.css';

interface WeatherDataProps {
    searchItem : string;
}

interface WeatherDataType {
   current: {
    cloud: number;
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    wind_kph: number;
    condition: {
        text: string;
    }
    dewpoint_c: number;
   }

   location: {
    country: string;
    lat: number;
    lon: number;
    localtime: string;
    name: string;
    region: string;
    }
}

const WeatherData = ( { searchItem }: WeatherDataProps) => {

    const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(()=>{
        if(searchItem) {
        setLoading(true);
        getWeathetData();
      }
    }, [searchItem]);


    const getWeathetData = async() => {

        try {
            const res = await axios.get('https://api.weatherapi.com/v1/current.json', {
                params: {
                    key: '2b87a4d6e01041d0aa164554240609',
                    q: searchItem,
                },
            })
            console.log('api response is===>', res);
            setWeatherData(res.data);
        } catch (error) {
            alert('error, No data foynd');
            console.log('it is not valid place', error);
        } finally {
            setLoading(false);
        }
    }

    console.log('weather data from api', weatherData);

    // useEffect(()=>{
    //     getWeathetData();
    // }, [searchItem]);

    return (
        <> 
         {weatherData && <div className='Weather-display'>
             <WeatherCard heading='Country' data = {`${weatherData.location.country}`}/>
             <WeatherCard heading='Region' data = {`${weatherData.location.region}`}/>
             <WeatherCard heading='Name' data = {`${weatherData.location.name}`}/>
             <WeatherCard heading='Temparature' data = {`${weatherData.current.temp_c}°C`}/>
             <WeatherCard heading='Feels Like' data = {`${weatherData.current.feelslike_c}°C`}/>
             <WeatherCard heading='Humidity' data = {`${weatherData.current.humidity}%`}/>
             <WeatherCard heading='Wind Speed' data = {`${weatherData.current.wind_kph}KM`}/>
             <WeatherCard heading='Dew Point' data = {`${weatherData.current.dewpoint_c}°C`}/>
             <WeatherCard heading='Conditions' data = {`${weatherData.current.condition.text}`}/>
           </div >}
        </>
    )
}

export default WeatherData;