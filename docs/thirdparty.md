# 第三方模式

此模式是为了让已有自己用户体系的第三方更方便的接入此程序而设计的

## 前提条件

> [!WARNING] 重要提示
> 该模式需要拉取 `fakeoai/share-thirdparty` 镜像，详细配置请参考 [docker-compose.yaml](https://github.com/FakeOAI/share/blob/118be1ee98b16d2a047f86f54f6e36ff95ceb9f2/docker-compose.yaml#L28)

## 使用步骤

1. 然后需要在第三方配置中配置 `OAuth地址`，登录接口接口在服务端会去把前端接收的 code 传递到此地址中，你需要按照如下格式进行响应

```json
// GET <OAUTH_URL>?code=xxx

// 成功返回，响应码200，允许登录
{
   "username": "用户唯一标识",
   "nickname": "用户昵称", // 可选，如果没有则使用 username 作为昵称
   "avatar": "用户头像地址" // 可选，url地址
}
// 失败返回，响应码必须>=400，不允许登录
{
   "detail": "失败报错，此报错会在前端进行显示"
}
```

![image](/456306604-e1d9b110-871c-4ddc-91d4-06d6641634ab.png)

2. 根据自己的需求设置对话限速以及模型限速，如果不限制用户的用量使用可以忽略不设置

   ![image](/456309191-c2c29092-ee9c-45f5-9a68-90f937a2ce7d.png)

## 登录接口

```
GET /client-api/login?code=xxx&redirect=true
```

该接口在服务器中会去调用 `OAuth地址` 接口，如果第三方返回成功的响应，程序会重定向到镜像的首页

## Hooks 接口

hooks 地址是一个用于更加细粒度控制用户行为的地址，把执行权限交给第三方，如：是否允许对话、与第三方之间的数据交互等

![image](/WechatIMG458.jpg)

配置之后，程序会在对应的类型场景下对该地址进行请求，如果有必要的数据，程序会一同携带发往该地址，第三方需要根据以下说明进行响应

- `conversation_pre`：此 hook 会在 **对话发起前** 触发

  ```json
  // 程序发送的请求体
  {
    "type": "conversation_pre",
    "username": "用户唯一标识",
    "data": {...} // 原始对话请求体，里面包含对话模型以及对话内容，可以根据自己的逻辑处理内容审核以及限速等
  }

  // 成功响应，响应码200，即不拦截对话
  // 失败响应，响应码>=400，即拦截对话
  {
    "detail": "对话拦截报错内容，此报错用户是可见的，如内容审核、模型限速等提示"
  }
  ```

- `conversation_detail`：此 hook 会在 **对话完成结束** 以及 **创建新会话** 的时候触发

  ```json
  // 程序发送的请求体
  {
    "type": "conversation_detail",
    "username": "用户唯一标识",
    "data": {
      "conversation_id": "会话ID" // 对话完成结束后才会有该字段
    }
  }

  // 响应内容
  {
    "label": "自定义底部文字内容，如：你的对话次数还剩30次",
    "clears_in": 3600 // 限速恢复时间，单位秒，如果有值会禁止所有模型调用和文件的上传
  }
  ```
