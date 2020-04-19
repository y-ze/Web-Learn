
let oImage = document.querySelector("img");
oImage.onclick = function() {

    // setInterval(() => {
        let specter = new Specter(function(){
            specter.destroy();
        })
        specter.fly();
    // }, 10000000);

}


class Specter {

        constructor(click) {
            let oDiv = document.createElement("div");
            oDiv.style.top = "1000px";
            oDiv.className = "parentItem";
            oDiv.onclick = click;

            let random = Math.random() * 1500 + "px";
            
            oDiv.style.left = random;

            let span = document.createElement("span");
            span.innerText = "U";

            oDiv.appendChild(span)

            console.log("111");

            document.body.appendChild(oDiv)
            this.oDiv = oDiv;
        }

        fly() {
            let offset = parseInt(this.oDiv.style.top);

            this.timer = window.setInterval(() => {

                offset -= 20;
                if(offset <= -300){
                    this.destroy();
                }
                this.oDiv.style.top = offset + "px";

            }, 200);
        }

        destroy() {
            document.body.removeChild(this.oDiv);
            clearInterval(this.timer);
        }
}