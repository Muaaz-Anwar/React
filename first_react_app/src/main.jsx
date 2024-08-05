import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'
import Todo from './components/todo/Todo.jsx'
import Clock from './components/clock/Clock.jsx'
import Fregment from './components/fregments/Fregment.jsx'
import Parent from './components/children_props/Parent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Todo />
    <Clock />
    <Fregment />
    <Parent />
  </React.StrictMode>,
)
