import axios from 'axios'

const getTopics = () => {
    return axios.get('https://nc-news-api-45fk.onrender.com/api/topics')
        .then(res => res.data.topics)
}

export default getTopics