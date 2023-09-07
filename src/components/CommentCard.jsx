import convertDate from "../utils/convertDate"
import compareDate from "../utils/compareDate"
import { UserContext } from "../contexts/User"
import { useContext, useState } from "react"
import { deleteComment } from "../utils/apis"
import { Link } from 'react-router-dom'

const CommentCard = ({ comment, setComments, deletingComment, setDeletingComment }) => {
    const { user, setUser } = useContext(UserContext)
    const [isError, setIsError] = useState(false)
    const [deleteButtonText, setDeleteButtonText] = useState("Delete")

    const confirmDelete = (e) => {
        if (confirm("Delete comment?")) {
            setDeletingComment(true)
            setDeleteButtonText("Deleting...")
            deleteComment(comment.comment_id).then(() => {
                setDeletingComment(false)
                setComments(currentComments => {
                    return currentComments.filter(currentComment => currentComment.comment_id !== comment.comment_id)
                })
            })
                .catch(err => {
                    setIsError(true)
                    setComments(currentComments => {
                        return [comment, ...currentComments]
                    })
                    setDeletingComment(false)
                })
        }
    }

    return <li className="comment-card">
        <p>{comment.body}</p>
        <div className="comment-info">
            <p className="comment-author"><Link to={`/users/${comment.author}`}>{comment.author}</Link></p>
            {comment.author === user && <button className="delete-comment-button" onClick={confirmDelete} disabled={deletingComment}>{deleteButtonText}</button>}
            <p>Posted {compareDate(convertDate(comment.created_at))}</p>
        </div>
        {isError && <p className="error-message">Something went wrong, please try again!</p>}
    </li>
}

export default CommentCard