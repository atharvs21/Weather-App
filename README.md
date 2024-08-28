# Weather Reporting App

## Overview

The **Weather Reporting App** is a responsive web application developed to provide real-time weather data with dynamic user interactions. Built with **React.js** on the frontend and **Node.js** with **Express.js** on the backend, this app fetches weather data from **WeatherAPI.com** and offers users an engaging and informative experience. The application implements efficient caching strategies to minimize API requests and enhance performance and reliability, as well as real-time push notifications for weather alerts.

## Key Features

- **Real-Time Weather Data**: Displays up-to-date weather information fetched from WeatherAPI.com.
- **Dynamic User Interactions**: Built with React.js to deliver a responsive and interactive user interface.
- **Backend API Integration**: Utilizes Express.js and Node.js to manage server-side operations and data retrieval from external APIs.
- **Efficient Caching Strategies**: Implements caching mechanisms to reduce the number of API calls, improving app performance and reliability.
- **Real-Time Push Notifications**: Provides users with tailored weather alerts to enhance engagement and responsiveness.
- **Cross-Browser Compatibility and Responsive Design**: Ensures a seamless experience across various devices and web browsers.

## Technologies Used

- **React.js**: This builds a responsive and interactive user interface.
- **Node.js** and **Express.js**: For server-side development and API handling.
- **WeatherAPI.com**: Used as the source for fetching real-time weather data.
- **Caching**: To improve performance by reducing redundant API calls.
- **Real-Time Notifications**: To deliver timely weather updates to users.

## Installation and Setup

To run the **Weather Reporting App** locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/atharvs21/Weather-App.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Weather-App
   ```

3. **Install Frontend and Backend Dependencies**:

   For the frontend:
   ```bash
   cd client
   npm install
   ```

   For the backend:
   ```bash
   cd ../server
   npm install
   ```

4. **Set Up Environment Variables** (if needed):
   Configure environment variables for API keys and other sensitive information in `.env` files located in the `client` and `server` directories.

5. **Run the Application**:

   Start the backend server:
   ```bash
   cd ../server
   npm start
   ```

   Start the frontend application:
   ```bash
   cd ../client
   npm start
   ```
   
   The application should now be running, with the frontend accessible at `http://localhost:3000` and the backend server running at `http://localhost:5000`.

## Contributing

Contributions are welcome! If you have any ideas for improvements or want to report issues, please open an issue on the GitHub repository. To contribute code, please fork the repository, create a new branch with your changes, and submit a pull request.
