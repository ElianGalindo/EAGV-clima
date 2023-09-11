const btnGetWeather = document.getElementById('btnGetWeather')
const citySearch = document.getElementById('city')
let cityFound = {} 

btnGetWeather.addEventListener('click', () => {
    console.log('$$$ city => ', citySearch)
    if (citySearch.value.trim().length > 0) {
        getWeather(citySearch.value)
    } else {
        alert('Ciudad Vacia jeje')
        citySearch.focus()
    }
})

const newData = () => {
    const city = document.getElementById('newCity')
    const temp = document.getElementById('idTemp')
    const current = document.getElementById('current-weather')
    const viento = document.getElementById('idWind')
    const humedad = document.getElementById('idHumedad')
    const tiempo = document.getElementById('idTime')

    city.textContent = cityFound.city
    temp.textContent = cityFound.temp 
    current.textContent = cityFound.current_weather
    viento.textContent = cityFound.wind
    humedad.textContent = cityFound.humidity
    tiempo.textContent = cityFound.last_update
}