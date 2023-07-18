const CommentCard = ({ comment }) => {
    return <li>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
    </li>
}

export default CommentCard