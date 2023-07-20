import { useState, useContext, useEffect } from "react"
import { UserContext } from "../contexts/User"
import { postComment } from "../utils/apis"
import ClipLoader from "react-spinners/ClipLoader";

const NewComment = ({ setCommentWindowOpen, setComments, article_id, setCommentsExpanded }) => {

    const { user, setUser } = useContext(UserContext)
    const [newComment, setNewComment] = useState("")
    const [postSuccess, setPostSuccess] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        postComment(newComment, article_id, user).then(postedComment => {
            setComments(currentComments => {
                return [postedComment, ...currentComments]
            })
            setNewComment("")
            setIsError(false)
            setIsLoading(false)
            setPostSuccess(true)
            setTimeout(() => {
                setCommentWindowOpen(false)
                setCommentsExpanded(true)
            }, 1000)
        })
        .catch(err => {
            setIsError(true)
            setIsLoading(false)
        })
    }

    return <div id="new-comment-window">
        <button className="close-window-button" onClick={() => setCommentWindowOpen(false)}>X</button>
        <form id="new-comment-form" onSubmit={handleSubmit}>
            <label htmlFor="new-comment">Add new comment: </label>
            <textarea name="new-comment" id="new-comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} ></textarea>
            {postSuccess ? <p id="post-comment-success-message">Post Successful!</p> : <button id="post-comment-button" disabled={!newComment.length || isLoading}>{isLoading ? <ClipLoader
                color={"red"}
                loading={isLoading}
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : "Post Comment"}</button>}
            {isError ? <p className="error-message">Something went wrong, please try again!</p> : null}
        </form>
    </div>
}

export default NewComment