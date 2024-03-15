import React from "react";


const WeatherDisplay = ({weatherData}) => {
    const {temprature , condition} = weatherData;
    const tempratureColor = temprature > 20 ? 'red' : 'green' ;

    return (
        <div>
            <p>weather display</p>
            <p style={{color : tempratureColor}}>temprature : {temprature}</p>
            <p>condition : {condition}</p>
        </div>
    )
}

export default WeatherDisplay;

