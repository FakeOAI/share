# FakeOAI Share

一个特别的ChatGPT官网镜像的项目

## 功能

- [x] 支持第三方渠道模型、ChatGPT官网模型的动态配置
- [x] 支持对各个模型、对话频率的限速配置
- [x] 内置用户管理系统、自定义会员系统以及会员激活码发放系统
- [x] 内置ChatGPT网关，同时也支持配置第三方网关
- [x] 官方对话限速无感切换账号，同时也用户也可以自行切换账号
- [x] 支持纯API站点模式，无需加任何官方账号，把ChatGPT官网当作对话系统
- [x] 拥有功能齐全的管理后台，可自定义配置多种个人网站信息
- [x] 简洁大方的前台落地页面，用户看了就想下单的那种
- [x] Docker本地运行部署，不受制于人

## 管理端

| 号池管理  | 会员管理 |
| ------------- | ------------- |
| <img width="1553" alt="image" src="https://github.com/user-attachments/assets/a90adb4f-dbe9-4c30-8b24-71a1051f2930" /> | <img width="1551" alt="image" src="https://github.com/user-attachments/assets/3266fe28-bb16-47ee-9274-d2ac225b2c8b" />|

| 模型管理  | 激活码管理 |
| ------------- | ------------- |
| <img width="1550" alt="image" src="https://github.com/user-attachments/assets/cf721aaa-f2f3-48bf-b831-af87e34b71ea" /> | <img width="1552" alt="image" src="https://github.com/user-attachments/assets/ab274c3f-37f6-4bf6-8e70-08eb4cf47348" />|

| 系统配置  | 用户管理 |
| ------------- | ------------- |
| <img width="1553" alt="image" src="https://github.com/user-attachments/assets/0aa74750-b32b-4eac-89ed-39442ec88622" /> | <img width="1552" alt="image" src="https://github.com/user-attachments/assets/29a54931-db45-4872-bf6e-7fa087dff324" />

## 客户端

| 主页落地页 | 会员以及模型限速详情页 |
| ------------- | ------------- |
| <img width="1546" alt="image" src="https://github.com/user-attachments/assets/3fc5c9c3-34d2-4588-a836-e67a9df99566" /> | <img width="1553" alt="image" src="https://github.com/user-attachments/assets/60a0d5f6-6e9c-4ccb-a33f-0970b65fa227" /> |

| 会员激活页面  | OpenAI账号选择页面 |
| ------------- | ------------- |
| <img width="1551" alt="image" src="https://github.com/user-attachments/assets/2522aa57-6351-4eba-a8b2-94bad2919dd1" /> | <img width="1552" alt="image" src="https://github.com/user-attachments/assets/047d9d0e-ff15-4206-90f3-6fce61f7c74f" /> |

| 镜像站首页  | 镜像站助手 |
| ------------- | ------------- |
|  <img width="1553" alt="image" src="https://github.com/user-attachments/assets/2b5b7a06-2693-48e7-9f20-cbc9b5a5b59b" /> | <img width="1551" alt="image" src="https://github.com/user-attachments/assets/e430280a-2adb-424c-8204-e064b22d3f60" /> |

## 项目目录

```
share
│
├── config # 项目配置
│    ├── config.yaml # 数据库持久层、服务端口日志配置
│    └── system.yaml # 程序系统配置，账号密码以及后台的系统配置都保存在此文件
├── keys # ssl证书存放位置
│    ├── ssl.pem # ssl证书公钥
│    └── ssl.key # ssl证书私钥
├── deploy.sh # 一键启动脚本
└── docker-compose.yaml # docker服务编排文件
```

## 部署

1. 克隆项目配置文件

首先，你需要从 GitHub 上克隆 Tokens 项目的配置文件：

```bash
git clone https://github.com/FakeOAI/share.git
```

2. 进入项目目录

克隆完成后，进入项目所在目录：

```bash
cd share
```

3. 编辑配置文件

根据你的实际情况，修改项目中的配置文件：

- **`config/config.yaml`**：此文件包含平台的配置，你可以根据需求调整其中的参数。其中 `adminPath` 是后台访问地址的前缀，默认为/admin，推荐修改为自己的隐藏地址
- **`docker-compose.yaml`**：该文件用于配置 Docker 容器设置。你可以根据实际情况调整端口、网络等信息。如果你不需要进行任何自定义，保持默认配置即可。

4. 运行一键部署脚本

为了简化部署过程，Tokens 提供了一键部署脚本。运行以下命令以自动化完成部署：

```bash
./deploy.sh
```

该脚本会自动配置并启动所有必要的服务。

### 启动部署后

完成部署后，你可以在浏览器中访问以下地址，进入后台管理页面：

```
http://<你的IP>:<你的端口><后台前缀>
```

默认情况下，后台管理页面使用以下账号和密码进行登录：

- **用户名**：`admin`
- **密码**：`admin`

建议首次登录后在系统配置的管理配置中及时更改密码，以增强系统安全性。

5. 填写许可证

在系统配置中，你需要填写许可证信息才能正常使用完整功能，确保在收到许可证后，将其填写到系统配置的应用许可证中。

<img width="1551" alt="image" src="https://github.com/user-attachments/assets/40c7c45f-557a-4dc1-b7a4-57bd6abed81c" />


## 完成部署

至此系统现已成功部署并配置完成。您可通过后台管理页面开始使用平台，轻松配置模型管理和自定义VIP体系，灵活设定各VIP等级可使用的模型及使用次数，一切权限尽在您手。只需完成配置，即可批量生成对应会员的激活码，助力您的分销或代理业务。




