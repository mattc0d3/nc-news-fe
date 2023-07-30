import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { getArticles } from '../utils/apis'
import ArticlePreview from './ArticlePreview'
import ClipLoader from "react-spinners/ClipLoader";
import ErrorPage from './ErrorPage'

const ResultsList = ({ allTopics, topic = null, order, sortBy }) => {
    const [searchResults, setSearchResults] = useState([])
    const [resultsPage, setResultsPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setError(null)
        getArticles(resultsPage, topic, order, sortBy).then(data => {
            setSearchResults(data.articles)
            setTotalPages(Math.floor(data.totalArticles / 10))
            setIsLoading(false)
        })
        .catch(err => {
            setError(err.response)
            setIsLoading(false)
        })
    }, [resultsPage, topic, order, sortBy])

    const incrementPage = () => {
        if (resultsPage < totalPages) setResultsPage(resultsPage + 1)
    }

    const decrementPage = () => {
        if (resultsPage > 1) setResultsPage(resultsPage - 1)
    }


    if (isLoading) {
        return <div className='loading-screen'>
            <ClipLoader
                color={"red"}
                loading={isLoading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    }
    else if (error)return < ErrorPage status={error.status} message={error.data.msg}/>
    else return <section id="results">
        <ul className="results-list">
            {searchResults.map(result => {
                return < ArticlePreview key={result.article_id} article={result} />
            })}
        </ul>
        <div id="filter-container">
        < SearchBar allTopics={allTopics} />
        <div className='page-nav'>
            <button onClick={decrementPage} disabled={resultsPage===1} >-</button>
            <p id="page-number"><span id="page-span">page</span> {resultsPage} of {totalPages}</p>
            <button onClick={incrementPage} disabled={resultsPage===totalPages} >+</button>
        </div>
        </div>
    </section>
}

export default ResultsList