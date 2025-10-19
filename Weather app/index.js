const weatherData = {
  Sofia: { temp: 18, description: "Sunny", wind: 3, humidity: 50 },
  Plovdiv: { temp: 20, description: "Cloudy", wind: 2, humidity: 60 },
  Varna: { temp: 22, description: "Clear sky", wind: 4, humidity: 55 },
  Burgas: { temp: 21, description: "Rain", wind: 5, humidity: 70 },
  Pleven: { temp: 19, description: "Partly Cloudy", wind: 3, humidity: 65 },
};

const citySelect = document.querySelector("#cityInput");
const checkBtn = document.querySelector("#getWeatherBtn");
const weatherResult = document.querySelector(".weatherResult");
const loading = document.querySelector(".spinner");

checkBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (weatherData[selectedCity]) {
    loading.style.display = "block";
    setTimeout(() => {
      loading.style.display = "none ";
      const data = weatherData[selectedCity];
      weatherResult.innerHTML = `
            <h2>Weather in ${selectedCity}</h2>
            <p>Temperature: ${data.temp}°C</p>
            <p>Description: ${data.description}</p>
            <p>Wind Speed: ${data.wind} m/s</p>
            <p>Humidity: ${data.humidity}%</p>
            `;
    }, 1000);
  }
});
