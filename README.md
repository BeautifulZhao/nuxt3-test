# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


# 渲染模式

Nuxt 3 提供了两种渲染模式：静态站点生成（SSG）和服务器端渲染（SSR）。

## 静态站点生成（SSG）

静态站点生成是指在构建时生成静态 HTML 文件，然后直接将这些文件部署到静态文件服务器上。这种方法适用于内容不经常变化的情况，例如博客文章、文档等。

## 服务器端渲染（SSR）

服务器端渲染是指在每次请求时，服务器都会生成 HTML 并发送给客户端。这种方法适用于需要动态生成内容的情况，例如用户登录、购物车等。

## 如何选择渲染模式

- 如果你的网站内容不经常变化，可以使用静态站点生成（SSG）。
- 如果你的网站需要动态生成内容，可以使用服务器端渲染（SSR）。

## 如何配置渲染模式

Nuxt 支持不同的渲染模式。包括，通用渲染，客户端渲染，还提供了混合渲染和CDN边缘服务器上渲染应用程序的可能性。

浏览器和服务器都可以解释JavaScript代码，将vue组件转换为html元素，这个过程被称为渲染。Nuxt同时支持通用渲染和客户端渲染，这两种方法都有优点和缺点

默认情况下，Nuxt使用通用渲染以提供更好的用户体验、性能优化和搜索引擎优化。

## 通用渲染

当浏览器请求 启用了通用（服务端+客户端）渲染的URL时，服务器将一个完整渲染的HTML页面返回给浏览器。无论页面是预先生成并缓存的，还是即时渲染的，在某个时刻，Nuxt都在服务器环境中运行JavaScript代码，生成了一个HTML代码。用户立即获得我们应用程序的内容，与客户端渲染相反。

为了不失去客户端渲染方法的好处，如动态界面和页面过渡效果，客户端（浏览器）在下载完HTML文档后，会在后台加载运行 在服务器上的JavaScript代码。浏览器再次解释它（因此成为通用渲染），vue接管文档并启用交互性。、

在浏览器中使静态页面具有交互性被称为“水合“

通用渲染使Nuxt应用程序能够快速加载页面，同时保留了客户端渲染的好处。此外，由于内容已经存在于HTML文档中，爬虫可以在没有额外开销的情况下对其进行索引。

服务端渲染的好处：

* 性能：用户可以立即访问页面 的内容，因为浏览器比JavaScript生成的内容更快地显示静态内容。同时，当水合过程发生时，Nuxt保留了Web应用程序的交互性。

* 搜索引擎优化：


## 客户端渲染
传统的Vue应用程序默认在浏览器（客户端）中进行渲染。然后，Vue在浏览器下载和解析所有包含创建当前界面指令的JavaScript代码后，生成HTML元素。


## 混合渲染

混合渲染允许每个路由使用路由规则的不同缓存规则，并决定服务器如何响应给定URL

以前，Nuxt应用程序和服务器的每个路由/页面必须使用相同的渲染模式，通用渲染或客户端渲染。在这种情况下，一些页面可以在构建时生成，而其他页面应该时客户端渲染的，例如，考虑一个具有管理部分的内容网站。每个内容页面应该是主要静态的，并且只生成一次，但管理部分需要注册并且更像一个动态应用网站


Nuxt3 包括了路由规则和混合渲染支持。使用路由规则，你可以为一组Nuxt路由定义规则，改变渲染模式或者基于路由分配缓存策略



# 模块

Nuxt 提供了一个模块系统，可以扩展框架的核心功能并简化集成过程。

当使用Nuxt开发生产级别应用时，可能会发现框架的核心功能不够用。Nuxt可以通过配置选项和插件进行扩展，但是在多个项目中维护这些定制化内容可能会很繁琐、重复且耗时。

