import { ArticleDetail } from "../components/pages/ArticleDetail";
import { ArticleList } from "../components/pages/ArticleList";
import { EditArticl } from "../components/pages/EditArticle";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <ArticleList />
  },
  {
    path: "/editArticle",
    exact: false,
    children: <EditArticl />
  },
  {
    path: "/articleDetail",
    exact: false,
    children: <ArticleDetail />
  },
];
