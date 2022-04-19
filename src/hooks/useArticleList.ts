import axios from "axios";
import { useCallback, useState } from "react";
import { Article } from "../types/article";

axios.defaults.headers.get['Access-Control-Allow-Origin'] = "*"

export const useArticleList = () => {
  const [ articleList, setArticleList ] = useState<Array<Article>>([]);

  const getArticleList = useCallback(async () => {
    const response = await axios.get("http://localhost:5001/nest-simpleblog/asia-northeast1/api/articles");
    console.log(response.data);
    setArticleList(response.data);
  },[])
  return { articleList, getArticleList }
}
