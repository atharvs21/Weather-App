const request = require('supertest');
const app = require('../app');

describe('GET /weather/:location', () => {
  test('should respond with weather data for a valid location', async () => {
    const location = 'New York'; // Change this to a valid location for testing
    const response = await request(app).get(`/weather/${location}`);
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('location');
    expect(response.body).toHaveProperty('current');
  });

  test('should respond with an error for an invalid location', async () => {
    const location = 'InvalidLocation'; // Change this to an invalid location for testing
    const response = await request(app).get(`/weather/${location}`);
    expect(response.status).toBe(404); // Assuming 404 is the error status for invalid location
    expect(response.body).toHaveProperty('error');
  });

  test('should respond with an error for missing location parameter', async () => {
    const response = await request(app).get('/weather/');
    expect(response.status).toBe(404); // Assuming 404 is the error status for missing location parameter
    expect(response.body).toHaveProperty('error');
  });
});
