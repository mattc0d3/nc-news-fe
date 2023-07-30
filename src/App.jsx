import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Article from './components/Article'
import ErrorPage from './components/ErrorPage'
import User from './components/User'
import { getTopics } from './utils/apis'

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
      < Routes >
        < Route path="/" element={< Home allTopics={allTopics} />} />
        < Route path="/articles/:article_id" element={<Article />} />
        < Route path="/:topic" element={<Home allTopics={allTopics} />} />
        < Route path="*" element={<ErrorPage />} />
        < Route path="/users/:username" element={<User />} />
      </Routes>
    </main>
  )
}

export default App
