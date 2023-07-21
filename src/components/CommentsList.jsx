import { useState, useEffect } from "react"
import { getCommentsByArticleId } from "../utils/apis"
import CommentCard from "./CommentCard"

const CommentsList = ({ article_id, comments, setComments }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [deletingComment, setDeletingComment] = useState(false)

    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then(res => {
                setComments(res.comments)
                setIsLoading(false)
            })
    }, [deletingComment])

    if (isLoading) return <p>Loading comments...</p>
    else return <ul id="comments-list" >
        {comments.map(comment => {
            return < CommentCard key={comment.comment_id} comment={comment} setComments={setComments} setDeletingComment={setDeletingComment} />
        })}
    </ul>
}

export default CommentsList