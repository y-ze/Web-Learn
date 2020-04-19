(function () {
    class Food{
        constructor(options){
            options = options || {};
            // 行数和列数
            this.rowNum = options.rowNum || 10;
            this.colNum = options.colNum || 8;

            // 食物宽度和高度
            this.width = options.width || 100;
            this.height = options.height || 100;

            // 食物的图片
            this.img = options.img || "images/body.png";
        }
        rander(map){
            map = map || this.map;
            // 1.动态的创建一个div元素, 作为食物
            var oDiv = document.createElement("div");

            // 2设置食物样式
            oDiv.style.width = this.width + "px";
            oDiv.style.height = this.height + "px";
            oDiv.style.background = `url(${this.img})`;

            // 3.随机生成食物位置
            this.x = getRandomIntInclusive(0, this.rowNum - 1);
            this.y = getRandomIntInclusive(0, this.colNum - 1);

            // 4.设置食物位置
            oDiv.style.position = "absolute";
            oDiv.style.left = this.x * this.width + "px";
            oDiv.style.top = this.y * this.height + "px";

            // 5.将创建的div添加到地图中
            map.appendChild(oDiv);
            this.oDiv = oDiv;
            this.map = map;
        }
        remove(){
            this.map.removeChild(this.oDiv);
        }
    }
    window.Food = Food;
})();