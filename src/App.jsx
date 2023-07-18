import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './components/Home'
import Article from './components/Article'
import {getTopics} from './utils/apis'

function App() {
  const [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics().then(data => {
      setTopics(data)
    })
  }, [])

  return (
    <main id="app-container">
      < NavBar />
      < Header />
      < Routes >
        < Route path="/" element={< Home topics={topics}/>} />
        < Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </main>
  )
}

export default App
