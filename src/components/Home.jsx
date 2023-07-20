import ResultsList from './ResultsList';
import { useParams } from 'react-router-dom'

const Home = ({ allTopics }) => {
    const params = useParams()
    
    return <section id="">
        <h3 className="articles-header">{params.topic ? params.topic : "Recent"} Articles:</h3>
        < ResultsList allTopics={allTopics} topic={params.topic} />
    </section>
}


export default Home