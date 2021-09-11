/**
 * Created by xukj on 2018/7/26.
 *
 */

// 基础的http请求
import FSLBaseHttpApi from './FSLBaseHttpApi';
// 封装过的http请求，能够满足大部分需求
import FSLHttpApi from './FSLHttpApi';
// 自定义错误
import FSLHttpError from './FSLHttpError';
// 错误码
import FSLHttpCode from './FSLHttpCode';

const HttpApi = {
    FSLBaseHttpApi,
    FSLHttpApi,
    FSLHttpError,
    FSLHttpCode,
};

export default HttpApi;