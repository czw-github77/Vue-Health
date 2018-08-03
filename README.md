<<<<<<< HEAD
# Vue-Health
![image](https://img.shields.io/badge/vue-2.5.13-blue.svg)
![image](https://img.shields.io/badge/vue--router-3.0.1-blue.svg)
![image](https://img.shields.io/badge/vuex-3.0.1-blue.svg)
![image](https://img.shields.io/badge/mint--ui-2.2.13-blue.svg)

## 简介
Vue-Health 是一个仿今日头条的练习项目(https://baike.baidu.com/item/hybrid%20app/270520?fr=aladdin)项目，页面代码使用Vue开发，共20个页面，涉及文章的分类、展示、阅读、推荐、搜索和用户的登录、评论、收藏以及后台文章编辑等等，是一个对vue进行全面练习的项目




## 项目演示

[项目演示请戳这里](http://lazyer.xyz)（请使用手机模式预览）


## 功能

#### 业务功能
- [x] 启动广告页
- [x] 阅读
- [x] 搜索、热点文章
- [x] 动态增减栏目
- [x] 文章标签
- [x] 文章的评论、点赞、收藏、微信客户端分享
- [x] 阅读历史、评论历史
- [x] 文章后台管理（发表、修改、删除、撤回、预览等功能）
- [x] 意见反馈
- [x] ...

#### 其他功能
- [x] 下拉上滑查看更多内容
- [x] 左右滑动切换栏目列表
- [x] 点击头部回到顶部（指令）
- [x] 右滑返回上一页（指令）
- [x] 视频播放的加载、重播指示以及悬浮等
- [x] 热更新、版本更新
- [x] ...

## 部分截图

- 首页、详情页

<img src="https://github.com/pujiezi/Vue-Health/raw/master/screenshots/native_index.png" width="365" height="619"/> <img src="https://github.com/pujiezi/Vue-Health/raw/master/screenshots/native_detail.png" width="365" height="619"/>

- 频道页、用户页

<img src="https://github.com/pujiezi/Vue-Health/raw/master/screenshots/native_channel.png" width="365" height="619"/> <img src="https://github.com/pujiezi/Vue-Health/raw/master/screenshots/native_user.png" width="365" height="619"/>

- 后台文章管理页、广告页

<img src="https://github.com/pujiezi/Vue-Health/raw/master/screenshots/native_ad.png" width="365" height="619"/>

## 目录结构

``` bash
├── build                                        // 构建相关
├── config                                       // 配置相关
├── src                                          // 项目代码
│   ├── assets                                   // 样式、图标等静态资源
│   ├── components                               // 全局公用组件
│   │   ├── banner.vue                           // banner组件
│   │   ├── commentItem.vue                      // 评论Item组件
│   │   ├── error.vue                            // 错误提示组件
│   │   ├── info.vue                             // listItem的列表信息组件
│   │   ├── listItem.vue                         // 文章List组件
│   │   ├── loading.vue                          // 加载提示组件
│   │   ├── myHeader.vue                         // 头部组件
│   │   ├── popuMenu.vue                         // 模态框组件
│   │   ├── publishItem.vue                      // 后台文章列表组件
│   │   ├── tool.vue                             // 评论工具栏组件
│   ├── config                                   // 全局公用方法
│   │   ├── autoTextarea.js                      // textarea自动增加高度方法
│   │   ├── cache.js                             // 缓存方法
│   │   ├── cordova.js                           // cordova插件方法
│   │   ├── directive.js                         // 指令方法
│   │   ├── fetch.js                             // 请求方法
│   ├── page
│   │   ├── detail
│   │   |   ├── children
│   │   |   |   ├── comment.vue                  // 评论页
│   │   |   |   ├── reply.vue                    // 回复页
│   │   |   ├── components
│   │   |   |   ├── article.vue                  // 文章组件
│   │   |   |   ├── collect.vue                  // 收藏组件
│   │   |   |   ├── like.vue                     // 点赞组件
│   │   |   |   ├── recommend.vue                // 推荐组件
│   │   |   |   ├── share.vue                    // 分享组件
│   │   |   |   ├── tags.vue                     // 标签组件
│   │   |   ├── detail.vue                       // 详情页
│   │   ├── index
│   │   |   ├── collect
│   │   |   |   ├── collect.vue                  // 收藏页
│   │   |   ├── home
│   │   |   |   ├── children
│   │   |   |   |   ├── channel.vue              // 栏目页
│   │   |   |   ├── components
│   │   |   |   |   ├── homeHeader.vue           // 首页头部组件
│   │   |   |   |   ├── pullContainer.vue        // 下拉容器组件
│   │   |   |   |   ├── swiperContainer.vue      // 滑动容器组件
│   │   |   |   ├── home.vue                     // 主页
│   │   |   ├── user
│   │   |   |   ├── children
│   │   |   |   |   ├── health
│   │   |   |   |   |   ├── health.vue           // 文章管理页
│   │   |   |   |   |   ├── preview.vue          // 文章预览页
│   │   |   |   |   |   ├── publish.vue          // 文章编辑页
│   │   |   |   |   ├── feedBack.vue             // 用户反馈页
│   │   |   |   |   ├── myComment.vue            // 我的评论页
│   │   |   |   |   ├── myHistory.vue            // 我的历史页
│   │   |   |   |   ├── QRcode.vue               // 应用分享页
│   │   |   |   ├── user.vue                     // 用户页
│   │   |   ├── video
│   │   |   |   ├── video.vue                    // 视频页
│   │   |   ├── index.vue                        // 首页
│   │   |   ├── navBar.vue                       // 底部导航组件
│   │   ├── login
│   │   |   ├── login.vue                        // 登录页
│   │   ├── search
│   │   |   ├── search.vue                       // 搜索页
│   ├── router
│   │   ├── index.js                             // 路由配置
│   ├── store
│   │   ├── collect                              // 收藏页store
│   │   ├── detail                               // 详情页store
│   │   ├── health                               // 文章管理store
│   │   ├── index                                // 首页store
│   │   ├── login                                // 登录store
│   │   ├── search                               // 搜索页store
│   │   ├── user                                 // 用户store
│   │   ├── video                                // 视频页store
│   │   ├── index.js                             // 全局store
│   ├── App.vue                                  // 页面入口
│   └── main.js                                  // 程序入口
├── static                                       // 空文件夹，只作为github保留
├── .babelrc                                     // babel-loader 配置
├── .eslintrc.js                                 // eslint 配置项
├── .gitignore                                   // git 忽略项
├── index.html                                   // 入口html文件
└── package.json                                 // package.json
```

## 安装运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8084
npm run dev

# build for production with minification
npm run build（File in the docs folder）
```

# Vue-Health
基于vue2 + vue-router + vuex 构建的一个新闻类大型单页面应用 —— 仿今日头条
=======
# Vue-Health
>>>>>>> 9e1ed5ab5a251e87f2ccf5b6dd3631426b6452bd
