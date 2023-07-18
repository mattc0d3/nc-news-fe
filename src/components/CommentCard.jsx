const CommentCard = ({ comment }) => {
    return <li className="comment-card">
        <p>{comment.body}</p>
        <p className="comment-author">{comment.author}</p>
    </li>
}

export default CommentCard