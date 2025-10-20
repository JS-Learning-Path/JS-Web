const weatherData = {
  Sofia: { temp: 18, description: "Sunny", wind: 3, humidity: 50 },
  Plovdiv: { temp: 20, description: "Cloudy", wind: 2, humidity: 60 },
  Varna: { temp: 22, description: "Clear sky", wind: 4, humidity: 55 },
  Burgas: { temp: 21, description: "Rain", wind: 5, humidity: 70 },
  Pleven: { temp: 19, description: "Partly Cloudy", wind: 3, humidity: 65 },
  Ruse: { temp: 17, description: "Sunny", wind: 2, humidity: 45 },
  Pazardzhik: { temp: 33, description: "Hot", wind: 1, humidity: 30 },
  Haskovo: { temp: 16, description: "Windy", wind: 6, humidity: 55 },
};

const citySelect = document.querySelector("#cityInput");
const checkBtn = document.querySelector("#getWeatherBtn");
const weatherResult = document.querySelector(".weatherResult");
const loading = document.querySelector(".spinner");
const clock = document.querySelector(".clock");
const time = document.querySelector("#time");
const date = document.querySelector("#date");

time.innerHTML = new Date().toLocaleString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

date.innerHTML = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "2-digit",
  weekday: "long",
});

checkBtn.addEventListener("click", () => {
  const selectedCity = citySelect.value;
  if (weatherData[selectedCity]) {
    loading.style.display = "block";
    setTimeout(() => {
      loading.style.display = "none";
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
