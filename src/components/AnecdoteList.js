import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { Box, Button, Text } from '@chakra-ui/react'

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
    <Box display="flex" alignItems="baseline" flexDirection="column">
      {anecdotes
        .sort((a, b) => b.votes - a.votes)
        .map((anecdote) => (
          <Box
            m="1"
            p="2"
            h="auto"
            w={756}
            border="1px"
            borderColor="gray.200"
            borderRadius="lg"
            key={anecdote.id}
            display="flex"
            flexDirection="column"
          >
            <Box>
              <Text fontSize="1rem" fontStyle="italic">
                {anecdote.content}
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Text fontWeight="lighter">
                  Anecdote has {anecdote.votes} votes
                </Text>
              </Box>
              <Box>
                <Button
                  size="sm"
                  borderColor="black"
                  border="1px"
                  m="1"
                  className="btn"
                  onClick={() => vote(anecdote.id)}
                >
                  Vote
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
    </Box>
  )
}

export default AnecdoteList
