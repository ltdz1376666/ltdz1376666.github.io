# QQ Card Theme - GitHub Pages / Cloudflare Workers 版本

一个精美的QQ名片跳转网站，支持三个可爱主题（Hello Kitty、Kuromi、Cinnamoroll），可直接部署到GitHub Pages或Cloudflare Workers。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-7.1-purple.svg)

## ✨ 特性

- 🎨 **三个精美主题**：Hello Kitty（粉色可爱风）、Kuromi（紫色酷黑风）、Cinnamoroll（蓝色治愈风）
- 📱 **移动端优先**：完美适配手机屏幕，桌面端也有良好体验
- 🖼️ **高分辨率图片**：使用AI生成的高质量美观图片素材
- ✨ **平滑动画**：主题切换、按钮交互等都有精致的动画效果
- 🔤 **可爱字体**：使用Fredoka、Quicksand等圆润可爱的字体
- 🎯 **毛玻璃效果**：现代化的Glassmorphism设计
- 🚀 **即插即用**：完全独立的静态网站，无后端依赖
- 🔄 **自动部署**：包含GitHub Actions工作流，推送即自动部署

## 🚀 快速开始

### 本地开发

```bash
# 克隆仓库
git clone https://github.com/YOUR_USERNAME/qq-card-theme.git
cd qq-card-theme

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

### 部署到GitHub Pages

1. Fork或克隆此仓库
2. 推送到GitHub：
   ```bash
   git push -u origin main
   ```
3. 在仓库Settings → Pages中启用GitHub Pages
4. 工作流会自动部署，网站将在 `https://YOUR_USERNAME.github.io/qq-card-theme/` 可用

详见 [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

### 部署到Cloudflare Workers

```bash
# 安装Wrangler CLI
npm install -g wrangler

# 登录Cloudflare
wrangler login

# 部署
wrangler deploy
```

详见 [DEPLOY_GUIDE.md](./DEPLOY_GUIDE.md)

## 📁 项目结构

```
qq-card-theme/
├── client/
│   ├── public/
│   │   └── images/              # 高分辨率主题图片
│   │       ├── hello-kitty-*.png
│   │       ├── kuromi-*.png
│   │       └── cinnamoroll-*.png
│   └── src/
│       ├── pages/
│       │   ├── Home.tsx         # 主页面
│       │   └── NotFound.tsx     # 404页面
│       ├── components/
│       │   ├── ThemeSwitcher.tsx # 主题切换组件
│       │   └── ui/              # shadcn/ui组件
│       ├── index.css            # 全局样式和主题变量
│       ├── App.tsx              # 应用入口
│       └── main.tsx             # React入口
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions工作流
├── vite.config.ts               # Vite配置
├── package.json                 # 项目依赖
├── wrangler.toml                # Cloudflare Workers配置
├── DEPLOY_GUIDE.md              # 详细部署指南
└── README.md                    # 本文件
```

## 🎨 主题系统

### Hello Kitty 主题
- **颜色**：粉色（#FFB7C5）+ 纯白
- **风格**：甜蜜、纯真、可爱
- **适合**：喜欢温柔可爱风格的用户

### Kuromi 主题
- **颜色**：紫色（#A020F0）+ 黑色
- **风格**：叛逆、个性、酷黑
- **适合**：喜欢神秘酷黑风格的用户

### Cinnamoroll 主题
- **颜色**：天空蓝（#B0E0E6）+ 白色
- **风格**：轻盈、治愈、梦幻
- **适合**：喜欢清新治愈风格的用户

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.0 | UI框架 |
| Vite | 7.1 | 构建工具 |
| Tailwind CSS | 4.1 | 样式框架 |
| shadcn/ui | Latest | UI组件库 |
| Framer Motion | 12.23 | 动画库 |
| TypeScript | 5.6 | 类型安全 |
| Wouter | 3.3 | 路由库 |

## 📝 自定义指南

### 修改主题颜色

编辑 `client/src/index.css`：

```css
[data-theme="hello-kitty"] {
  --primary: oklch(0.75 0.18 350); /* 修改主色 */
  --background: oklch(0.98 0.01 350); /* 修改背景色 */
  /* ... 其他变量 */
}
```

### 替换主题图片

1. 将新图片放在 `client/public/images/` 目录
2. 修改 `client/src/pages/Home.tsx` 中的 `themeAssets` 对象

### 添加新主题

1. 在 `client/src/index.css` 中添加CSS变量
2. 在 `ThemeSwitcher.tsx` 中添加主题选项
3. 在 `Home.tsx` 中添加主题资源

## 🌐 浏览器兼容性

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ 移动浏览器（iOS Safari、Chrome Mobile）

## 📱 响应式设计

- **移动端**：完美适配 320px - 768px 屏幕
- **平板**：优化 768px - 1024px 屏幕
- **桌面**：支持 1024px+ 屏幕

## 🔄 更新日志

### v1.0.0 (2025-12-06)
- ✅ 初始版本发布
- ✅ 三个主题实现
- ✅ GitHub Pages自动部署
- ✅ Cloudflare Workers支持

## 📄 许可证

MIT License - 详见 [LICENSE](./LICENSE)

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 📧 联系方式

如有问题或建议，欢迎通过以下方式联系：
- 提交GitHub Issue
- 发送邮件

## 🙏 致谢

- 感谢 [Sanrio](https://www.sanrio.com/) 的可爱角色设计
- 感谢 [shadcn/ui](https://ui.shadcn.com/) 的优秀UI组件
- 感谢所有贡献者的支持

---

**⭐ 如果这个项目对你有帮助，请给个Star吧！**

**最后更新**：2025年12月6日
