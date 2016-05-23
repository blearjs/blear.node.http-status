/**
 * mocha 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var expect = require('chai').expect;
var httpStatus = require('../src/index.js');

describe('测试文件', function () {
    it('.get', function () {
        expect(httpStatus.get(200)).to.equal('OK');
        expect(httpStatus.get(900)).to.equal('unknow');
        expect(httpStatus.get(900, 'xxx')).to.equal('xxx');
    });

    it('.set', function () {
        httpStatus.set(900, 'yyy');
        expect(httpStatus.get(900, 'zzz')).to.equal('yyy');
    });
});

