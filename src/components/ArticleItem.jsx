import moment from "moment"
const ArticleItem = ({ article }) => {
  const { title, date, length, snippet } = article
  //   console.log(date)
  return (
    <article className="article">
      <h1 className="article-title">{title}</h1>
      <div className="date-time-container">
        <p className="date">{moment(date).format("dddd Do YYYY")}</p>
        <p className="read-length">{length} min read</p>
      </div>
      <p className="snippet">{snippet}</p>
    </article>
  )
}
export default ArticleItem
