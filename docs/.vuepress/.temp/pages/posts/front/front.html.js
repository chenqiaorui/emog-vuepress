import comp from "D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/posts/front/front.html.vue"
const data = JSON.parse("{\"path\":\"/posts/front/front.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"front\",\"slug\":\"front\",\"link\":\"#front\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/front/front.md\"}")
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
