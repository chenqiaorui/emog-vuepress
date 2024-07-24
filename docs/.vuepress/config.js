import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  // lang: 'en-US',
  lang: 'zh-CN', 
  title: 'emog-全栈',
  description: '全栈体系',
  colorModeSwitch: true,

  theme: defaultTheme({
    logo: '/images/emog.png',
    
    navbar: [
      {
        text: '导航',
        link: '/posts/nav',
      },
      {
        text: 'Ops',
        children: [
          {
            text: 'k8s',
            link: '/posts/ops/k8s/k8s'
          },
          {
            text: 'nginx',
            link: '/posts/ops/nginx/nginx'
          },
          {
            text: 'linux',
            link: '/posts/ops/linux/linux'
          }
        ],
      },
      {
        text: '前端',
        link: '/posts/front/front',
      },
      {
        text: '后端',
        link: '/posts/end/end',
      },
      {
        text: '工具',
        link: '/posts/tools/tools',
      },
    ],
  }),
  bundler: viteBundler()
})
