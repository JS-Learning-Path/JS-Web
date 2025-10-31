const sunToggle = document.querySelector(".toggle-theme-icon-sun");
const moonToggle = document.querySelector(".toggle-theme-icon-moon");
const searchBtn = document.querySelector(".search");
const searchInput = document.querySelector(".search-bar");
const mainContainer = document.querySelector(".main-content");
const weatherContent = document.querySelector(".weather-container");
const spinner = document.querySelector(".spinner");
const sideBar = document.querySelector(".sidebar");
const rightSideContent = document.querySelector(".right-side-content");
const weatherDetails = document.querySelector(".weather-details");
const weatherInfo = document.querySelector(".weather-info");
const weatherContentDays = document.querySelector(".weather-content-days");
const foreCast = document.querySelector(".forecast");
const foreCastItems = document.querySelector(".forecast-items");
const foreCastDays = document.querySelectorAll(".forecast-day"); //
const cities = [
  {
    name: "Plovdiv",
    country: "Bulgaria",
    temperature: "22",
    condition: "Sunny",
  },
  {
    name: "Sofia",
    country: "Bulgaria",
    temperature: "18",
    condition: "Partly cloudy",
  },
  {
    name: "Varna",
    country: "Bulgaria",
    temperature: "24",
    condition: "Sunny",
  },
  {
    name: "Burgas",
    country: "Bulgaria",
    temperature: "23",
    condition: "Sunny",
  },
  {
    name: "Ruse",
    country: "Bulgaria",
    temperature: "20",
    condition: "Cloudy",
  },
  {
    name: "Veliko Tarnovo",
    country: "Bulgaria",
    temperature: "19",
    condition: "Rainy",
  },
];
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});
searchBtn.addEventListener("click", async () => {
  await showSpinner();
  weatherContent.innerHTML = "";
  const query = searchInput.value.trim();
  const citiesFound = cities.filter((city) => {
    return city.name.toLowerCase() === query.toLowerCase();
  });
  citiesFound.forEach((city) => {
    const cityElement = document.createElement("div");
    cityElement.classList.add("weather-container");
    cityElement.innerHTML = `
      <h1 class="city-name">${city.name}, ${city.country}</h1>
      <h2 class="temperature">${city.temperature}°C</h2>
      <p class="weather-description">${city.condition}</p>
      <span class="forecast-items">
      <img src="/Weather App Pro/icons/sun.png" alt="Forecast Icon" />
      </span>
      `;
    weatherContent.appendChild(cityElement);
  });
  if (citiesFound.length > 0) {
    searchInput.value = "";
  }
});

// sunToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme");
// });

function updateIcons() {
  if (document.body.classList.contains("dark-theme")) {
    sunToggle.style.display = "none";
    moonToggle.style.display = "block";
    moonToggle.style.position = "relative";
    moonToggle.style.left = "2px";
    mainContainer.style.backgroundColor = "#1e293b";
    mainContainer.style.color = "white";
    sideBar.style.backgroundColor = "#1e293b";
    sideBar.style.color = "white";
    rightSideContent.style.backgroundColor = "#1e293b";
    rightSideContent.style.color = "white";
    weatherContentDays.style.backgroundColor = "#1e293b";
    weatherContentDays.style.color = "white";
    foreCast.style.backgroundColor = "#1e293b";
    foreCast.style.color = "white";
    foreCastItems.style.color = "white";
  } else {
    sunToggle.style.display = "block";
    moonToggle.style.display = "none";
    foreCastDays.forEach((day) => {
      day.style.borderColor = "#e2e8f0";
      day.style.borderRadius = "8px";
      day.style.backgroundColor = "#acb3c02e";
    });
  }
}
updateIcons();
// sunToggle.addEventListener("click", updateIcons);
// moonToggle.addEventListener("click", updateIcons);

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  localStorage.setItem("theme", theme);
  updateIcons();
}

sunToggle.addEventListener("click", () => {
  setTheme("dark");
});

moonToggle.addEventListener("click", () => {
  setTheme("light");
});
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  updateIcons();
}

async function showSpinner() {
  await new Promise((resolve) => {
    spinner.style.display = "block";
    setTimeout(() => {
      spinner.style.display = "none";
      resolve();
    }, 2000);
  });
}


