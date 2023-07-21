import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ResultsList from './ResultsList'
import SortOptions from './SortOptions'

const Home = ({ allTopics }) => {
    const params = useParams()
    const [order, setOrder] = useState("desc")
    const [sortBy, setSortBy] = useState("created_at")

    return <section id="">
        <div className="articles-header-container">
            <h3 className="articles-header">{params.topic ? params.topic : "Recent"} Articles:</h3>
            < SortOptions order={order} setOrder={setOrder} sortBy={sortBy} setSortBy={setSortBy} topic={params.topic} />
        </div>
        < ResultsList allTopics={allTopics} topic={params.topic} order={order} sortBy={sortBy}/>
    </section>
}


export default Home