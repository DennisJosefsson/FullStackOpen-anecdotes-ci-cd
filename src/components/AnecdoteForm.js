import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import {
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Button,
  Box,
} from '@chakra-ui/react'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(anecdote))
    dispatch(setNotification(`Added '${anecdote}'`, 5))
  }

  return (
    <Box
      m="1"
      p="2"
      w={756}
      h="auto"
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
    >
      <Text fontWeight="bold" m="1">
        Create new
      </Text>
      <form onSubmit={createAnecdote}>
        <InputGroup>
          <Input name="anecdote" />
          <InputRightElement width="4.5rem">
            <Button
              type="submit"
              size="sm"
              borderColor="black"
              border="1px"
              m="1"
            >
              Create
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  )
}

export default AnecdoteForm
