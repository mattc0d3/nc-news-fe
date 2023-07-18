import { Link } from 'react-router-dom'

const ArticlePreview = ({ article }) => {
    return <Link to={`/articles/${article.article_id}`}>
        <li className="article-preview">
            <p className="preview-title">{article.title}</p>
            <img className="preview-img" src={article.article_img_url} alt={article.title} />
            <p className="preview-author">{article.author}</p>
        </li>
    </Link>
}

export default ArticlePreview