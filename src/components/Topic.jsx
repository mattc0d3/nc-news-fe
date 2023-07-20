import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticles } from '../utils/apis'
import ArticlePreview from './ArticlePreview'
import ResultsList from './ResultsList'

const Topic = ({ allTopics }) => {
    const params = useParams()

    return <section className="">
        <h3 className="articles-header">{params.topic} Articles</h3>
        < ResultsList allTopics={allTopics} topic={params.topic} />
    </section>
}

export default Topic