import ResultsList from './ResultsList';

const Home = ({ allTopics }) => {
    return <section id="">
        <h3 className="articles-header">Recent Articles:</h3>
        < ResultsList allTopics={allTopics} />
    </section>
}


export default Home