class HYPromise {
    constructor(hanlder) {
        if (!this.isFunction(hanlder)) {
            throw new Error('cuowu');
        }
    }

    // 判断是否传入函数
    isFunction(fn) {
        return typeof fn === 'function';
    }
}