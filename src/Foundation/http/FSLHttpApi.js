/**
 * Created by xukj on 2018/7/26.
 *
 */
import baseHttpApi from './FSLBaseHttpApi';

/**
 * @class
 * @description 封装后的http请求
 * 支持GET/POST/PUT/DELETE
 * 支持headers设置
 * 支持abort中断操作
 * 支持timeout设置
 */
export default class FSLHttpApi {

    constructor() {
        this._httpHeaders = {
            'Content-Type': 'application/json',
        };
    }

    /**
     * @description http get 请求
     * @param {string} [url] 请求地址
     * @param {number} [timeout] 超时
     * @return {Promise}
     */
    GET(url, timeout = 30000) {
        const options = httpOptions(this._httpHeaders, 'GET');
        return baseHttpApi(url, options, timeout);
    }

    /**
     * @description http post 请求
     * @param {string} [url] 请求地址
     * @param {object} [data] 请求数据
     * @param {number} [timeout] 超时
     * @return {Promise}
     */
    POST(url, data, timeout = 30000) {
        const options = httpOptions(this._httpHeaders, 'POST', data);
        return baseHttpApi(url, options, timeout);
    }

    /**
     * @description http put 请求
     * @param {string} [url] 请求地址
     * @param {object} [data] 请求数据
     * @param {number} [timeout] 超时
     * @return {Promise}
     */
    PUT(url, data, timeout = 30000) {
        const options = httpOptions(this._httpHeaders, 'PUT', data);
        return baseHttpApi(url, options, timeout);
    }

    /**
     * @description http delete 请求
     * @param {string} [url] 请求地址
     * @param {object} [data] 请求数据
     * @param {number} [timeout] 超时
     * @return {Promise}
     */
    DELETE(url, data, timeout = 30000){
        const options = httpOptions(this._httpHeaders, 'DELETE', data);
        return baseHttpApi(url, options, timeout);
    }

    /**
     * @description http请求头设置，默认为 application/json。
     * 'Content-Type:application/json'，则在请求时，会自动对body的数据做JSON转换
     * 'Content-Type:multipart/form-data'、'Content-Type:application/x-www-form-urlencoded'等其他的不会对body进行处理。
     * 需要外层自行处理
     * @param {object} [header] 请求头，默认为application/json
     */
    set headers(header) {
        this._httpHeaders = Object.assign({}, this._httpHeaders, header);
    }

    /**
     * @description http请求头
     * @return {object}
     */
    get headers() {
        return this._httpHeaders;
    }
}

/*
 * @private
 * @description 生成fetch请求需要的options
 */
const httpOptions = (headers, method, data) => {
    let configs = { };
    const contentType = headers['Content-Type'];
    if (contentType === 'application/json') {
        // JSON格式
        configs = {
            headers: headers,
            method: method,
            body: data ? JSON.stringify(data) : undefined,
        }
    }
    else {
        configs = {
            headers: headers,
            method: method,
            body: data,
        }
    }

    return configs;
};