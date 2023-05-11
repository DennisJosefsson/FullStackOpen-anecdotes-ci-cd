const Anecdote = require('../models/anecdotes')

const initialAnecdotes = [
  {
    content: 'Just a random anecdote',
    votes: 2,
  },
  {
    content: 'Another random anecdote',

    votes: 5,
  },
]

const anecdotesInDb = async () => {
  const anecdotes = await Anecdote.find({})
  return anecdotes.map((anecdote) => anecdote.toJSON())
}

module.exports = {
  initialAnecdotes,
  anecdotesInDb,
}
