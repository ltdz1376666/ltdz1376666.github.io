# QQ名片跳转网站设计构思

## 1. 核心需求分析
- **功能**: 输入QQ号 -> 跳转到QQ名片页面 (mqq协议)。
- **主题**: Hello Kitty (粉色/可爱), Kuromi (紫色/酷黑/哥特), Cinnamoroll (浅蓝/云朵/清新)。
- **交互**: 右上角切换主题。
- **平台**: 移动端优先 (Mobile First)。
- **风格**: 精美、细节丰富、无Emoji、使用图片素材。

## 2. 设计方案构思

<response>
<probability>0.05</probability>
<text>
### 方案 A: "Sanrio Dreamland" (三丽鸥梦幻乐园)
*   **Design Movement**: **Kawaii Pop / Soft UI** (可爱波普 / 软UI)
*   **Core Principles**:
    *   **Immersive**: 全屏背景图，沉浸式体验。
    *   **Softness**: 大圆角、柔和的阴影、毛玻璃效果 (Glassmorphism)。
    *   **Playful**: 弹跳动画、趣味交互。
*   **Color Philosophy**:
    *   **Hello Kitty**: 糖果粉 (#FFB7C5) + 纯白，传递甜蜜与纯真。
    *   **Kuromi**: 酷黑 (#2D2D2D) + 霓虹紫 (#D4AF37 -> #A020F0)，传递叛逆与个性。
    *   **Cinnamoroll**: 天空蓝 (#B0E0E6) + 云朵白，传递轻盈与治愈。
*   **Layout Paradigm**: **Card-based Center Focus** (卡片式中心聚焦)。
    *   屏幕中央放置一个精致的“卡片”容器，承载输入框和按钮。
    *   背景使用高清大图，卡片使用半透明毛玻璃效果，让背景透出来。
*   **Signature Elements**:
    *   **Floating Icons**: 背景中有漂浮的装饰元素（如蝴蝶结、骷髅头、云朵）。
    *   **Custom Input**: 输入框带有主题特色的边框和图标。
    *   **Mascot Avatar**: 输入框上方显示当前主题的角色头像/立绘。
*   **Interaction Philosophy**:
    *   点击切换主题时，背景和卡片颜色平滑过渡。
    *   按钮点击有明显的缩放和回弹效果 (Jelly effect)。
*   **Animation**:
    *   页面加载时，卡片从底部弹入。
    *   切换主题时，角色图片有一个旋转或淡入淡出的切换动画。
*   **Typography System**:
    *   标题使用圆润可爱的字体 (如 `Varela Round` 或 `Quicksand`)。
    *   正文使用清晰易读的无衬线字体。
</text>
</response>

<response>
<probability>0.03</probability>
<text>
### 方案 B: "Retro Sticker Book" (复古贴纸手账)
*   **Design Movement**: **Y2K / Scrapbook** (千禧年 / 手账风)
*   **Core Principles**:
    *   **Tactile**: 纸质纹理、胶带痕迹、贴纸边缘。
    *   **Collage**: 拼贴感，元素之间有重叠和角度偏移。
    *   **Nostalgic**: 像素风点缀、复古边框。
*   **Color Philosophy**:
    *   高饱和度与低饱和度混搭，模拟打印贴纸的质感。
*   **Layout Paradigm**: **Asymmetric Collage** (非对称拼贴)。
    *   元素散落在屏幕各处，输入框像是一张贴在手账本上的便签。
*   **Signature Elements**:
    *   **Washi Tape**: 胶带固定UI元素。
    *   **Doodles**: 手绘涂鸦装饰。
*   **Interaction Philosophy**:
    *   点击元素有“撕下”或“贴上”的音效（视觉模拟）。
*   **Animation**:
    *   定格动画风格 (Stop Motion)。
*   **Typography System**:
    *   手写体 (Handwritten fonts)。
</text>
</response>

<response>
<probability>0.02</probability>
<text>
### 方案 C: "Neon Cyber-Cute" (霓虹赛博可爱)
*   **Design Movement**: **Cyberpunk Kawaii** (赛博朋克可爱风)
*   **Core Principles**:
    *   **Glowing**: 发光线条、霓虹灯管效果。
    *   **Dark Mode First**: 即使是Hello Kitty也是暗黑粉色风格。
    *   **Tech**: 故障艺术 (Glitch art) 装饰。
*   **Color Philosophy**:
    *   黑色底色，配以高亮荧光色（粉、紫、蓝）。
*   **Layout Paradigm**: **HUD Interface** (抬头显示器界面)。
    *   科技感的边框和数据可视化元素。
*   **Signature Elements**:
    *   **Scanlines**: 屏幕扫描线纹理。
    *   **Digital Glitch**: 角色偶尔闪烁故障效果。
*   **Interaction Philosophy**:
    *   机械感、电子感的反馈。
*   **Animation**:
    *   故障闪烁、数据流加载。
*   **Typography System**:
    *   像素字体或科技感无衬线字体。
</text>
</response>

## 3. 最终选择方案

**选择方案 A: "Sanrio Dreamland" (三丽鸥梦幻乐园)**

**理由**:
1.  **符合大众审美**: 这种风格最符合用户对“可爱”、“精美”的预期，也最适合Hello Kitty、Kuromi和Cinnamoroll这三个IP的传统形象。
2.  **移动端适配性好**: 卡片式布局在各种尺寸的手机屏幕上都能很好地展示，且易于操作。
3.  **素材契合度高**: 我收集到的素材大多是高清壁纸和角色立绘，非常适合这种沉浸式+毛玻璃的设计。
4.  **易于扩展**: 如果未来要加更多角色（如布丁狗、美乐蒂），这套框架很容易套用。

**设计执行细节**:
*   **字体**: 引入 Google Fonts `Quicksand` (圆润可爱) 和 `M PLUS Rounded 1c` (支持中文圆体)。
*   **UI库**: 使用 shadcn/ui 的 Card, Input, Button 组件，并进行深度定制（圆角、阴影、颜色）。
*   **动效**: 使用 `framer-motion` 实现主题切换时的平滑过渡和元素进场动画。
*   **背景**: 使用 `background-size: cover` 和 `background-position: center` 确保背景图在移动端完美展示。
*   **主题切换器**: 右上角悬浮一个圆形按钮或下拉菜单，点击切换。

**文件结构规划**:
*   `client/src/index.css`: 定义三个主题的 CSS 变量 (颜色、背景图路径)。
*   `client/src/components/ThemeSwitcher.tsx`: 主题切换组件。
*   `client/src/pages/Home.tsx`: 核心页面，包含输入框和跳转逻辑。
