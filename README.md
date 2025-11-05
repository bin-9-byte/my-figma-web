# my-figma-web

这是一个基于 Figma 设计稿实现的响应式网页应用，使用 React 19、TypeScript 和 Vite 构建，提供现代化的用户界面和流畅的交互体验。

## 项目特点

- **现代化技术栈**：React 19、TypeScript、Vite
- **响应式设计**：支持桌面端显示
- **组件化架构**：模块化组件设计，便于维护和扩展
- **代码质量保证**：集成 ESLint 和 TypeScript 类型检查
- **React Compiler 支持**：优化 React 应用性能

## 页面结构

- **首页 (Home)**：应用的主要入口页面
- **关于我们 (About)**：展示项目或公司的相关信息
- **展览 (On View)**：展示相关展览或内容的页面

## 技术栈

### 核心依赖
- **React** ^19.1.1 - 用于构建用户界面的 JavaScript 库
- **React DOM** ^19.1.1 - React 的 DOM 渲染器

### 开发依赖
- **TypeScript** ~5.9.3 - JavaScript 的类型超集
- **Vite** ^7.1.7 - 现代化前端构建工具
- **ESLint** ^9.36.0 - 代码质量检查工具
- **@vitejs/plugin-react** ^5.0.4 - Vite React 插件
- **babel-plugin-react-compiler** ^19.1.0-rc.3 - React Compiler 插件

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式运行

```bash
npm run dev
```

然后打开浏览器访问 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

### 代码质量检查

```bash
npm run lint
```

## 项目结构

```
src/
├── assets/          # 静态资源文件
│   ├── icons/       # SVG 图标
│   ├── images/      # 图片资源
│   └── index.ts     # 资源导出
├── components/      # React 组件
│   ├── common/      # 通用组件
│   ├── home_desktop.tsx     # 首页组件
│   ├── about_desktop.tsx    # 关于页组件
│   ├── on_view_desktop.tsx  # 展览页组件
│   └── index.ts     # 组件导出
├── App.tsx          # 应用主组件
├── App.css          # 应用样式
├── index.css        # 全局样式
└── main.tsx         # 应用入口文件
```

## 组件说明

### 页面组件
- **Desktop**：首页桌面端组件
- **AboutDesktop**：关于我们桌面端组件
- **OnViewDesktop**：展览桌面端组件

### 通用组件
- **Button**：按钮组件
- **Card**：卡片组件
- **Container**：容器组件
- **Description**：描述文本组件
- **Event**：事件展示组件
- **Footer**：页脚组件
- **Image**：图片组件
- **NavLink**：导航链接组件
- **PageLink**：页面链接组件
- **Typography**：排版组件

## 开发指南

### 添加新页面

1. 在 `src/components/` 目录下创建新的页面组件
2. 在 `App.tsx` 中导入并添加到路由配置
3. 更新页面类型定义和渲染逻辑

### 扩展 ESLint 配置

如果开发生产应用，建议更新 ESLint 配置以启用类型感知的 lint 规则，详情可参考默认配置中的注释。

## React Compiler

本项目启用了 React Compiler，这可以显著提升 React 应用的性能。更多信息请参考 [React Compiler 文档](https://react.dev/learn/react-compiler)。

注意：启用 React Compiler 可能会影响 Vite 的开发和构建性能。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)
