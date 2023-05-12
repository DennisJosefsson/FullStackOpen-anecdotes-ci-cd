import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
import { Box, Input, Text } from '@chakra-ui/react'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const filter = event.target.value
    dispatch(filterChange(filter))
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
      <Text fontWeight="bold"> Filter</Text> <Input onChange={handleChange} />
    </Box>
  )
}

export default Filter
