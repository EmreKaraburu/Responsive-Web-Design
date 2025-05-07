document.addEventListener("DOMContentLoaded", function() {
    // Load inspirations from local JSON file when page is ready
    if (document.querySelector("#inspirations-container")) {
        loadInspirations();
    }

    if (document.querySelector("#weather-container")) {
        loadWeatherData();
    }
});

function loadInspirations() {
    const container = document.querySelector("#inspirations-container");

    container.innerHTML = "<div class='loading-indicator'><p>Loading inspiring thoughts...</p></div>";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "inspirations.json", true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                displayInspirations(data, container);
            } catch (e) {
                container.innerHTML = "<div class='error-message'><p>An error occurred while loading the inspirations.</p></div>";
                console.error("JSON parse error:", e);
            }
        } else {
            container.innerHTML = "<div class='error-message'><p>An error occurred while loading the inspirations (Status: " + xhr.status + ").</p></div>";
        }
    };

    xhr.onerror = function() {
        container.innerHTML = "<div class='error-message'><p>Network connection error! Please check your internet connection.</p></div>";
    };

    xhr.timeout = 10000; // 10 seconds
    xhr.ontimeout = function() {
        container.innerHTML = "<div class='error-message'><p>Request timed out. Please try again later.</p></div>";
    };

    xhr.send();
}

function displayInspirations(data, container) {
    container.innerHTML = "";

    if (!data || !data.length) {
        container.innerHTML = "<div class='error-message'><p>No inspiring content available yet.</p></div>";
        return;
    }

    const html = document.createElement("div");
    html.className = "inspirations-list";

    data.forEach(item => {
        const inspirationCard = document.createElement("div");
        inspirationCard.className = "inspiration-card";

        inspirationCard.innerHTML = `
            <h3>${item.title || "Untitled"}</h3>
            <p>${item.description || "No description"}</p>
            ${item.author ? `<p class="author">- ${item.author}</p>` : ""}
        `;

        html.appendChild(inspirationCard);
    });

    container.appendChild(html);
}

function loadWeatherData() {
    const container = document.querySelector("#weather-container");

    container.innerHTML = "<div class='loading-indicator'><p>Loading weather information...</p></div>";

    // For this example, we're using JSONPlaceholder as a demo API
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    const xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
            try {
                const data = JSON.parse(xhr.responseText);
                displayWeather(data, container);
            } catch (e) {
                container.innerHTML = "<div class='error-message'><p>An error occurred while loading weather information.</p></div>";
                console.error("JSON parse error:", e);
            }
        } else {
            container.innerHTML = "<div class='error-message'><p>An error occurred while loading weather information (Status: " + xhr.status + ").</p></div>";
        }
    };

    xhr.onerror = function() {
        container.innerHTML = "<div class='error-message'><p>Network connection error! Please check your internet connection.</p></div>";
    };
    xhr.timeout = 10000; // 10 seconds
    xhr.ontimeout = function() {
        container.innerHTML = "<div class='error-message'><p>Request timed out. Please try again later.</p></div>";
    };

    xhr.send();
}

function displayWeather(data, container) {
    container.innerHTML = "";
    // Since JSONPlaceholder returns generic data, we'll transform it
    const weatherData = {
        temperature: "24°C",
        condition: "Partly Cloudy",
        humidity: "65%",
        wind: "8 km/h",
        forecast: data.body.substring(0, 100) + "..."
    };


    const weatherCard = document.createElement("div");
    weatherCard.className = "weather-card";

    weatherCard.innerHTML = `
        <h3>Daily Weather Forecast</h3>
        <div class="weather-info">
            <p><strong>Temperature:</strong> ${weatherData.temperature}</p>
            <p><strong>Condition:</strong> ${weatherData.condition}</p>
            <p><strong>Humidity:</strong> ${weatherData.humidity}</p>
            <p><strong>Wind:</strong> ${weatherData.wind}</p>
            <p><strong>Forecast:</strong> ${weatherData.forecast}</p>
        </div>
        <p class="weather-footer">* This is demo weather data. For real implementation, use an API like OpenWeatherMap.</p>
    `;

    container.appendChild(weatherCard);
}