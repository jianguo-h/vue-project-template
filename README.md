# vue-project-template

> 为 `vue` 项目开发而搭建的一套 `vite` 基础配置，在此配置上进行扩展，支持 ts，推荐使用 vs code 编辑器

## 目录按如下

```
├── build                                       // vite启动，打包等配置文件
├── config                                      // 其它一些配置
├── dist                                        // 打包后的目录
├── src                                         // 源码
│   ├── api                                     // 接口管理
│   ├── components                              // 组件
│   ├── styles                                  // 全局样式
│   ├── router                                  // vue路由配置
│   ├── store                                   // vuex配置
│   ├── utils                                   // 工具函数
│   ├── types                                   // ts类型声明
│   ├── pages                                   // 页面级组件
│   ├── static                                  // 静态资源
│   ├── App.vue                                 // 根组件文件
│   ├── index.ts                                // 入口文件
│   ├── index.html                              // 模板html文件
├── babel.config.js                             // babel配置文件
├── .eslintrc.js                                // eslint配置文件
├── postcss.config.js                           // postcss配置文件
├── tsconfig.json                               // ts编译配置文件
```

## Get Started

Install [`node >= 21.1.0`](https://nodejs.org) and [`pnpm >= 10.9.0`](https://pnpm.io/)

## Development

```bash
  # 1. enable pnpm
  corepack enable pnpm

  2. add COREPACK_ENABLE_AUTO_PIN env to your env file(eg: /etc/profile)
  export COREPACK_ENABLE_AUTO_PIN=0

  # 3. Install packages
  pnpm install

  # Start dev server
  4. pnpm start --port 3001
```
