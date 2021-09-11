/**
 * Created by xukj on 2018/7/26.
 *
 */
import FSLHttpError from './FSLHttpError';
import FSLHttpCode from './FSLHttpCode';

const baseHttpApi = ((fetch) => {
    return (url, options, timeout = 30000) => {
        let abort = null;
        // 手动关闭http请求
        const abort_promise = new Promise((resolve, reject) => {
            abort = (error) => {
                reject(error);
            };

            setTimeout(() => abort(new FSLHttpError('timeout', FSLHttpCode.REQUEST_TIMEOUT_ERROR)), timeout);
        });
        let promise = Promise.race([fetch(url, options), abort_promise]);
        promise.abort = () => abort(new FSLHttpError('abort', FSLHttpCode.USER_CLOSE_ERROR));
        return promise;
    };
})(fetch);

/**
 * @description http请求方法，提供手动关闭和超时处理。
 * @param {string} [url] - 请求地址
 * @param {object} [options] - 选项
 * @param {number} [timeout] - 超时，默认30秒
 * 提供可调用的方法 abort - 主动关闭
 * 使用方式
 const httpApi = baseHttpApi('https://www.baidu.com', {mode: 'no-cors'});
 httpApi.then(response => {
    console.log('response:' + response);
 }).catch(error => {
    console.log('error:' + error);
 });

 // 手动停止
 httpApi.abort();
 */
export default baseHttpApi;