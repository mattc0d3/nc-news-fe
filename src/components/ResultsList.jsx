import { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import { getArticles } from '../utils/apis'
import ArticlePreview from './ArticlePreview'
import ClipLoader from "react-spinners/ClipLoader";

const ResultsList = ({ allTopics, topic = null, order, sortBy }) => {
    const [searchResults, setSearchResults] = useState([])
    const [resultsPage, setResultsPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getArticles(resultsPage, topic, order, sortBy).then(data => {
            setSearchResults(data.articles)
            setTotalPages(Math.floor(data.totalArticles / 10))
            setIsLoading(false)
        })
    }, [resultsPage, topic, order, sortBy])

    // useEffect(() => {
    //     setSearchResults(currentResults => {
    //         console.log(currentResults)
    //         return currentResults.sort((a, b) => (a[sortBy] > b[sortBy]) ? 1 : (a[sortBy] < b[sortBy]) ? -1 : 0)
    //     })
    // }, [sortBy])


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