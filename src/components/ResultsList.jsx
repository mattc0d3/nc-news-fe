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
    console.log(error, "<<<<< error")

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
        <div className='page-nav'>
            <button onClick={decrementPage}>-</button>
            <p>page {resultsPage} of {totalPages}</p>
            <button onClick={incrementPage}>+</button>
        </div>
        < SearchBar allTopics={allTopics} />
    </section>
}

export default ResultsList