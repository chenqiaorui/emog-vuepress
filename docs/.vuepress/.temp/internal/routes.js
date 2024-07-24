export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/posts/nav.html", { loader: () => import(/* webpackChunkName: "posts_nav.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/nav.html.js"), meta: {"title":""} }],
  ["/posts/end/end.html", { loader: () => import(/* webpackChunkName: "posts_end_end.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/end/end.html.js"), meta: {"title":""} }],
  ["/posts/front/front.html", { loader: () => import(/* webpackChunkName: "posts_front_front.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/front/front.html.js"), meta: {"title":""} }],
  ["/posts/ops/ops.html", { loader: () => import(/* webpackChunkName: "posts_ops_ops.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/ops/ops.html.js"), meta: {"title":""} }],
  ["/posts/tools/tools.html", { loader: () => import(/* webpackChunkName: "posts_tools_tools.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/tools/tools.html.js"), meta: {"title":""} }],
  ["/posts/ops/k8s/k8s.html", { loader: () => import(/* webpackChunkName: "posts_ops_k8s_k8s.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/ops/k8s/k8s.html.js"), meta: {"title":""} }],
  ["/posts/ops/nginx/nginx.html", { loader: () => import(/* webpackChunkName: "posts_ops_nginx_nginx.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/ops/nginx/nginx.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
