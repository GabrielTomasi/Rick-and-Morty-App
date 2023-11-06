import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { GlobalStyle } from './styled-components/LoginForm.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <BrowserRouter>
  <GlobalStyle/>
    <App />
  </BrowserRouter>
  </Provider>
)
