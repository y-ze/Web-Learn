/**
 * @file:Demo
 * @author: yangze
 */
(function () {
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    console.log(a);
    a[6](); // 10

    var name = "suyan";
    function call(isTrue) {
        if (isTrue){
            let name = "    qianduan";
        }
        console.log(name);
    }
    call(true);



})();
