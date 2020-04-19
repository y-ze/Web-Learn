(function() { 
    function DivModel(color, lineColor, size) {
        this.color = color;
        this.lineColor = lineColor;
        this.size = size;
    }

    var divModel = new DivModel('#FF69B4', '', '100px');

    // Object.defineProperty(divModel,'size',)

    function createDiv(divModel) {
        let div = document.createElement('div');
        div.style.backgroundColor = divModel.color;
        div.style.width = divModel.size;
        div.style.height = divModel.size;
        div.style.lineHeight = divModel.size;
        div.innerText = '这是一个秋天';
        div.style.textAlign = 'center';
        div.style.overflow = 'hidden';
        document.body.appendChild(div);
    }

    createDiv(divModel);

    // 使用 __proto__
    var obj = {};
    var descriptor = Object.create(null); // 没有继承的属性
    // 默认没有 enumerable，没有 configurable，没有 writable
    descriptor.value = 'static';
    Object.defineProperty(obj, 'key', descriptor);
    obj.key = 'dynamic';
    console.log(obj)

    // 显式
    Object.defineProperty(obj, 'key', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: 'static'
    });
    obj.key = 'dynamic';

    console.log(obj)

    // 循环使用同一对象
    function withValue(value) {
        var d = withValue.d || (
            withValue.d = {
                enumerable: false,
                writable: false,
                configurable: false,
                value: null
            }
        );
        d.value = value;
        return d;
    }
    // ... 并且 ...
    Object.defineProperty(obj, 'key', withValue('static'));
    console.log(obj)

    // 如果 freeze 可用, 防止代码添加或删除对象原型的属性
    // （value, get, set, enumerable, writable, configurable）
    // (Object.freeze || Object)(Object.prototype);
}());
