import articles from "./data"
import ArticleItem from "./components/ArticleItem"
import { useEffect, useState } from "react"

const getThemeLocalStorage = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
    return theme
  }
  return theme
}

const App = () => {
  const [theme, setTheme] = useState(getThemeLocalStorage())

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
      return
    }
    setTheme("light-theme")
  }

  return (
    <section className="app">
      <header className="header">
        <h1 className="title">Overreacted</h1>
        {/* <button className="btn-toggle" onClick={toggleTheme}>
          toggle
        </button> */}

        <div
          className={`toggler ${theme === "dark-theme" && "active"}`}
          onClick={toggleTheme}
        >
          <div
            className={`toggler-circle ${theme === "dark-theme" && "active"}`}
          ></div>
        </div>
      </header>
      <div className="article-container">
        {articles.map((article) => {
          const { id } = article
          return <ArticleItem key={id} article={article} />
        })}
      </div>
    </section>
  )
}
export default App
