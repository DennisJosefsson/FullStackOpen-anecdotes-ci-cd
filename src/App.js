import { useEffect } from 'react'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#fcba03',
        padding: 5,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        width: 800,
        minHeight: '100vh',
      }}
    >
      <div style={{ backgroundColor: 'white', padding: 5 }}>
        <h2>Anecdotes</h2>
        <Notification />
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
      </div>
    </div>
  )
}

export default App
