import axios from 'axios'

const api = axios.create({ baseURL: 'https://nc-news-api-45fk.onrender.com/api' })

export const getArticles = (resultsPage = 1, topic = null, order = "desc", sortBy = "created_at", author = null) => {
    const params = {
        p: resultsPage,
        total_count: true,
        sort_by: sortBy,
        order: order
    }
    if (topic) params.topic = topic
    if (author) params.author = author
    return api.get(`/articles`, { params })
    .then(res => res.data)
}

export const getArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`).then(res => res.data.article)
}

export const getTopics = () => {
    return api.get('/topics').then(res => res.data.topics)
}

export const getCommentsByArticleId = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then(res => res.data)
}

export const postComment = (body, article_id, username) => {
    return api.post(`/articles/${article_id}/comments`, {
        body: body,
        username: username
    }).then(res => {
        return res.data.comment
    })
}

export const patchArticleById = (article_id, inc_votes) => {
    return api.patch(`/articles/${article_id}`, { inc_votes })
}

export const deleteComment = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
}

export const getUserByUsername = (username) => {
    return api.get(`users/${username}`)
        .then(res => res.data)
}

export const getCommentsByUser = (username) => {
    return api.get(`users/${username}/comments`)
        .then(res => res.data)
}