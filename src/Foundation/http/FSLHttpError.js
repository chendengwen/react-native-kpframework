/**
 * Created by xukj on 2018/7/27.
 *
 */
import HttpCode from './FSLHttpCode';

/**
 * @description 构造函数
 * @param {string} [message]
 * @param {number} [code]
 * @param {any} [data]
 * @return {FSLHttpError}
 */
function FSLHttpError(message, code = HttpCode.UNKNOWN_ERROR, data){
    this.message = message;
    this.code = code;
    this.data = data;
}

FSLHttpError.prototype = new Error();

export default FSLHttpError;
