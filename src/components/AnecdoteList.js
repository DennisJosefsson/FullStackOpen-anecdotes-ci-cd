import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    return anecdotes.filter((anecdote) => {
      return anecdote.content.toLowerCase().includes(filter.toLowerCase())
    })
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id)
    dispatch(voteAnecdote(anecdote))
    dispatch(setNotification(`Voted for '${anecdote.content}'`, 5))
  }
  return (
    <div>
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <div
            key={anecdote.id}
            style={{
              padding: 5,
              backgroundColor: '#b4cce0',
              margin: 5,
              borderRadius: 5,
            }}
          >
            <div>{anecdote.content}</div>
            <div>
              Anecdote has {anecdote.votes} votes
              <button
                className="btn"
                style={{
                  backgroundColor: '#5ed162',
                  border: 'none',
                  color: 'white',
                  padding: '5px 10px',
                  textAlign: 'center',

                  display: 'inline-block',
                  fontSize: 16,
                  borderRadius: 5,
                  margin: 5,
                }}
                onClick={() => vote(anecdote.id)}
              >
                vote
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
