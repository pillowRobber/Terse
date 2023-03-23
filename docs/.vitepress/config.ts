import { defineConfig } from 'vitepress'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      items: [{ text: "Button 按钮", link: "/components/button/" }],
    },
    { text: "input输入框" },
    { text: "布局" },
  ],
}

export default defineConfig({
  themeConfig: {
    sidebar,
  },
  title: "Terse",
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },
  // head: [
  //   ['link', { rel: 'stylesheet', href: '../../dist/assets/entry.css' }],
  // ],
  
})

