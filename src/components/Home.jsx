import { useParams } from 'react-router-dom'
import { useState } from 'react'
import ResultsList from './ResultsList'
import SortOptions from './SortOptions'

const Home = ({ allTopics }) => {
    const params = useParams()
    const [order, setOrder] = useState("DESC")
    const [sortBy, setSortBy] = useState("date")

    console.log(order, "<<<< order")

    return <section id="">
        <div className="articles-header">
        <h3>{params.topic ? params.topic : "Recent"} Articles:</h3>
        < SortOptions order={order} setOrder={setOrder} sortBy={sortBy} setSortBy={setSortBy} />
        </div>
        < ResultsList allTopics={allTopics} topic={params.topic} order={order} sortBy={sortBy} />
    </section>
}


export default Home