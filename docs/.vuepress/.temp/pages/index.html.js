import comp from "D:/JLC/repo/emog-vuepress/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":null,\"heroImage\":\"https://ms.bdimg.com/pacific/0/pic/2013654959_-153417060.png?x=0&y=0&h=150&w=242&vh=150.00&vw=242.00&oh=150.00&ow=242.00\",\"actions\":[{\"text\":\"全栈知识\",\"link\":\"/posts/front/archive1.html\",\"type\":\"primary\"},{\"text\":\"全栈知识体系\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"夯实基础\",\"details\":\"不积跬步无以至千里, 仰望星空还需脚踏实地\"},{\"title\":\"构建体系\",\"details\":\"告别碎片化学习，帮助你构筑你自己的知识体系\"},{\"title\":\"全栈开发\",\"details\":\"全栈开发，DevOps\"}],\"footer\":\"粤ICP备xx722号 | emog | copyright © 2024-present\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
