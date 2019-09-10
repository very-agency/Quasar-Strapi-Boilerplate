const routes = [
  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [{path: "", component: () => import("pages/HomePage.vue")}]
  },
  {
    path: "/index",
    component: () => import("layouts/MyLayout.vue"),
    children: [{path: "", component: () => import("pages/Index.vue")}]
  },
  {
    path: "/about",
    component: () => import("layouts/MyLayout.vue"),
    children: [{path: "", component: () => import("pages/PageAbout.vue")}]
  },
  {
    path: "/fullimage",
    component: () => import("layouts/BlankLayout.vue"),
    children: [{path: "", component: () => import("pages/FullImage.vue")}]
  },
  {
    path: "/home",
    component: () => import("layouts/BlankLayout.vue"),
    children: [{path: "", component: () => import("pages/HomeAlter.vue")}]
  },
  {
    path: "/desk",
    component: () => import("layouts/BlankLayout.vue"),
    children: [{path: "", component: () => import("pages/HomeDesktop.vue")}]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
