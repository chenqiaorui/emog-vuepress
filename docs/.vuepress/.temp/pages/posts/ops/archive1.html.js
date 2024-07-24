import comp from "D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/ops/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/ops/archive1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"ops\",\"slug\":\"ops\",\"link\":\"#ops\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/ops/archive1.md\"}")
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
