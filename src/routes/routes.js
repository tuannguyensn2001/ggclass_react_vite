import { lazy } from "react";

const Home = lazy(() => import("~/pages/Home"));
const Login = lazy(() => import("~/pages/Login"));
const Class = lazy(() => import("~/pages/Class"));
const Resource = lazy(() => import("~/pages/Resource"));
const DetailClass = lazy(() => import("~/pages/DetailClass"));
const Newsfeed = lazy(() => import("~/pages/Newsfeed"));
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
  },
  {
    path: "/class",
    component: Class,
    layout: DefaultLayout,
    private: true,
  },
  {
    path: "/resource",
    component: Resource,
    layout: DefaultLayout,
  },
  {
    path: "/class/:id",
    component: DetailClass,
    layout: DefaultLayout,
    // private: true,
    children: [
      {
        path: "newsfeed",
        component: Newsfeed,
      },
    ],
  },
];

export default routes;
