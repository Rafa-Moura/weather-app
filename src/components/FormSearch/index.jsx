import axios from "axios";
import React, { useState } from "react";

import "./styles.css";

function FormSearch() {
  const KEY = "e71bb8c114b0cf94f80b53feb5fc688d";
  const [city, setCity] = useState("");
  const [result, setResult] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt&appid=${KEY}&units=metric`
        )
        .then((result) => setResult(result.data));
    } catch (e) {
      alert("Verifique o nome da cidade e tente novamente");
      document.location.reload(true);
    }
    setCity("");
  }

  return (
    <div className="app--section">
      <div className="form--section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="citySearch"
            id="citySearch"
            value={city}
            required
            placeholder="Digite a cidade"
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      {typeof result.main != "undefined" ? (
        <div className="card--section">
          <div className="card">
            <img
              src={`http://openweathermap.org/img/wn/${result.weather[0].icon}.png`}
              alt=""
            />
            <h1>
              {result.name}, {result.sys.country}
            </h1>
            <h3>{Math.round(result.main.temp)} °C</h3>
            <h3>{result.weather[0].main}</h3>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default FormSearch;
