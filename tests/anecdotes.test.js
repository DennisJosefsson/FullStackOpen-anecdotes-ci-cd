const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../index')
const helper = require('./test_helper')
const api = supertest(app)

const Anecdote = require('../models/anecdotes')

beforeEach(async () => {
  await Anecdote.deleteMany({})

  await Anecdote.insertMany(helper.initialAnecdotes)
})

describe('Test of anecdote function', () => {
  test('anecdotes are returned as json', async () => {
    await api
      .get('/api/anecdotes')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })
  test('there are two anecdotes', async () => {
    const response = await api.get('/api/anecdotes')

    expect(response.body).toHaveLength(helper.initialAnecdotes.length)
  })
})

afterAll(async () => {
  await mongoose.connection.close()
})
