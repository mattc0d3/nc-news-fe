import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getArticleById } from '../utils/apis'
import convertDate from '../utils/convertDate'
import ClipLoader from "react-spinners/ClipLoader";
import CommentsList from './CommentsList'
import NewComment from './NewComment';

const Article = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [comments, setComments] = useState([])
    const [commentsExpanded, setCommentsExpanded] = useState(false)
    const [commentWindowOpen, setCommentWindowOpen] = useState(false)
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
            <button className='add-comment-button' onClick={() => setCommentWindowOpen(true)} disabled={commentWindowOpen}>Add comment</button>
            {commentWindowOpen ? < NewComment setCommentWindowOpen={setCommentWindowOpen} setComments={setComments} article_id={params.article_id} setCommentsExpanded={setCommentsExpanded}/> : null}
            </div>
            <div className="comments-dropdown">
                <button className='show-comments-button' onClick={() => setCommentsExpanded(!commentsExpanded)}> show comments {commentsExpanded ? '-' : '+'}</button>
                {commentsExpanded && < CommentsList article_id={params.article_id} comments={comments} setComments={setComments}/>}
            </div>
        </section>
    }
}

export default Article