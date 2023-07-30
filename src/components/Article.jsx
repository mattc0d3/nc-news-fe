import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticleById, patchArticleById } from '../utils/apis'
import convertDate from '../utils/convertDate'
import ClipLoader from "react-spinners/ClipLoader";
import CommentsList from './CommentsList'
import NewComment from './NewComment';
import ErrorPage from './ErrorPage';
import LogInDisplay from './LogInDisplay';

const Article = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [commentsExpanded, setCommentsExpanded] = useState(false)
    const [commentWindowOpen, setCommentWindowOpen] = useState(false)
    const [userVotes, setUserVotes] = useState(0)
    const [error, setError] = useState(null)
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
            .catch(err => {
                setError(err.response)
                setIsLoading(false)
            })
    }, [params.article_id])

    const vote = (increment) => {
        setUserVotes(currentUserVotes => {
            return currentUserVotes + increment
        })
        patchArticleById(params.article_id, increment)
            .catch(err => {
                setUserVotes(currentUserVotes => {
                    return currentUserVotes + increment
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
    else if (error) return < ErrorPage status={error.status} message={error.data.msg}/>
    else {
        return <section className="page-content">
            < LogInDisplay />  
            <div className="vote-bar">
                <button aria-label="downvote article" onClick={() => vote(-1)} disabled={userVotes < 0} className={userVotes < 0 ? "downvoted" : ""} >-</button>
                <p>{currentArticle.votes + userVotes}</p>
                <button aria-label="upvote article" onClick={() => vote(1)} disabled={userVotes > 0} className={userVotes > 0 ? "upvoted" : ""} >+</button>
            </div>
            {isVoteError ? <p className="vote-error">Something went wrong!</p> : null}
            <div className="article-container">
                <h3 className="article-title">{currentArticle.title}</h3>
                <p className="article-author">{currentArticle.author}</p>
                <img className="article-img" src={currentArticle.article_img_url} alt={currentArticle.title} />
                <p className="article-date">{convertDate(currentArticle.created_at)}</p>
                <p className="article-body">{currentArticle.body}</p>
            <button className='add-comment-button' onClick={() => setCommentWindowOpen(true)} disabled={commentWindowOpen}>Add comment</button>
            {commentWindowOpen ? < NewComment setCommentWindowOpen={setCommentWindowOpen} setComments={setComments} article_id={params.article_id} setCommentsExpanded={setCommentsExpanded}/> : null}
            
            <div className="comments-dropdown">
            <button className='show-comments-button' onClick={() => setCommentsExpanded(!commentsExpanded)}>{commentsExpanded ? 'hide' : `show ${currentArticle.comment_count}` } comments </button>
                {/* <button className='show-comments-button' onClick={() => setCommentsExpanded(!commentsExpanded)}> show comments {commentsExpanded ? '-' : '+'}</button> */}
                {commentsExpanded && < CommentsList article_id={params.article_id} comments={comments} setComments={setComments}/>}
            </div>
            </div>
        </section>
    }
}

export default Article