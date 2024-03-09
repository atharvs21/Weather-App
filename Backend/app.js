const express = require('express');
const { monitorWeatherConditions } = require("./backendLogic");
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000; // Use the port provided by the environment or default to 3000

app.get("/check-weather", (req, res) => {
    // Call function to monitor weather conditions for a specific city and condition
    monitorWeatherConditions("New York", "rain");
    res.send("Weather conditions checked.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

ongoose.connect('mongodb://localhost/weatherApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });



// Placeholder route for getting weather data
app.get('/weather/:location', (req, res) => {
    const location = req.params.location;
    res.json({ message: `Weather data for ${location}` });
});

// Placeholder route for getting forecast data
app.get('/forecast/:location', (req, res) => {
    const location = req.params.location;
    res.json({ message: `Forecast data for ${location}` });
});

const axios = require('axios');
const WEATHER_API_KEY = '192e3aaf21ff4c0eaab95337240503';

// Reformat the weather data according to the API specifications
const formatWeatherData = (data) => {
    return {
        location: {
            name: data.location.name,
            country: data.location.country,
            region: data.location.region,
            lat: data.location.lat,
            lon: data.location.lon,
            timezone: data.location.tz_id,
        },
        current: {
            last_updated: data.current.last_updated,
            temperature: {
                celsius: data.current.temp_c,
                fahrenheit: data.current.temp_f,
            },
            condition: {
                text: data.current.condition.text,
                icon: data.current.condition.icon,
                code: data.current.condition.code,
            },
            humidity: data.current.humidity,
            wind_speed: {
                kph: data.current.wind_kph,
                mph: data.current.wind_mph,
            },
        },
    };
};

app.get('/weather/:location', async (req, res) => {
    const location = req.params.location;
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}`);
        const formattedData = formatWeatherData(response.data);
        res.json(formattedData);
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.error('Weather API Error:', error.response.data);
            res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Weather API Request Error:', error.request);
            res.status(500).json({ error: 'No response received from weather API' });
        } else {
            // Something happened in setting up the request that triggered an error
            console.error('Weather API Error:', error.message);
            res.status(500).json({ error: 'An error occurred while fetching weather data' });
        }
    }
});

const citySchema = new mongoose.Schema({
    name: String,
    country: String,
    latitude: Number,
    longitude: Number,
});

const weatherSchema = new mongoose.Schema({
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    temperature: Number,
    condition: String,
    humidity: Number,
    windSpeed: Number,
    lastUpdated: { type: Date, default: Date.now },
});

module.exports = {
    City: mongoose.model('City', citySchema),
    Weather: mongoose.model('Weather', weatherSchema),
};