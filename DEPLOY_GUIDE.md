# 部署指南 - GitHub Pages & Cloudflare Workers

这个项目是一个完全独立的静态网站，可以轻松部署到GitHub Pages或Cloudflare Workers。

## 📋 前置条件

- GitHub账户（用于GitHub Pages）
- Node.js 18+ 和 pnpm
- Git

## 🚀 方案一：GitHub Pages（推荐）

### 步骤1：创建GitHub仓库

1. 在GitHub上创建一个新仓库（例如：`qq-card-theme`）
2. 克隆到本地：
```bash
git clone https://github.com/YOUR_USERNAME/qq-card-theme.git
cd qq-card-theme
```

### 步骤2：上传代码

1. 将项目文件复制到仓库目录
2. 提交并推送：
```bash
git add .
git commit -m "Initial commit: QQ Card Theme"
git push -u origin main
```

### 步骤3：启用GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 下选择 **GitHub Actions**
3. 工作流会自动运行并部署

### 步骤4：访问网站

你的网站将在以下地址可用：
- `https://YOUR_USERNAME.github.io/qq-card-theme/` （如果仓库名不是用户名）
- `https://YOUR_USERNAME.github.io/` （如果仓库名是 `YOUR_USERNAME.github.io`）

### 自定义域名（可选）

1. 在 **Settings** → **Pages** → **Custom domain** 中输入你的域名
2. 在域名提供商处添加CNAME记录指向 `YOUR_USERNAME.github.io`

---

## ☁️ 方案二：Cloudflare Workers

### 步骤1：安装Wrangler CLI

```bash
npm install -g wrangler
```

### 步骤2：登录Cloudflare

```bash
wrangler login
```

### 步骤3：配置wrangler.toml

编辑 `wrangler.toml` 文件：
```toml
name = "qq-card-theme"
type = "javascript"
account_id = "YOUR_ACCOUNT_ID"  # 从Cloudflare Dashboard获取
workers_dev = true
```

### 步骤4：部署

```bash
# 开发环境预览
wrangler dev

# 生产部署
wrangler deploy
```

### 步骤5：访问网站

- Workers开发域名：`https://qq-card-theme.YOUR_SUBDOMAIN.workers.dev`
- 自定义域名：在Cloudflare Dashboard中配置

---

## 🔄 自动部署工作流

项目已包含GitHub Actions工作流（`.github/workflows/deploy.yml`），会在以下情况自动部署：

- 推送到 `main` 或 `master` 分支
- 创建Pull Request时预览构建

### 工作流做了什么：

1. ✅ 检出代码
2. ✅ 安装Node.js和pnpm
3. ✅ 安装项目依赖
4. ✅ 构建项目（`pnpm build`）
5. ✅ 上传到GitHub Pages

---

## 📦 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 `http://localhost:3000`

### 构建生产版本

```bash
pnpm build
```

输出文件在 `dist/` 目录

### 预览生产构建

```bash
pnpm preview
```

---

## 🎯 部署检查清单

- [ ] 代码已提交到GitHub
- [ ] GitHub Actions工作流已启用
- [ ] GitHub Pages设置已配置
- [ ] 网站可以正常访问
- [ ] 所有主题切换功能正常
- [ ] 图片加载正确
- [ ] 移动端响应式设计正常

---

## 🐛 故障排除

### GitHub Pages部署失败

1. 检查GitHub Actions日志：**Actions** → 最新工作流 → 查看日志
2. 确保 `package.json` 中的构建脚本正确：`"build": "vite build"`
3. 检查是否有构建错误：`pnpm build`

### 网站无法访问

1. 等待5-10分钟让GitHub Pages更新
2. 清除浏览器缓存（Ctrl+Shift+Delete）
3. 检查仓库设置中的Pages配置

### 图片无法加载

1. 确保图片在 `client/public/images/` 目录中
2. 检查HTML中的图片路径是否正确（应以 `/` 开头）
3. 验证图片文件名是否正确

### Cloudflare Workers部署问题

1. 确保已安装最新版本的Wrangler：`npm install -g wrangler@latest`
2. 检查 `wrangler.toml` 中的账户ID是否正确
3. 查看部署日志：`wrangler deploy --verbose`

---

## 📚 更多资源

- [GitHub Pages文档](https://docs.github.com/en/pages)
- [Cloudflare Workers文档](https://developers.cloudflare.com/workers/)
- [Vite部署指南](https://vitejs.dev/guide/static-deploy.html)

---

## 💡 提示

- 使用GitHub Pages时，确保仓库是公开的（免费计划）
- Cloudflare Workers提供更好的性能和全球CDN
- 两个平台都支持自定义域名
- 建议使用GitHub Pages用于简单部署，Cloudflare Workers用于高性能需求

---

**最后更新**：2025年12月6日
