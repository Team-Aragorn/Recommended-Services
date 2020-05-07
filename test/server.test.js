/* eslint-disable no-undef */
const request = require('supertest');
const server = require('../server/server.js');

describe('Test GET', () => {
  it('Should respond with 200', async (next) => {
    const response = await request(server.app).get('/api/game');
    expect(response.statusCode).toBe(200);
    next();
  });

  it('Should be an object', async (next) => {
    const response = await request(server.app).get('/api/game');
    expect(response.body).toBeTruthy();
    next();
  });

  it('Should have a Images Key', async (next) => {
    const response = await request(server.app).get('/api/game');
    expect(response.body).toHaveProperty('images');
    next();
  });
});
