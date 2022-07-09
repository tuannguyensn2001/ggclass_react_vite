import { lazy } from "react";

const Home = lazy(() => import("~/pages/Home"));
const Login = lazy(() => import("~/pages/Login"));
const Class = lazy(() => import("~/pages/Class"));
const Resource = lazy(() => import("~/pages/Resource"));
import DefaultLayout from "~/layout/Default";

const routes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/login",
    component: Login,
    layout: DefaultLayout,
  },
  {
    path: "/class",
    component: Class,
    layout: DefaultLayout,
  },
  {
    path: "/resource",
    component: Resource,
    layout: DefaultLayout,
  },
];

export default routes;