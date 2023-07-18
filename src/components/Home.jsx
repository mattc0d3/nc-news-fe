import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { getArticles } from '../utils/apis'
import ArticlePreview from './ArticlePreview'

const Home = ({ topics }) => {
    const [searchResults, setSearchResults] = useState([])
    const [resultsPage, setResultsPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles(resultsPage).then(data => {
            setSearchResults(data.articles)
            setTotalPages(Math.floor(data.totalArticles / 10))
            setIsLoading(false)
        })
    }, [resultsPage])

    const incrementPage = () => {
        if (resultsPage < totalPages) setResultsPage(resultsPage + 1)
    }

    const decrementPage = () => {
        if (resultsPage > 1) setResultsPage(resultsPage - 1)
    }

    if (isLoading) return <p>Loading...</p>
    else return <section className="page-content">
        <h3 id="recent-articles-header">Recent Articles:</h3>
        <ul className="results-list">
            {searchResults.map(result => {
                return < ArticlePreview key={result.article_id} article={result} />
            })}
        </ul>
        <div className='page-nav'>
            <button onClick={decrementPage}>-</button>
            <p>page {resultsPage} of {totalPages}</p>
            <button onClick={incrementPage}>+</button>
        </div>
        < SearchBar topics={topics} />
    </section>
}


export default Home