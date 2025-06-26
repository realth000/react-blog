import { index, type RouteConfig, route } from "@react-router/dev/routes";
import { navRoutes } from "./navigation.ts";

export default [
  index("pages/home.tsx"),
  route(navRoutes.articles, "pages/articles.tsx"),
  route(navRoutes.tags, "pages/tags.tsx"),
  route(navRoutes.projects, "pages/projects.tsx"),
  route(navRoutes.friends, "pages/friends.tsx"),
  route(navRoutes.about, "pages/about.tsx"),
] satisfies RouteConfig;
