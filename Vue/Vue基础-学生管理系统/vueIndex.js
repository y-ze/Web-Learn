(function () {
    // console.log('-----');

    var vueMessage = 'Hello Vue';

    var app2 = new Vue({
        el: '#app-2',
        data: {
            message: '页面加载于' + new Date().toLocaleString
        }
    });

    var app = new Vue({
        el: '#app',
        data: {
            message: vueMessage
        }
    });

    var app3 = new Vue({
        el: '#app',
        data: {
            seen:false
        }
    });

    var data = {
        a: 1
    };

    var vm = new Vue({
        el: '#example',
        data: data
    });

    var vm = new Vue ({
        el: '#app-4',
        data: {
            student: {
                value1: '我是学生1',
                value2: '我是学生2',
                value3: '我是学生3',
                value4: '我是学生4',
                value5: '我是学生5'
            }
        }
    });

    console.log(vm.$data === data);
    console.log(vm.$el === document.getElementById('example'));

    // $watch 是一个实例方法
    vm.$watch('a', function (newValue, oldValue) {
      // 这个回调将在 `vm.a` 改变后调用
      console.log( "----" + vm.a);
    });


    setTimeout(() => {
        vm.a = 234;
    }, 6000);
}());
