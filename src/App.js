import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import { Box, Text } from '@chakra-ui/react'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <Box
      backgroundColor="gray.50"
      maxW="960px"
      mx="auto"
      display="flex"
      alignItems="baseline"
      justifyContent="center"
    >
      <Box
        m={[2, 3]}
        p="10"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Text
          fontSize="2em"
          textAlign={['left', 'center']}
          fontWeight="extrabold"
        >
          Anecdotes
        </Text>
        <Notification />
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
      </Box>
    </Box>
  )
}

export default App
