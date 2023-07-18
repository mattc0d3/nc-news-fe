import convertDate from "../utils/convertDate"
import compareDate from "../utils/compareDate"

const CommentCard = ({ comment }) => {
    return <li className="comment-card">
        <p>{comment.body}</p>
        <p className="comment-author">{comment.author}</p>
        <p>Posted {compareDate(convertDate(comment.created_at))}</p>
    </li>
}

export default CommentCard