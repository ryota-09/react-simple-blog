import { useEffect } from "react"
import { useArticleList } from "../../hooks/useArticleList"

export const ArticleList = () => {
  const { articleList, getArticleList } = useArticleList();
  useEffect(() => {
    getArticleList();
  },[])
  return (
    <>
    <h1>タイトル</h1>
    {articleList.map((article) => (
      <p key={article.id}>{ article.title }</p>
    ))}
    </>
  )
}
