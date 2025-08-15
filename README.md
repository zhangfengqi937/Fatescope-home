# Fatescope — 个人主页 / Personal Home

> 一个中英双语的个人站点：Aurora 动态 Hero、玻璃质感卡片、智能导航（滚动/点击高亮）、瀑布流相册 + Lightbox、语言切换（typed routes 兼容）。  
> **Online demo**：Coming Soon

---

## 👀 预览（示意）
- **Hero**：Aurora（中文=暖色黄绿金，英文=冷色蓝紫），支持轻动画与低动态偏好
- **Sections**：App / Gallery / Substack / About
- **导航**：半透明玻璃条，滚动自动高亮、点击即高亮，移动端折叠
- **相册**：CSS columns 瀑布流 + Lightbox（键盘/触控、计数器）

> 建议把截图放到 `docs/` 里：`docs/hero_zh.png`、`docs/hero_en.png`、`docs/gallery.png` …

---

## ✨ 亮点 Highlights
- **中英双语体验**：顶部语言切换（记忆偏好），可选首访轻提示（LangGate）
- **Aurora Hero**：多层径向渐变 + 纸感高光；`aurora-fast / aurora-faster` 调速；尊重 `prefers-reduced-motion`
- **Glassy Cards**：`<GlassCard tint="emerald|amber|indigo|sky|slate">` 一键换色；半透明 + 毛玻璃 + 内侧 1px 高光
- **Smart Navigation**：滚动高亮 + 点击即高亮；桌面/移动一致的交互
- **相册 Lightbox**：原生 `<dialog>`，左右切换 / Esc / 触摸滑动 / 计数器；零外部依赖
- **工程化**：Next.js App Router + TypeScript + Tailwind；结构清晰、易扩展；SEO 组件化（可选）

---

## 🧩 技术栈
- **Next.js 14**（App Router）
- **TypeScript**
- **Tailwind CSS**
- 自研组件：`HeroAurora` / `HeroAuroraCool`、`GlassCard`、`Header`、`LangSwitcher`、`LangGate`（可选）、`ClientGallery` + `Lightbox`

---

> 需要 Node.js ≥ 18

```bash
# 安装依赖
npm install

# 开发模式
npm run dev
# http://localhost:3000

# 生产构建 & 启动
npm run build
npm run start

⚙️ 可配置项
1) Hero 配色 & 速度

中文页：<HeroAurora />（暖色黄绿金）

英文页：<HeroAuroraCool />（冷色蓝紫）

动画速度：给外层 <section> 加上

aurora-fast（稍快）

aurora-faster（更快）

相关动画工具类在 app/globals.css 中，已处理 prefers-reduced-motion。

2) 卡片色调

GlassCard 支持 5 种色调，可按区块设置：

<GlassCard tint="emerald">App 内容</GlassCard>     # 建议中文页
<GlassCard tint="amber">Substack 内容</GlassCard>
<GlassCard tint="slate">About 内容</GlassCard>

# 英文页常用
<GlassCard tint="indigo">App</GlassCard>
<GlassCard tint="sky">Substack</GlassCard>

3) 相册图片

在 app/page.tsx 与 app/en/page.tsx 顶部维护：

const photos = ["/images/01.jpg", "/images/02.jpg", ...];  // 图片放在 public/images/


点击图片会调用 window.__fsOpenLightbox(index) 打开 Lightbox。

4) 语言切换

LangSwitcher 根据 pathname 在 / 与 /en 间切换，并将偏好写入 localStorage.lang。

若需首访提示，启用 LangGate 组件（放在 Header 之后）。

5) SEO（可选）

在 app/layout.tsx 的 metadata 中配置：

metadataBase（你的域名）、OG/Twitter 卡片、alternates.languages（hreflang）

可新增：app/sitemap.ts、app/robots.ts

☁️ 部署建议

Vercel（推荐）：零配置、一键部署、PR 预览

其它平台同样可用（Netlify/Render/Nginx）

🗺️ Roadmap

Contact 表单（/api/contact → 邮箱/Slack）

OG 动态海报（根据标题自动生成分享图）

图片 WebP/AVIF & LQIP 占位

PWA（manifest、icons）

📄 License

Site code: MIT

Fatescope App（算法/后端）：独立仓库与许可，暂不公开

🤝 合作 & 联系

Email: franciszz937@gmail.com

欢迎就云原生/AWS/Infra/数据流水线/视觉叙事等方向交流合作
