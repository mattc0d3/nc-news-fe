import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticleById } from '../utils/apis'
import convertDate from '../utils/convertDate'
import ClipLoader from "react-spinners/ClipLoader";

const Article = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [currentArticle, setCurrentArticle] = useState({
        "title": "",
        "topic": "",
        "author": "",
        "created_at": "",
        "votes": "",
        "article_img_url": "",
        "body": "",
        "comment_count": ""
    })
    const params = useParams()


    useEffect(() => {
        getArticleById(params.article_id)
            .then(article => {
                setCurrentArticle(article)
                setIsLoading(false)
            })
    }, [params.article_id])

    if (isLoading) {
        return <section className="page-content">
            <p>Loading...</p>
            <ClipLoader
                color={"red"}
                loading={isLoading}
                size={60}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </section>
    }
    else {
        return <section className="page-content">
            <div className="article-container">
                <h3 className="article-title">{currentArticle.title}</h3>
                <p>{currentArticle.author}</p>
                <img className="article-img" src={currentArticle.article_img_url} alt={currentArticle.title} />
                <p>{convertDate(currentArticle.created_at)}</p>
                <p className="article-body">{currentArticle.body}</p>
            </div>
        </section>
    }
}

export default Article