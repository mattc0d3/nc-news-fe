import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

const SearchBar = ({ allTopics }) => {
    const navigate = useNavigate()
    const [topic, setTopic] = useState("")

    const filterTopic = (e) => {
        e.preventDefault()
        if (topic) navigate(`/${topic}`)
    }

    return <section id="searchbar-container">
        <form id="searchbar" onSubmit={filterTopic}>
            <label htmlFor="topic-filter-dropdown">Filter by Topic: </label>
            <select name="topic" id="topic-filter-dropdown" value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option></option>
                {allTopics.map(topic => {
                    return <option key={topic.slug} value={topic.slug}>{topic.slug}</option>
                })}
            </select>
            <button>Search</button>
        </form>
    </section>
}

export default SearchBar