<!--
 * @Author: guokai
 * @Date: 2020-10-28 21:12:14
 * @LastEditTime: 2020-10-29 15:40:08
 * @LastEditors: guokai
 * @FilePath: /Pkit/README.md
-->

# 佩奇的脚手架

# Pkit

## Peiqi 的 kit

- Peiqi 的脚手架

## 项目层级结构说明

```bash
├── node_modules----- 引用包地址
├── public ----- 静态文件 存放地址
│   ├── index.html --- 静态页面地址

```

### 代码

```
//代码pull
yarn pull

//代码约定式提交
yarn commit (包括add 跟 commit )

//生成changelog
yarn changelog

//提交
yarn push

```
### 需要的工具

- commander
-ora
- fs-extra 
- chalk
- boxen
- ssh2
- semver
