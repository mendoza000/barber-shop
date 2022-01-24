import React from 'react'
import ReactDOM from 'react-dom'
import 'boxicons'
import 'animate.css'
import 'normalize.css'

import {BarberRouter} from './components/routers/BarberRouter'
import './styles/styles.scss'

ReactDOM.render(
  <BarberRouter />,
  document.getElementById('root')
)
