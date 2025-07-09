# 外部脚本

为了实现高度的定制化需求，本项目的镜像站中支持引入外部的 `js` 脚本

## 如何添加脚本

在项目根目录的 `public` 文件夹中添加一个 `external.js` 文件即可

## 脚本能做啥？

> [!WARNING] 提示
> 镜像站中默认引入了 `JQuery`（操作 Dom 元素）、`Sweetalert2`（UI 好看的弹窗）两个依赖，无需自己重复引入

- 使用 `JQuery` 操作 `dom` 元素
- 使用 `Sweetalert2` 定制自己业务逻辑的弹窗
- 配置悬浮问号的弹窗显示内容，配置如下

  ```js
  // 需要在external.js中给window对象添加__actions_config属性
  window.__actions_config = {
    hidden: false, // 是否隐藏悬浮按钮，默认为false
    title: "弹窗标题",
    // actions是一个数组，且里面元素是每一个菜单的配置
    actions: [
      {
        label: "xxx", // 菜单左边的文字（必填）
        description: "", // 菜单左边的文字下的描述（选填）
        // btn为菜单右边的按钮，如果不配置，默认不显示按钮
        btn: {
          name: "xxx", // 按钮名称
          type: "primary", // 按钮类型，类型可选：`primary`、`secondary`
          handler: () => {}, // 按钮点击后的回调函数
        },
      },
    ],
  };
  ```
