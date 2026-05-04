# MyVue

![Vite](https://img.shields.io/badge/Vite-8.0.8-646CFF?style=flat&logo=vite)
![Vue3](https://img.shields.io/badge/Vue-3.5.32-4FC08D?style=flat&logo=vue.js)
![NaiveUI](https://img.shields.io/badge/Naive%20UI-2.44.1-008080?style=flat&logo=npm)
![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.4-38B2AC?style=flat&logo=tailwind-css)

自用的项目模板，提前配置好大多数通用依赖／框架／基本UI，从而将更多的时间投入到业务逻辑的开发中。

## 使用方法

1. 下载项目源代码
2. 调整以下文件：
    - [./package.json](./package.json) ~ 调整项目名称
    - [./index.html](./index.html) ~ 调整网站标题、关键词、描述
    - [./src/constants/app-info.ts](./src/constants/app-info.ts) ~ 调整项目各项信息
    - [./src/assets/icons/app-logo.svg](./src/assets/icons/app-logo.svg) ~ 换上你自己的logo
    - 删除 [./docs/preview.png](./docs/preview.png)
3. 运行 `npm i`
4. 开始开发

> [!TIP]\
> 如果项目需要 Github Page，请在推送之前提前调整好仓库的相关设置。
> 如果不需要，则请删除或调整 [./.github/workflows/deploy__main.yml](./.github/workflows/deploy__main.yml) 。

## 框架预览

![App Preview](./docs/preview.png)
