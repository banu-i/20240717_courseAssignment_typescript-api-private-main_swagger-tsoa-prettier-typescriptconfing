import request from 'supertest';
import server from '../src/server';
import UserModel from '../src/database/models/UserModel';

describe('GET /v1/users/:userId', () => {
  test('Test /should return user by id', async () => {
  // Erstellt einen Benutzer für den Test
  const user = await UserModel.create({ name: 'Test User', email: 'testuser@example.com' });

  const response = await request(server)
    .get(`/v1/users/${user.id}`)
    .expect('Content-Type', /json/)
    .expect(200);

  const returnedUser = response.body;
  expect(returnedUser.id).toEqual(user.id);
  expect(returnedUser.name).toEqual(user.name);
  expect(returnedUser.email).toEqual(user.email);
});
});