const express = require('express');
const swagger = require('./swagger');
const weatherRouter = require('./routes/weather'); // Assuming your weather routes are defined in a separate file

const app = express();

// Other middleware and route configurations...

// Use Swagger middleware
swagger(app);

// Use weather router
app.use('/weather', weatherRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
