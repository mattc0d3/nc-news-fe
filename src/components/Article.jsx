import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticleById, patchArticleById } from '../utils/apis'
import convertDate from '../utils/convertDate'
import ClipLoader from "react-spinners/ClipLoader";
import CommentsList from './CommentsList'

const Article = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [commentsExpanded, setCommentsExpanded] = useState(false)
    const [userVotes, setUserVotes] = useState(0)
    const [isVoteError, setIsVoteError] = useState(false)
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

    const downvote = () => {
        setUserVotes(currentUserVotes => {
            return currentUserVotes - 1
        })
        patchArticleById(params.article_id, -1)
            .catch(err => {
                setUserVotes(currentUserVotes => {
                    return currentUserVotes + 1
                })
                setIsVoteError(true)
            })
    }

    const upvote = () => {
        setUserVotes(currentUserVotes => {
            return currentUserVotes + 1
        })
        patchArticleById(params.article_id, 1)
            .catch(err => {
                setUserVotes(currentUserVotes => {
                    return currentUserVotes - 1
                })
                setIsVoteError(true)
            })
    }

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
            <div className="vote-bar">
                <button aria-label="downvote article" onClick={downvote} disabled={userVotes < 0} className={userVotes < 0 ? "downvoted" : ""} >-</button>
                <p>{currentArticle.votes + userVotes}</p>
                <button aria-label="upvote article" onClick={upvote} disabled={userVotes > 0} className={userVotes > 0 ? "upvoted" : ""} >+</button>
                </div>
                {isVoteError ? <p className="vote-error">Something went wrong!</p> : null}
            <div className="article-container">
                <h3 className="article-title">{currentArticle.title}</h3>
                <p>{currentArticle.author}</p>
                <img className="article-img" src={currentArticle.article_img_url} alt={currentArticle.title} />
                <p>{convertDate(currentArticle.created_at)}</p>
                <p className="article-body">{currentArticle.body}</p>
            </div>
            <div className="comments-dropdown">
                <button className='show-comments-button' onClick={() => setCommentsExpanded(!commentsExpanded)}> show comments {commentsExpanded ? '-' : '+'}</button>
                {commentsExpanded && < CommentsList article_id={params.article_id} />}
            </div>
        </section>
    }
}

export default Article