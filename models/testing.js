const testingRouter = require('express').Router()
const Anecdote = require('./anecdotes')

testingRouter.post('/reset', async (request, response) => {
  await Anecdote.deleteMany({})

  response.status(204).end()
})

module.exports = testingRouter
