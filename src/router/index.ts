import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Posts from "../views/Posts.vue";

// 404
import NotFound from "../views/NotFound.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/posts",
  },
  {
    path: "/posts",
    name: "Posts",
    component: Posts,
    props: true,
  },
  {
    path: "/post/:id",
    name: "SinglePost",
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // eslint-disable-line no-use-before-define
      import(/* webpackChunkName: "about" */ "../views/SinglePost.vue"),
  },
  { path: "/:notFound(.*)", component: NotFound, name: "NotFound" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
