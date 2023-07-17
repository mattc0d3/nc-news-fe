import axios from 'axios'

const api = axios.create({ baseURL: 'https://nc-news-api-45fk.onrender.com/api'})

export const getArticles = (resultsPage) => {
    return api.get(`/articles?p=${resultsPage}&total_count=true`).then(res => res.data)
}