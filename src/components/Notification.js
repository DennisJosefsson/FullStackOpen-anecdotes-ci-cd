import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector((state) => state.message)
  if (notification === '') {
    return null
  }

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#5ed162',
    margin: 5,
  }
  return <div style={style}>{notification}</div>
}

export default Notification
