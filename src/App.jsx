import React from 'react'
import './App.css'
import { HomePage } from './Pages'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <HomePage />
    </div>
  )
}

export default App
