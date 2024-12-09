import React, {useState, useMemo, useCallback} from 'react';
import '../styles/citydetails.css';
import {IndicatorSvgSelector} from "../assets/icons/indicators/IndicatorSvgSelector.jsx";
import {GlobalSvgSelector} from "../assets/icons/global/GlobalSvgSelector.jsx";
import {Header} from "./components/Header.jsx";

// Mock data
const weatherData = [
  {
    city: 'Warszawa',
    current: {
      temperature: 3,
      conditions: 'Sunny',
      icon: '☀️',
      precipitation: {probability: 10, type: 'Rain', amount: 0.2},
      wind: {speed: 10, direction: 'NE'},
      cloudiness: 20,
    },
    forecast: [
      {day: 'Today', temperature: 10, conditions: 'Cloudy', icon: 'mainly_cloudy'},
      {day: 'Tomorrow', temperature: 12, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Wednesday', temperature: 14, conditions: 'Sunny', icon: 'sun'},
      {day: 'Thursday', temperature: 13, conditions: 'Partly Cloudy', icon: 'mainly_cloudy'},
      {day: 'Friday', temperature: 11, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Saturday', temperature: 11, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Sunday', temperature: 11, conditions: 'Rainy', icon: 'small_rain'},
    ],
  },
  {
    city: 'Kraków',
    current: {
      temperature: 0,
      conditions: 'Cloudy',
      icon: '☁️',
      precipitation: {probability: 20, type: 'Rain', amount: 0.5},
      wind: {speed: 5, direction: 'W'},
      cloudiness: 60,
    },
    forecast: [
      {day: 'Today', temperature: 11, conditions: 'Cloudy', icon: 'mainly_cloudy'},
      {day: 'Tomorrow', temperature: 13, conditions: 'Sunny', icon: 'sun'},
      {day: 'Wednesday', temperature: 15, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Thursday', temperature: 14, conditions: 'Cloudy', icon: 'mainly_cloudy'},
      {day: 'Friday', temperature: 12, conditions: 'Sunny', icon: 'sun'},
      {day: 'Saturday', temperature: 11, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Sunday', temperature: 11, conditions: 'Rainy', icon: 'small_rain'},
    ],
  },
  {
    city: 'Wrocław',
    current: {
      temperature: 0,
      conditions: 'Cloudy',
      icon: '☁️',
      precipitation: {probability: 10, type: 'Sun', amount: 0.5},
      wind: {speed: 10, direction: 'S'},
      cloudiness: 30,
    },
    forecast: [
      {day: 'Today', temperature: 2, conditions: 'Sunny', icon: 'mainly_cloudy'},
      {day: 'Tomorrow', temperature: 3, conditions: 'Cloudy', icon: 'sun'},
      {day: 'Wednesday', temperature: 1, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Thursday', temperature: 0, conditions: 'Sunny', icon: 'mainly_cloudy'},
      {day: 'Friday', temperature: 4, conditions: 'Sunny', icon: 'sun'},
      {day: 'Saturday', temperature: 4, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Sunday', temperature: 5, conditions: 'Rainy', icon: 'small_rain'},
    ],
  },
  {
    city: 'Poznań',
    current: {
      temperature: 1,
      conditions: 'Sunny',
      icon: '☁️',
      precipitation: {probability: 30, type: 'Sun', amount: 0.5},
      wind: {speed: 40, direction: 'S'},
      cloudiness: 50,
    },
    forecast: [
      {day: 'Today', temperature: 2, conditions: 'Sunny', icon: 'sun'},
      {day: 'Tomorrow', temperature: 3, conditions: 'Cloudy', icon: 'mainly_cloudy'},
      {day: 'Wednesday', temperature: 1, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Thursday', temperature: 0, conditions: 'Sunny', icon: 'sun'},
      {day: 'Friday', temperature: 4, conditions: 'Sunny', icon: 'sun'},
      {day: 'Saturday', temperature: 4, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Sunday', temperature: 5, conditions: 'Rainy', icon: 'small_rain'},
    ],
  },
  {
    city: 'Łódź',
    current: {
      temperature: 1,
      conditions: 'Sunny',
      icon: '☁️',
      precipitation: {probability: 30, type: 'Sun', amount: 0.5},
      wind: {speed: 40, direction: 'S'},
      cloudiness: 50,
    },
    forecast: [
      {day: 'Today', temperature: 2, conditions: 'Sunny', icon: 'sun'},
      {day: 'Tomorrow', temperature: 3, conditions: 'Cloudy', icon: 'mainly_cloudy'},
      {day: 'Wednesday', temperature: 1, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Thursday', temperature: 0, conditions: 'Sunny', icon: 'sun'},
      {day: 'Friday', temperature: 4, conditions: 'Sunny', icon: 'sun'},
      {day: 'Saturday', temperature: 4, conditions: 'Rainy', icon: 'small_rain'},
      {day: 'Sunday', temperature: 5, conditions: 'Rainy', icon: 'small_rain'},
    ],
  },
];

// end

const CityDetails = ({cityData}) => (
    <div className="">
      <div className="container">

        <div className={"this__day"}>
          <div className={"top__block"}>
            <div className={"top__block_wrapper"}>
              <div className={"this__temp"}>{cityData.current.temperature}°</div>
              <div className={"this__day_name"}>Today</div>
            </div>
            <GlobalSvgSelector id={cityData.forecast[0].icon}/>
          </div>
          <div className={"bottom__block"}>
            <div className={"this__city"}>
              <span>{cityData.city}</span>
            </div>
          </div>
        </div>
        <div className={"this__day_info"}>
          <div className={"item"}>
            <div className={"indicator"}>
              <IndicatorSvgSelector id={"precipitation"}/>
            </div>
            <div className={"indicator__name"}>Precipitation:</div>
            <div
                className={"indicator__value"}>{cityData.current.precipitation.probability}% {cityData.current.precipitation.type}</div>
          </div>
          <div className={"item"}>
            <div className={"indicator"}>
              <IndicatorSvgSelector id={"wind"}/>
            </div>
            <div className={"indicator__name"}>Wind:</div>
            <div
                className={"indicator__value"}>{cityData.current.wind.speed} km/h {cityData.current.wind.direction}</div>
          </div>
          <div className={"item"}>
            <div className={"indicator"}>
              ☁️
            </div>
            <div className={"indicator__name"}>Cloudiness:</div>
            <div
                className={"indicator__value"}>{cityData.current.cloudiness}%
            </div>
          </div>
        </div>
      </div>

      <div className={"global__container"}>
        <div className="days">
          {cityData.forecast.map((day, index) => (
              <div className={"card"}>
                <div className={"day"}>{day.day}</div>
                <div className={"img"}>
                  <GlobalSvgSelector id={day.icon}/>
                </div>
                <div className={"temp__day"}>{day.temperature}°C</div>
                <div className={"info"}>{day.conditions}</div>
              </div>
          ))}
        </div>
      </div>
    </div>
);
const App = () => {
  console.log(weatherData)
  const [selectedCity, setSelectedCity] = useState(null);

  const handleSelectCity = useCallback((city) => {
    setSelectedCity(city);
  }, []);

  const handleBack = useCallback(() => {
    setSelectedCity(null);
  }, []);

  return (
      <div className="">
        <Header
            cities={weatherData}
            selectedCity={selectedCity}
            onSelect={handleSelectCity}
            onBack={handleBack}
        />
        {selectedCity && <CityDetails cityData={selectedCity} onBack={handleBack}/>}
      </div>
  );
};

export default App;