import React { useState } from "react";
import axios from "axios";
import './Weather.css';

export default function Weather() {
const [ready, setReady] = useState(false);  
const [temperature, setTemperature] = useState(null);
  
function handleResponse(response) {
console.log(response.data);
setTemperature(response.data.temperature.current);
  }
  if (ready){
       return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Winchburgh</h1>
      <ul>
        <li>Monday 2:00</li>
        <li>Snowy</li>
      </ul>
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="Snowy"
          />
          <span className="temperature">{temperature}</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 85%</li>
            <li>Wind :5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
} else {  
  const apikey = 'o4045te388f5bc6e0abcc5fba3a40236';
  let city = 'Paris';
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiURL).then(handleResponse);
    return "Loading...";
}

}
