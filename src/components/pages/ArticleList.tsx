import { useEffect } from "react";
import { useArticleList } from "../../hooks/useArticleList";

import { ArticleCard } from "../organisms/ArticleCard";
import { Header } from "../organisms/Header";

export const ArticleList = () => {
  const { articleList, getArticleList } = useArticleList();
  useEffect(() => {
    getArticleList();
  }, []);
  return (
    <>
      <Header />
      {articleList.map((article) => (
        <ArticleCard
          id={article.id}
          title={article.title}
          body={article.body}
          category={article.category}
          date={article.date}
        />
      ))}
    </>
  );
};
