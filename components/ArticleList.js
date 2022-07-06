import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'

export const ArticleList = ({articles}) => {
  return (
    <div className={articleStyles.grid} >
        {articles.map(article => (
        <h3>{article.title}</h3>
        ))}
    </div>
  )
}

export default ArticleItem;