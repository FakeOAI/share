# FakeOAI Share

一个特别的ChatGPT官网镜像的项目

## ✨ 核心功能

- [x] 支持第三方渠道模型、ChatGPT官网模型的动态配置
- [x] 支持对各个模型、对话频率的限速配置
- [x] 内置用户管理系统、自定义会员系统以及会员激活码发放系统
- [x] 内置ChatGPT网关，同时也支持配置第三方网关
- [x] 官方对话限速无感切换账号，同时也用户也可以自行切换账号
- [x] 支持纯API站点模式，无需加任何官方账号，将ChatGPT官网作为核心对话引擎
- [x] 拥有功能齐全的管理后台，可自定义配置多种个人网站信息
- [x] 精心设计的用户界面，提升转化率与用户体验
- [x] Docker本地运行部署，不受制于人

## 📸 功能预览

### 管理端

| 功能模块   | 预览图                                                                                                                      |
| ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| 号池管理   | <img width="1553" alt="号池管理" src="https://github.com/user-attachments/assets/a90adb4f-dbe9-4c30-8b24-71a1051f2930" />   |
| 会员管理   | <img width="1551" alt="会员管理" src="https://github.com/user-attachments/assets/3266fe28-bb16-47ee-9274-d2ac225b2c8b" />   |
| 模型管理   | <img width="1550" alt="模型管理" src="https://github.com/user-attachments/assets/cf721aaa-f2f3-48bf-b831-af87e34b71ea" />   |
| 激活码管理 | <img width="1552" alt="激活码管理" src="https://github.com/user-attachments/assets/ab274c3f-37f6-4bf6-8e70-08eb4cf47348" /> |
| 系统配置   | <img width="1553" alt="系统配置" src="https://github.com/user-attachments/assets/0aa74750-b32b-4eac-89ed-39442ec88622" />   |
| 用户管理   | <img width="1552" alt="用户管理" src="https://github.com/user-attachments/assets/29a54931-db45-4872-bf6e-7fa087dff324" />   |

### 客户端

| 功能模块               | 预览图                                                                                                                                  |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 主页落地页             | <img width="1546" alt="主页落地页" src="https://github.com/user-attachments/assets/3fc5c9c3-34d2-4588-a836-e67a9df99566" />             |
| 会员以及模型限速详情页 | <img width="1553" alt="会员以及模型限速详情页" src="https://github.com/user-attachments/assets/60a0d5f6-6e9c-4ccb-a33f-0970b65fa227" /> |
| 会员激活页面           | <img width="1551" alt="会员激活页面" src="https://github.com/user-attachments/assets/2522aa57-6351-4eba-a8b2-94bad2919dd1" />           |
| OpenAI账号选择页面     | <img width="1552" alt="OpenAI账号选择页面" src="https://github.com/user-attachments/assets/047d9d0e-ff15-4206-90f3-6fce61f7c74f" />     |
| 镜像站首页             | <img width="1553" alt="镜像站首页" src="https://github.com/user-attachments/assets/2b5b7a06-2693-48e7-9f20-cbc9b5a5b59b" />             |
| 镜像站助手             | <img width="1551" alt="镜像站助手" src="https://github.com/user-attachments/assets/e430280a-2adb-424c-8204-e064b22d3f60" />             |

## 📁 项目结构

```
share
├── config/                 # 项目配置
│   ├── config.yaml        # 数据库持久层、服务端口日志配置
│   └── system.yaml        # 程序系统配置，账号密码以及后台的系统配置
├── keys/                  # SSL证书存放位置
│   ├── ssl.pem           # SSL证书公钥
│   └── ssl.key           # SSL证书私钥
├── deploy.sh             # 一键启动脚本
└── docker-compose.yaml   # Docker服务编排文件
```

## 🚀 快速部署

### 1. 克隆项目

```bash
git clone https://github.com/FakeOAI/share.git
cd share
```

### 2. 配置项目

根据实际需求修改以下配置文件：

- **`config/config.yaml`**: 平台配置
  - `adminPath`: 后台访问地址前缀（默认为 `/admin`，建议修改为自定义地址）
- **`docker-compose.yaml`**: Docker容器配置
  - 可根据需要调整端口、网络等设置

### 3. 启动部署

运行一键部署脚本：

```bash
./deploy.sh
```

### 4. 访问后台

部署完成后，访问以下地址进入后台管理页面：

```
http://<你的IP>:<你的端口><后台前缀>
```

默认登录信息：

- **用户名**: `admin`
- **密码**: `admin`

> ⚠️ 安全提示：首次登录后请立即在系统配置中修改默认密码

### 5. 配置许可证

在系统配置中填写许可证信息以启用完整功能：

<img width="1551" alt="许可证配置" src="https://github.com/user-attachments/assets/40c7c45f-557a-4dc1-b7a4-57bd6abed81c" />

## 🎉 开始使用

系统部署完成后，您可以通过后台管理页面：

- 配置模型管理
- 自定义VIP体系
- 设置各VIP等级可用模型及使用次数
- 生成会员激活码
- 开展分销或代理业务

所有功能配置灵活，权限完全由您掌控。
