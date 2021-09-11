# API and Configuration(Foundation)

## Available imports
- [`FSLHttp`](#fslhttp)
- [`FSLStorage`](#fslstorage)

## FSLHttp:

网络请求api，基于fetch api封装基本操作
```javascript
 const httpApi = new FSLHttpApi();
 httpApi.headers = {
  'Accept': 'application/json',
  'Accept-Encoding': 'gzip',
  'Content-Type': 'application/json',
 };
 httpApi.GET(url).then(response => {
    // 结果
  }).catch(error => {
    // FSLHttpError类型错误
  });

```

#### GET(url: string)
GET请求，返回Promise，错误类型为FSLHttpError

#### POST(url: string, data: object)
POST请求，返回Promise，错误类型为FSLHttpError

#### PUT(url: string, data: object)
PUT请求，返回Promise，错误类型为FSLHttpError

#### DELETE(url: string, data: object)
DELETE请求，返回Promise，错误类型为FSLHttpError

#### headers: object
可用于设置http请求头数据，例如：Accept、Accept-Encoding、Content-Type等
默认 {Content-Type: 'application/json'}

## FSLStorage
数据持久化, 基于[react-native-storage](https://github.com/sunnylqm/react-native-storage)
```javascript
 const storage = require('FSLStorage');
 storage.save({
    key: userInfoKey,
    data: {
      user: user,
    },
    expires: null
 }).then(() => {

 }).catch(error => {

 });
```
