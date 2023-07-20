import axios from 'axios'

const api = axios.create({ baseURL: 'https://nc-news-api-45fk.onrender.com/api'})

export const getArticles = (resultsPage) => {
    return api.get(`/articles?p=${resultsPage}&total_count=true`).then(res => res.data)
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

export const patchArticleById = (article_id, inc_votes) => {
    return api.patch(`/articles/${article_id}`, {inc_votes})
}