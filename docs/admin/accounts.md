# 号池管理

号池管理是管理 ChatGPT 官方账号的池子，可视化对账号进行增删改查的管理

## 添加账号

> [!WARNING] 提示
> 号池内的账号如果以 `refreshToken`、`refreshCookie` 方式进行添加，程序会自动在 `accessToken` 过期后，自动使用 `refreshToken` 或 `refreshCookie` 进行刷新，并更新 `accessToken` 的值

支持以 `accessToken`、`refreshToken`、`refreshCookie` 三种方式添加账号

![](/WechatIMG444.jpg)

## 账号列表

在此列表中你可以进行查询、删除账号、启停账户、更改账户的显示类型等操作

- 账号标签：选车页面显示的名称，默认为空，为空系统默认取账号的 userID 进行显示
- 账号状态：账号的启用状态，启用后可以正常使用，禁用后无法使用
- 显示类型：在选车页面显示的类型，比如账号本身是普通账号，可以改为自己想显示的订阅类型

![](/WechatIMG445.jpg)
