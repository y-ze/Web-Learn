/**
 *  @file: 网络请求API
 *  @author： 杨泽
 */
import axios from 'axios';

// 配置全局属性
axios.defaults.baseURL = 'http://localhost:3000';
// let timeOut = 30;

export default {
    // GET
    get: function get(path = '', params = {}) {
        return new Promise(function (resolve, reject) {
            console.log(params);
            axios.get(path, params).then(function (response) {
                console.log(response);
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            });
        });
    },
    // POST
    post: function post(path = '', params = {}) {
        return new Promise(function (resolve, reject) {
            axios.post(path, params).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject(error);
            });
        });
    }
};
