import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-Hans",
  title: "Share",
  description: "管理逆向Token的平台",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "开始接入", link: "/llm/prepare" },
      { text: "演示站", link: "https://share.yuanbao.dev" },
    ],
    sidebar: [
      { text: "项目预览", link: "/preview" },
      { text: "快速开始", link: "/getting-started" },
      { text: "第三方模式", link: "/thirdparty" },
      {
        text: "管理端",
        base: "/admin/",
        link: "accounts",
        collapsed: false,
        items: [
          { text: "号池管理", link: "accounts" },
          { text: "用户管理", link: "users" },
        ],
      },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
      level: [2, 3],
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: "跳转到内容",
    socialLinks: [{ icon: "github", link: "https://github.com/fakeoai/share" }],

    footer: {
      copyright: "Copyright © 2025-present Share",
    },
  },
});
