const ArticlePreview = ({ article }) => {
    return <li className="article-preview">
        <p className="preview-title">{article.title}</p>
        <img className="preview-img" src={article.article_img_url} alt={article.title} />
        <p className="preview-author">{article.author}</p>
    </li>
}

export default ArticlePreview