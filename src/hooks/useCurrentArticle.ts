import axios from "axios";
import { useCallback, useState } from "react";
import { Article } from "../types/article";

export const useCurrentArticle = () => {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const getArticleById = useCallback(async (id: string) => {
    const response = await axios.get<Article>(
      "http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles/" + id
    );
    setCurrentArticle(
      new Article(
        response.data.id,
        response.data.h1tag,
        response.data.lead,
        response.data.body,
        response.data.imgPath,
        response.data.category,
        response.data.date
      )
    );
  }, []);
  return { currentArticle, getArticleById };
};
