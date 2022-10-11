'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const serverRequestTest = supertest(app);

describe('Validate query', () => {
  describe('Handles invalid query', () => {
    test('500 if no name in the query string', async () => {
      let response = await serverRequestTest.get('/person');
      expect(response.status).toEqual(500);
      expect(response.body.message).toEqual('Valid name required');
    });
  });

  describe('Handles happy path', () => {
    test('Given a name in the query string, the output object is correct', async () => {
      let response = await serverRequestTest.get('/person?name=Gizmo');
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('Gizmo');
    });
  });
});





























