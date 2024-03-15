
import React, {useState , useEffect} from "react";
import './../styles/App.css';
import WeatherDisplay from "./Weather";

const App = () => {
  const[weatherData , setWeatherData] = useState({temprature : 0 , condition : ''})

  useEffect(()=>{
        const fetchWeatherData = {temprature : 25 , condition : 'sunny'};

        setWeatherData(fetchWeatherData);
  },[]);

  return (
    <div>
        {/* Do not remove the main div */}
        <WeatherDisplay weatherData={weatherData}/>
    </div>
  )
}

export default App
