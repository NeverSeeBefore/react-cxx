import Home from "./pages/Home";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import NewsHome from "./pages/NewsHome";
import NewsSearch from "./pages/NewsSearch";

export default [
  {
    path: "/",
    name: "home",
    exact: true,
    component: Home
  },
  {
    path: "/news",
    name: "news",
    exact: false,
    component: News,
    children: [
      {
        path: "/news/home",
        name: "newsHome",
        exact: true,
        component: NewsHome
      },
      {
        path: "/news/detail",
        name: "newsDetail",
        exact: true,
        component: NewsDetail
      },
      {
        path: "/news/search",
        name: "newsSearch",
        exact: true,
        component: NewsSearch
      }
    ]
  }
];
