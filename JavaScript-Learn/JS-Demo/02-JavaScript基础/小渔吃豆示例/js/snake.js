(function () {
    class Snake{
        constructor(options) {
            options = options || {};
            // 行数和列数
            this.rowNum = options.rowNum || 10;
            this.colNum = options.colNum || 8;

            // 每一节蛇宽度和高度
            this.width = options.width || 100;
            this.height = options.height || 100;

            // 食物的图片
            this.headImg = options.headImg || "images/head.png";
            this.bodyImg = options.bodyImg || "images/body.png";

            // 存储蛇所有节点
            this.bodies = [
                {x: 2, y: 1, type: 1},
                {x: 1, y: 1, type: 0},
                {x: 0, y: 1, type: 0}
            ];
            // 接收键盘事件
            // let self = this;
            document.onkeydown = (e) => {
                this.direction =  e.key.toLowerCase();
            }
        }
        rander(map){
            map = map || this.map;
            // 删除上一次蛇所有节点
            let snakes = document.querySelectorAll(".snake");
            console.log(snakes);
            for(var i = snakes.length - 1; i >= 0; i--){
                var oDiv = snakes[i];
                // 1.将蛇元素从界面上删除
                map.removeChild(oDiv);
            }

            // 创建所有蛇的节点
            for(let value of this.bodies){
                // 1.动态的创建一个div元素, 作为蛇
                let oDiv = document.createElement("div");
                // 2设置蛇样式
                oDiv.style.width = this.width + "px";
                oDiv.style.height = this.height + "px";
                oDiv.className = "snake";
                if(value.type === 1){
                    oDiv.style.background = `url(${this.headImg})`;
                }else{
                    oDiv.style.background = `url(${this.bodyImg})`;
                }

                // 3.设置蛇位置
                oDiv.style.position = "absolute";
                oDiv.style.left = value.x * this.width + "px";
                oDiv.style.top = value.y * this.height + "px";
                // 4.将创建的div添加到地图中
                map.appendChild(oDiv);
            }
            this.map = map;
        }
        update(food){
            let self = this;
            this.timer = setInterval(function () {
                self.move();
                self.inspection(food);
            }, 1000);
        }
        move(){
            // 1.让蛇身移动,从最后一节蛇身体开始移动, 让后一节身体等于前一节身体的值
            for(var i = this.bodies.length - 1; i > 0; i--){
                this.bodies[i].x = this.bodies[i - 1].x;
                this.bodies[i].y = this.bodies[i - 1].y;
            }
            // 2.让蛇头移动
            let head = this.bodies[0];
            switch (this.direction){
                case "w":
                    head.y -= 1;
                    break;
                case "s":
                    head.y += 1;
                    break;
                case "a":
                    head.x -= 1;
                    break;
                case "d":
                    head.x += 1;
                    break;
                default:
                    head.x += 1;
                    break;
            }
        }
        inspection(food){
            let head = this.bodies[0];
            // 检查自己有没有碰到墙壁
            if(head.x >= this.rowNum || head.y >= this.colNum ||
                head.x < 0 || head.y < 0){
                alert("Game Over"+ head.x + head.y);
                clearInterval(this.timer);
                return;
            }
            // 检查有没有吃到食物
            if(head.x === food.x && head.y === food.y){
                // 新增一节蛇身体
                let lastBody = this.bodies[this.bodies.length - 1];
                let newBody = {x: lastBody.x, y: lastBody.y, type: 0};
                switch (this.direction){
                    case "w":
                        newBody.y = lastBody.y + 1;
                        break;
                    case "s":
                        newBody.y = lastBody.y - 1;
                        break;
                    case "a":
                        newBody.x = lastBody.x + 1;
                        break;
                    case "d":
                        newBody.x = lastBody.x - 1;
                        break;
                    default:
                        head.x += 1;
                        break;
                }
                this.bodies.push(newBody);
                // 删除食物
                food.remove();
                // 重新生成食物
                food.rander();
            }
            // 重新渲染蛇
            this.rander();
        }
    }
    window.Snake = Snake;
})();