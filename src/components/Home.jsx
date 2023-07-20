import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ResultsList from './ResultsList'

const Home = ({ allTopics }) => {
    const params = useParams()

    return <section id="">
        <div className="articles-header">
        <h3>{params.topic ? params.topic : "Recent"} Articles:</h3>
        </div>
        < ResultsList allTopics={allTopics} topic={params.topic} />
    </section>
}


export default Home