# 数字经济下绿色供应链管理 教材资源门户

这是一个静态门户站，用来按教材目录分章展示内容，并统一跳转到另一套 GitHub Pages 资源页。

## 当前结构

- 首页：章节总览
- 分编：四编目录分组
- 资源说明：视频、音频、作业试卷、拓展阅读四类内容区
- 分章：每章展开小节并跳转到独立资源页

## 你需要修改的地方

打开 [`app.js`](./app.js)，把这行替换成你的真实资源站地址：

```js
const RESOURCE_BASE_URL = "https://YOUR_GITHUB_USERNAME.github.io/YOUR_RESOURCE_REPO/";
```

例如：

```js
const RESOURCE_BASE_URL = "https://your-name.github.io/green-supply-chain-resources/";
```

默认情况下，每章会跳到：

```text
RESOURCE_BASE_URL/chapter-01/index.html
RESOURCE_BASE_URL/chapter-02/index.html
...
```

## 发布到公网

可以。GitHub Pages 本身就是公网可访问的静态站点。

如果你把仓库设置为公开，并开启 GitHub Pages，外部用户就可以直接访问页面。

官方文档：

- [GitHub Pages 简介](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [为 GitHub Pages 配置自定义域名](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 自定义域名

可以绑定自己的域名，但域名本身需要你在域名注册商那里另外购买。

常规流程是：

1. 先在 GitHub Pages 开启站点。
2. 在仓库设置里填写 `Custom domain`。
3. 到域名注册商后台配置 DNS。
4. 等待解析生效后启用 HTTPS。

## 目录说明

章节数据写在 [`app.js`](./app.js) 里，后续如果教材目录有微调，直接改这里即可。

如果你后面还要搭“章节资源页模板”，我可以继续给你补第二个仓库的结构。
