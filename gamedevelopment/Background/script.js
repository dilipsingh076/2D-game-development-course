const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 700;

let gameSpeed = 4;

// this gameframe use we will do when our images are small.
// let gameFrame = 0;


const backgroundLayer1 = new Image();
backgroundLayer1.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-1.png'
const backgroundLayer2 = new Image();
backgroundLayer2.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-2.png'
const backgroundLayer3 = new Image();
backgroundLayer3.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-3.png'
const backgroundLayer4 = new Image();
backgroundLayer4.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-4.png'
const backgroundLayer5 = new Image();
backgroundLayer5.src = 'https://www.frankslaboratory.co.uk/downloads/97/layer-5.png'

window.addEventListener('load',function(){

const slider = document.getElementById('slider');
slider.value = gameSpeed;

const showGameSpeed = document.getElementById('showGameSpeed');
showGameSpeed.innerHTML = gameSpeed;
slider.addEventListener('change', function(e){
console.log(e)
gameSpeed = e.target.value;
showGameSpeed.innerHTML = e.target.value
})

// both is written in initial time 
// let x = 0
// let x2 = 2400;

class Layer {
    constructor (image, speedModifier){
        this.x = 0;
        this.y =0;
        this.width = 2400;
        this.height = 700;
        // this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;

    }
    update(){
        this.speed = gameSpeed * this.speedModifier;
        if(this.x <= -this.width){
            // this.x = this.width + this.x2 - this.speed;
            this.x = 0;
        }
        this.x = this.x -this.speed;
        // if(this.x2 <= -this.width){
        //     this.x2 = this.width + this.x - this.speed;
        // }
        // this.x = Math.floor(this.x - this.speed);
        // this.x2 = Math.floor(this.x2 - this.speed)

        // we use this when we use gameframe
        // this.x = gameFrame * this.speed % this.width;

    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);

    }
}

const layer1 = new Layer(backgroundLayer1, 0.2)
const layer2 = new Layer(backgroundLayer2, 0.3)
const layer3 = new Layer(backgroundLayer3, 0.6)
const layer4 = new Layer(backgroundLayer4, 0.8)
const layer5 = new Layer(backgroundLayer5, 1)










const gameObjects = [layer1, layer2, layer3, layer4, layer5]




function animate (){
    ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT)

    gameObjects.forEach((object)=>{
        object.update();
        object.draw();
    });
    // gameFrame--



    // this is code repeatation so we will optimise this using array
    // layer1.update();
    // layer1.draw();
    // layer2.update();
    // layer2.draw();
    // layer3.update();
    // layer3.draw();
    // layer4.update();
    // layer4.draw();
    // layer5.update();
    // layer5.draw();








    // both is written in initial time
    // ctx.drawImage(backgroundLayer2,x,0);
    // ctx.drawImage(backgroundLayer2,x2,0);

    // if(x < -2400){
    //     x = 2400 + x2 - gameSpeed;
    // }else{
    //     x -= gameSpeed;
    // }
    // if(x2 < -2400){
    //     x2 = 2400 + x - gameSpeed;
    // }else{
    //     x2 -= gameSpeed;
    // }

    requestAnimationFrame(animate);
}
animate()
})


