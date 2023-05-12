import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './reducers/store'
import { Provider } from 'react-redux'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
)
