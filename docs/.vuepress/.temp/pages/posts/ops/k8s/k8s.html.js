import comp from "D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/ops/k8s/k8s.html.vue"
const data = JSON.parse("{\"path\":\"/posts/ops/k8s/k8s.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"k8s\",\"slug\":\"k8s\",\"link\":\"#k8s\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/ops/k8s/k8s.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
