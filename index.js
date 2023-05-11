require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Anecdote = require('./models/anecdotes')

app.use(express.static('build'))
morgan.token('body', (req) => JSON.stringify(req.body))
const logger = morgan(':method :url :status -- :response-time ms :body')
app.use(express.json())
app.use(logger)
app.use(cors())

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/api/anecdotes', (request, response) => {
  Anecdote.find({}).then((anecdote) => {
    response.json(anecdote)
  })
})

app.post('/api/anecdotes', (request, response, next) => {
  const body = request.body

  const anecdote = new Anecdote({
    content: body.content,
    votes: body.votes,
  })

  anecdote
    .save()
    .then((savedAnecdote) => {
      response.json(savedAnecdote)
    })
    .catch((error) => next(error))
})

app.put('/api/anecdotes/:id', (request, response, next) => {
  const body = request.body
  const anecdote = {
    content: body.content,
    votes: body.votes,
  }
  Anecdote.findByIdAndUpdate(request.params.id, anecdote, {
    new: true,
  })
    .then((result) => {
      response.json(result)
    })
    .catch((error) => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'Unknown endpoint' })
}

if (process.env.NODE_ENV === 'test') {
  const testingRouter = require('./models/testing')
  app.use('/api/testing', testingRouter)
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'ID format not recognized' })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
module.exports = app
