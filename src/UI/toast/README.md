# FSLToast

> NOTE: The sources are copy from `@ant-design/react-native` for more informations please move to http://github.com/ant-design/ant-design-mobile-rn

一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。  
展示方式类似于`Modal`, 但是界面展示优先级低于`Modal`

### 规则

-   一次只显示一个 toast。
-   字数不宜超过 14 个。

## API

-   `FSLToast.show(content, duration, onClose, mask)`
-   `FSLToast.success(content, duration, onClose, mask)`
-   `FSLToast.fail(content, duration, onClose, mask)`
-   `FSLToast.alert(content, duration, onClose, mask)`
-   `FSLToast.help(content, duration, onClose, mask)`
-   `FSLToast.hide(key)`

组件提供了 6 个静态方法，参数如下：

| 属性     | 说明                           | 类型                    | 默认值 |
| -------- | ------------------------------ | ----------------------- | ------ |
| content  | 提示内容                       | React.Element or string | 无     |
| duration | 自动关闭的延时，单位秒         | number                  | 3      |
| onClose  | 关闭后回调                     | function                | 无     |
| mask     | 是否显示透明蒙层，防止触摸穿透 | bool                 | true   |

  
```jsx
import { FSLToast } from 'react-native-kpframework';
const key = FSLToast.show('messsage');
FSLToast.hide(key);
```

## FSLToastView  
除了使用[API](#api)方式展示toast外，还能直接在`render`中渲染 `FSLToastView`，属性如下:   

| 属性     | 说明                           | 类型                    | 默认值 |
| -------- | ------------------------------ | ----------------------- | ------ |
| content  | 提示内容                       | React.Element or string | 无     |
| duration | 自动关闭的延时，单位秒         | number                  | 3      |
| onClose  | 关闭后回调                     | function                | 无     |
| type     | 是否显示预设的icon图标`success` `fail` `help` `alert` | String                 | 无   |  
| mask     | 是否显示透明蒙层，防止触摸穿透 | boolean                 | true   |  
| onAnimationEnd     | 关闭动画结束后调用 | function                 | 无   |  

  
```jsx
import { FSLToastView } from 'react-native-kpframework';
// ...
// render方法
{
    this.state.toast && (
        <FSLToastView
            content="hellow world"
            duration={2}
            onAnimationEnd={() => this.setState({ toast: false })}
        />
    );
}
// ...
```

## 注意事项

- 如果要使用该全局提示组件 `FSLToast`，还需要在 App 的入口处加上 `FSLProvider`

```jsx
import React, { Component } from 'react';
import { FSLProvider } from 'react-native-kpframework';

class HelloWorldApp extends Component {
    render() {
        return (
            <FSLProvider>
                <Text>Hello world</Text>
            </FSLProvider>
        );
    }
}
```
  
- 因为组件展示优先级低于`Modal`，如果需要在`Modal`组中显示Toast，必须在`render`中加入[FSLToastView](#fsltoastview)而不能使用API方式。
