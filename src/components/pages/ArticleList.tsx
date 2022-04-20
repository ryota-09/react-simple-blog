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
          key={article.id}
          id={article.id}
          h1tag={article.h1tag}
          lead={article.lead}
          category={article.category}
          imgPath={article.imgPath}
          date={article.date}
        />
      ))}
    </>
  );
};
