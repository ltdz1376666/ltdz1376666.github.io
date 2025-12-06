# QQ名片跳转网站 - 源代码说明

## 项目概述

这是一个精美的QQ名片跳转网站，支持三个可爱主题：**Hello Kitty**、**Kuromi** 和 **Cinnamoroll**。用户可以输入QQ号，一键跳转到QQ资料卡页面。

### 主要特性

- 🎨 **三个精美主题**：Hello Kitty（粉色可爱风）、Kuromi（紫色酷黑风）、Cinnamoroll（蓝色治愈风）
- 📱 **移动端优先**：完美适配手机屏幕，桌面端也有良好体验
- ✨ **高分辨率图片**：使用AI生成的高质量美观图片素材
- 🎭 **平滑动画**：主题切换、按钮交互等都有精致的动画效果
- 🔤 **可爱字体**：使用Fredoka、Quicksand等圆润可爱的字体
- 🎯 **毛玻璃效果**：现代化的Glassmorphism设计

## 项目结构

```
qq-card-theme/
├── client/                          # 前端代码
│   ├── public/
│   │   └── images/                  # 高分辨率主题图片
│   │       ├── hello-kitty-bg-hd.png
│   │       ├── hello-kitty-card-hd.png
│   │       ├── kuromi-bg-hd.png
│   │       ├── kuromi-card-hd.png
│   │       ├── cinnamoroll-bg-hd.png
│   │       └── cinnamoroll-card-hd.png
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx             # 主页面（核心功能）
│   │   │   └── NotFound.tsx         # 404页面
│   │   ├── components/
│   │   │   ├── ThemeSwitcher.tsx    # 主题切换组件
│   │   │   └── ui/                  # shadcn/ui组件库
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx     # 主题上下文
│   │   ├── index.css                # 全局样式和主题变量
│   │   ├── App.tsx                  # 应用入口
│   │   └── main.tsx                 # React入口
│   └── index.html                   # HTML模板
├── server/                          # 服务器代码（静态项目不使用）
├── shared/                          # 共享代码
├── package.json                     # 项目依赖
├── vite.config.ts                   # Vite配置
├── tsconfig.json                    # TypeScript配置
└── ideas.md                         # 设计构思文档
```

## 核心文件说明

### 1. `client/src/pages/Home.tsx`
主页面组件，包含：
- QQ号输入框
- 立即跳转按钮
- 主题切换器集成
- 背景图片和卡片图片展示
- 动画效果实现

### 2. `client/src/components/ThemeSwitcher.tsx`
主题切换组件，提供：
- 右上角悬浮按钮
- 下拉菜单选择主题
- 平滑的过渡动画

### 3. `client/src/index.css`
全局样式文件，定义：
- 三个主题的CSS变量（颜色、背景等）
- 字体导入和配置
- 圆角、阴影等设计令牌

## 快速开始

### 1. 安装依赖
```bash
cd qq-card-theme
pnpm install
```

### 2. 开发模式运行
```bash
pnpm dev
```
然后访问 `http://localhost:3000`

### 3. 构建生产版本
```bash
pnpm build
```

### 4. 预览生产版本
```bash
pnpm preview
```

## 主题系统

### 主题切换原理
- 使用 `data-theme` 属性在DOM上标记当前主题
- CSS变量根据 `[data-theme]` 选择器动态改变颜色
- React状态管理主题切换

### 三个主题的配置

#### Hello Kitty 主题
- **背景色**：浅粉色（`oklch(0.98 0.01 350)`）
- **主色**：热粉色（`oklch(0.75 0.18 350)`）
- **风格**：甜蜜、纯真、可爱

#### Kuromi 主题
- **背景色**：深紫黑色（`oklch(0.15 0.02 300)`）
- **主色**：紫色（`oklch(0.6 0.2 300)`）
- **风格**：叛逆、个性、酷黑

#### Cinnamoroll 主题
- **背景色**：浅蓝色（`oklch(0.97 0.02 240)`）
- **主色**：天空蓝（`oklch(0.7 0.15 240)`）
- **风格**：轻盈、治愈、梦幻

## 关键技术栈

- **React 19**：UI框架
- **Vite**：构建工具
- **Tailwind CSS 4**：样式框架
- **shadcn/ui**：UI组件库
- **Framer Motion**：动画库
- **Wouter**：路由库
- **Sonner**：Toast通知库
- **TypeScript**：类型安全

## 自定义指南

### 修改主题颜色
编辑 `client/src/index.css`，找到对应主题的CSS变量：
```css
[data-theme="hello-kitty"] {
  --primary: oklch(0.75 0.18 350); /* 修改这里 */
  --background: oklch(0.98 0.01 350);
  /* ... 其他变量 */
}
```

### 替换主题图片
1. 将新图片放在 `client/public/images/` 目录
2. 修改 `client/src/pages/Home.tsx` 中的 `themeAssets` 对象

### 添加新主题
1. 在 `client/src/index.css` 中添加新的 `[data-theme="xxx"]` CSS规则
2. 在 `ThemeSwitcher.tsx` 的 `themes` 数组中添加新主题
3. 在 `Home.tsx` 的 `themeAssets` 中添加新主题资源
4. 更新 `Theme` 类型定义

### 修改字体
在 `client/index.html` 中修改Google Fonts导入，或在 `index.css` 中更改 `font-family`

## 部署

### 部署到Manus
项目已配置为Manus静态项目，可直接通过Manus UI发布。

### 部署到其他平台
1. 运行 `pnpm build` 生成 `dist/` 目录
2. 将 `dist/` 目录部署到任何静态托管服务（Vercel、Netlify等）

## 浏览器兼容性

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- 移动浏览器（iOS Safari、Chrome Mobile）

## 常见问题

**Q: 如何修改输入框的样式？**
A: 编辑 `Home.tsx` 中的 Input 组件的 className，使用Tailwind CSS工具类。

**Q: 如何添加更多装饰元素？**
A: 在 `Home.tsx` 中添加新的 `<motion.div>` 元素，使用Framer Motion实现动画。

**Q: 如何修改QQ跳转的协议？**
A: 在 `Home.tsx` 的 `handleGo` 函数中修改 `url` 变量的值。

## 许可证

MIT

## 联系方式

如有问题或建议，欢迎反馈！

---

**最后更新**：2025年12月6日
**版本**：1.0.0
