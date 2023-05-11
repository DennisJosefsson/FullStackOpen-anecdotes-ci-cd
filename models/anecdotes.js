const mongoose = require('mongoose')
require('dotenv').config()

mongoose.set('strictQuery', false)

const url =
  process.env.NODE_ENV === 'test'
    ? process.env.MONGODB_TEST_URI
    : process.env.MONGODB_URI

console.log('connecting to', url)

mongoose
  .connect(url)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const anecdoteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 3,
    required: true,
  },
  votes: {
    type: Number,
  },
})

anecdoteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

module.exports = mongoose.model('Anecdote', anecdoteSchema)
