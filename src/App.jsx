import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id="app-container">
      < NavBar />
      < Header />
      < Routes >
        < Route path="/" element={< Home />} />
      </Routes>
      < SearchBar />
    </main>
  )
}

export default App
