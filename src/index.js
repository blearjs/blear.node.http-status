/**
 * NODE http 状态码
 * @author ydr.me
 */

'use strict';


var httpStatusCodeMap = require('./http-status-code.json');


/**
 * 根据 HTTP code 获取对应的 HTTP status
 * @param statusCode {String|Number} HTTP code
 * @param [defaultStatus] 默认 HTTP status
 * @returns {string} HTTP status
 *
 * @example
 * httpStatus.get('200');
 * // => "OK"
 *
 * httpStatus.get('0000', 'what');
 * // => "what"
 */
exports.get = function (statusCode, defaultStatus) {
    statusCode = String(statusCode).toLowerCase();
    defaultStatus = defaultStatus || 'unknow';

    return httpStatusCodeMap[statusCode] || defaultStatus;
};


/**
 * 根据 HTTP code 设置对应的 HTTP status
 * @param statusCode {String|Number} HTTP code
 * @param status {String} HTTP status
 * @returns {Object} HTTP status MAP
 */
exports.set = function (statusCode, status) {
    statusCode = String(statusCode).toLowerCase();
    status = String(status);
    httpStatusCodeMap[statusCode] = status;

    return httpStatusCodeMap;
};

