# 本源码仅限于交流学习，凡涉及到法律问题与本人无关

- ## [English](/README-EN.md)
---
# 捐赠:
#### 您的捐赠是我们开源最大的动力
- BTC/USDT(比特币/USDT)：1Dwwqhw9pV9iSSQwuJc8nAygda7XfahaoW
- ETH/USDT(以太坊/USDT)：0x4f1ea0f10aa99f608f31f70b4d3119f6928693ed
- LTC(莱特币)：LXr4TMtDhCSpdAo98vg2sbvX3UXDVPQvMa

## 加入我们
    为方便大家交流和学习，请各位小伙伴加入QQ交流群：
	*区块链交易所技术知识交流群【QQ群：735446452】

# iView Admin
[![](https://img.shields.io/travis/iview/iview-admin.svg?style=flat-square)](https://travis-ci.org/iview/iview-admin)
[![vue](https://img.shields.io/badge/vue-2.5.2-brightgreen.svg?style=flat-square)](https://github.com/vuejs/vue)
[![iview ui](https://img.shields.io/badge/iview-2.7.2-brightgreen.svg?style=flat-square)](https://github.com/iview/iview)

## Current version：v1.2.3
[Update log](https://github.com/iview/iview-admin/releases)

[WIKI](https://github.com/iview/iview-admin/wiki)

[View online](https://iview.github.io/iview-admin)

[Simplified template](https://github.com/iview/iview-admin/tree/template)

`Note: The demo online will be updated after the new version of the development version is released, so if you want to experience the iview-admin with latest version, please clone the full project code and run it locally.`

## Install
```bush
// install dependencies
npm install
```
## Run
### Development
```bush
npm run dev
```
### Production(Build)
```bush
npm run build
```

## Introduction
&emsp;&emsp;iView-admin is a suite of backstage management system developed based on Vue.js and use the UI Toolkit -- [iView](https://www.iviewui.com). It's maintained by the TalkingData front-end visualization team member. iView-admin compolies with iView design and development contract, use uniform style, and more features are developing. If you want to check the update of iView-admin, you can view [Update log](https://github.com/iview/iview-admin/releases) to get. If you are new to iView-admin, you can go to [WIKI](https://github.com/iview/iview-admin/wiki) for tutorials. If you want to experience iView-admin online, you can visit [View online](https://iview.github.io/iview-admin) to experience. If you just want a sober and cool interface then you can download [Simplify Templates](https://github.com/iview/iview-admin/tree/template) for development.

## Features

- Login/Logout
- Authority management
    - Menu filter
    - Permission switch
- Multi-language switch
- Components
    - text editor
    - Markdown editor
    - Area cascade
    - Picture editor
    - Dragable list
    - File upload
    - Count animation
- Form
    - Artical publish
    - Workflow
- Tables
    - Dragable table
    - Editable table
        - Inline editable table
        - Cell editable table
    - Searchable table
    - Exporting data
        - As CSV file
        - As XLS file
    - Table to picture
- Error page
    - 403
    - 404
    - 500
- Advanced router
    - Dynamic router
    - Pages with arguments
- Skin
- Shrinkable sidebar menu
- Tag navigation
- Breadcrumbs
- Full screen/Exit full screen
- Lock screen
- Message center
- Personal center

## File tree
```shell
.
├── build    //the configuration of project builds
└── src
    ├── images    //images files
    ├── libs    //tool method
    ├── locale    //language files
    ├── router    //configuration of router
    ├── store    //status management
    ├── styles    //style files
    ├── template    //template file
    ├── vendors    //public library files
    └── views
        ├── access    //access management
        ├── advanced-router    //Advanced router
        ├── error_page    //error page
        ├── form    //form
        ├── home    //home page
        │   ├── components    //the components of home page
        ├── international    //Multi-language
        ├── main_components    //Main
        │   ├── lockscreen    //lock screen
        │   ├── shrinkable-menu    //shrinkable sidebar
        │   └── theme-switch    //skin switch
        ├── message    //message center
        ├── my_components    //components
        │   ├── area-linkage    //China area cascade
        │   ├── count-to    //count animation
        │   ├── draggable-list    //dragable list
        │   ├── file-upload    //file upload
        │   ├── image-editor    //picture editor
        │   ├── markdown-editor    //Markdown editor
        │   └── text-editor    //text editor
        ├── own-space    //personal center
        └── tables    //tables
```

## Links

- [TalkingData](https://github.com/TalkingData)
- [iView](https://github.com/iview/iview)
- [Vue](https://github.com/vuejs/vue)
- [Webpack](https://github.com/webpack/webpack)

## Show

- home
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/home.gif)

- tag navigation
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/page-tags.gif)

- access management
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/access.gif)

- dragable list
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/dragable-list.gif)

- picture editor
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/image-editor.gif)

- file upload
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/upload.gif)

- count animation
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/count-to.gif)

- artical publish
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/article-publish.gif)

- workflow
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/workflow.gif)

- dragable table
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/dragable-table.gif)

- editable table
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/editable-table.gif)

- export data
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/exportable-table.gif)

- table to picture
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/table2image.gif)

- error page
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/error-page.gif)

- lock screen
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/locking.gif)

- shrinkable sidbar menu
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/sidebarmenu.gif)s

- skin switch
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/theme.gif)

- message center
![image](https://github.com/iview/iview-admin/raw/dev/github-gif/message.gif)

## License
[Apache License 2.0](LICENSE)

Copyright (c) 2016-present, iView
