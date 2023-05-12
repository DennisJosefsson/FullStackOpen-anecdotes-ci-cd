import { useSelector } from 'react-redux'
import { Alert, AlertIcon, Box } from '@chakra-ui/react'

const Notification = () => {
  const notification = useSelector((state) => state.message)
  if (notification === '') {
    return null
  }

  return (
    <Box width={756}>
      <Alert status="info">
        <AlertIcon />
        {notification}
      </Alert>
    </Box>
  )
}

export default Notification
