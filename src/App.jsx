import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Article from './components/Article'
import ErrorPage from './components/ErrorPage'
import User from './components/User'
import { getTopics } from './utils/apis'
import ResultsList from './components/ResultsList'

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
        < Route path="users/:username/articles" element={<ResultsList />} />
      </Routes>
    </main>
  )
}

export default App
