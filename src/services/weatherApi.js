const urlBase = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = import.meta.env.VITE_WEATHER_APP_API_KEY

const fetchClima = async (ciudad) => {
    try{
        const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`)
        const data = await response.json()
        return data
    }catch(error){
        console.log("Ocurrio el siguiente error: ", error)
    }
}

export {fetchClima}