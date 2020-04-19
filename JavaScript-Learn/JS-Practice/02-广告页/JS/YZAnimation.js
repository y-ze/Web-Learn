
// 线性动画
function linearAnimation(element, attribute, target , time ) {
    let avarageTime = 200;
    clearInterval(element.timeID);  
    let start = parseInt(getComputedStyle(element)[attribute]);
    let totalDistance = Math.abs(target - start);
    let speed = totalDistance / (time / (avarageTime / 1000));
    speed = target > start ? speed : -speed;
    console.log("speed" + speed + "  " + totalDistance);

    element.timeID = setInterval(() => {
        let begin = parseInt(element.style[attribute]) || 0;
        begin += speed;
        if(Math.abs(target - begin) <= Math.abs(speed)){
            clearInterval(element.timeID);
            begin = target;
            }
    // 4.重新设置元素的位置
    element.style[attribute] = begin + "px";
    }, avarageTime);
}