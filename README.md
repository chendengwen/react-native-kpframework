# KPFrameworkRN

[![](https://img.shields.io/npm/v/react-native-kpframework.svg?style=flat-square)](https://www.npmjs.com/package/react-native-kpframework)
[![](https://img.shields.io/npm/dm/react-native-kpframework.svg?style=flat-square)](https://www.npmjs.com/package/react-native-kpframework)
[![](https://travis-ci.org/xuwaer/KPFrameworkRN.svg)](https://travis-ci.org/xuwaer/KPFrameworkRN)
[![](https://img.shields.io/github/license/xuwaer/KPFrameworkRN.svg?style=flat-square)](https://github.com/xuwaer/KPFrameworkRN/blob/master/LICENSE)

提供 react-native 的常用组件

## 安装说明

#### 自动安装

1. 安装 framework

```
// npm
npm install react-native-kpframework --save
// or yarn
yarn add react-native-kpframework
```

2. 执行安装脚本

```
node node_modules/react-native-kpframework/script/install-cli
```

3. 如果失败，请重新执行安装脚本，或者使用下面的手动安装方式

#### 手动安装

1.安装

```
// 安装kpframework
npm install react-native-kpframework --save
npm install react-native-elements --save
npm install react-native-img-cache-kp --save
npm install react-native-vector-icons --save
npm install rn-fetch-blob --save
npm install @react-native-community/async-storage --save

// or yarn
yarn add react-native-kpframework
yarn add react-native-elements
yarn add react-native-img-cache-kp
yarn add react-native-vector-icons
yarn add rn-fetch-blob
yarn add @react-native-community/async-storage
```

**RN < 0.60.0 执行以下步骤**
2.link 到原生

```
react-native link react-native-vector-icons
react-native link rn-fetch-blob
react-native link @react-native-community/async-storage
```

3.iOS 端如果使用了 CocoaPods 管理第三方包
在 Pod 文件中添加

```ruby
pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
pod 'rn-fetch-blob', :path => '../node_modules/rn-fetch-blob'
pod 'RNCAsyncStorage', :path => '../node_modules/@react-native-community/async-storage'
```

## 版本说明

请更新到 v2 版本，v1 版本以后将不再维护

-   0.x.x ~ 1.x.x 支持 **RN 0.44.0+**
-   2.x.x 支持 **RN 0.56.0+**
-   2.8.x 支持 **RN 0.60.0+**

## API 说明

#### V1 版本: 0.x.x ~ 1.x.x

[界面 UI 相关组件](/doc/v1/API_UI.md)

[基础功能组件](/doc/v1/API_Foundation.md)

#### V2 版本: 2.x.x

[界面 UI 相关组件](/doc/v2/API_UI.md)

[基础功能组件](/doc/v2/API_Foundation.md)
