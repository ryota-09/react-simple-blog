import { ArticleDetail } from "../components/pages/ArticleDetail";
import { ArticleList } from "../components/pages/ArticleList";
import { EditArticle } from "../components/pages/EditArticle";
import { UpdateArticle } from "../components/pages/UpdateArticle";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <ArticleList />
  },
  {
    path: "/editArticle",
    exact: false,
    children: <EditArticle />
  },
  {
    path: "/articleDetail/:id",
    exact: false,
    children: <ArticleDetail />
  },
  {
    path: "/updateArticle/:id",
    exact: false,
    children: <UpdateArticle />
  },
];
