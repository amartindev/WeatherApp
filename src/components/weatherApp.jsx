import { useState } from "react";
import { fetchClima } from "../services/weatherApi"

const WeatherApp = () => {

    
    const difKelvin = 273.15 
    const [ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)


    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (ciudad.length>0) fetchClimaData()
    }

    const fetchClimaData = async () => {
        try {
          const data = await fetchClima(ciudad);
          setDataClima(data);
        } catch (error) {
          console.log("Ocurrió el siguiente error: ", error);
        }
      };

    return (
        <div className="container">
            <h1>Aplicacion de Clima</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difKelvin)}°C</p>
                        <p>Condicion Metereologica: {dataClima.weather[0].description}</p>
                        <img src={`http://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                    </div>
                )
            }
        </div>
    );
};

export default WeatherApp;