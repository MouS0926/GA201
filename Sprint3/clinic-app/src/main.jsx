import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './Redux/store.js'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <BrowserRouter>
     <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </ChakraProvider>,
)
