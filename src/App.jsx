import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Home from './components/Home'
import Article from './components/Article'
import Topic from './components/Topic'
import {getTopics} from './utils/apis'

function App() {
  const [allTopics, setAllTopics] = useState([])

  useEffect(() => {
    getTopics().then(data => {
      setAllTopics(data)
    })
  }, [])

  return (
    <main id="app-container">
      < NavBar />
      < Header />
      < Routes >
        < Route path="/" element={< Home allTopics={allTopics}/>} />
        < Route path="/articles/:article_id" element={<Article />} />
        < Route path="/:topic" element={<Topic allTopics={allTopics}/>} />
      </Routes>
    </main>
  )
}

export default App
