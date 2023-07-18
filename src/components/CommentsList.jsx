import { useState, useEffect } from "react"
import { getCommentsByArticleId } from "../utils/apis"
import CommentCard from "./CommentCard"

const CommentsList = ({article_id}) => {

    const [comments, setComments] = useState([])
    
    useEffect(() => {
        getCommentsByArticleId(article_id)
            .then(res => {
                console.log(res, "<<<< comments")
                setComments(res.comments)
                console.log(comments)
            })
    }, [])

    return <ul>
        {comments.map(comment => {
            return < CommentCard key={comment.comment_id} comment={comment} />
        })}
    </ul>
}

export default CommentsList