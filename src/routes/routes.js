import { lazy } from "react";

const Home = lazy(() => import("~/pages/Home"));
const Login = lazy(() => import("~/pages/Login"));

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
];

export default routes;
