import loadable from "@loadable/component";

const routes = [
  {
    path: "/",
    component: loadable(() => import("@client/pages/Home")),
    exact: true,
  },
  {
    path: "/user",
    component: loadable(() => import("@client/layouts/UserLayout")),
    routes: [
      {
        path: "/user",
        component: loadable(() => import("@client/pages/User/Index")),
        exact: true,
        asyncData: (store, params) => {
          return store.dispatch.user.fetchUser();
        },
      },
      {
        path: "/user/data",
        component: loadable(() => import("@client/pages/User/Data")),
        exact: true,
      },
      {
        path: "/user/setting",
        component: loadable(() => import("@client/pages/User/Setting")),
        exact: true,
      },
    ],
  },
  {
    path: "/login",
    component: loadable(() => import("@client/pages/Login")),
    exact: true,
  },
];

export default routes;