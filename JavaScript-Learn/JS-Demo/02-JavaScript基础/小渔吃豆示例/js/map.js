(function () {
    class SnakeMap{
        constructor(options){
            options = options || {};
            // 1.食物对象
            this.food = options.food || {};
            // 2.蛇对象
            this.snake = options.snake || {};
        }
        rander(options){
            options = options || {};
            // 1.创建地图
            let oMap = document.createElement("div");
            oMap.style.width = options.width || "1000px";
            oMap.style.height = options.width || "800px";
            oMap.style.background = `url(${options.img || "images/map.jpg"})`;
            oMap.style.position = "relative";
            oMap.style.left = "50%";
            oMap.style.top = "50%";
            oMap.style.transform = "translate(-50%, -50%)";
            oMap.style.border = "1px solid #000";

            document.body.appendChild(oMap);
            this.oMap = oMap;
            // 2.渲染食物
            this.food.rander(oMap);
            this.snake.rander(oMap);
        }
        start(){
            this.snake.update(this.food);
        }
    }
    window.SnakeMap = SnakeMap;
})();