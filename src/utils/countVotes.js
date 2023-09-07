export const countVotes = (articles, comments) => {
    const articleVotes = articles.reduce((total, current) => total + current.votes, 0)
    const commentVotes = comments.reduce((total, current) => total + current.votes, 0)
    return articleVotes + commentVotes
}