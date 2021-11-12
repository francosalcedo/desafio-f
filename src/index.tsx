import './styles/index.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import App from './App'

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App></App>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
