/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
const numberOfEnemy = 20
const enemiesArray = []

// const enemyImage = new Image();
// enemyImage.src = 'https://www.frankslaboratory.co.uk/downloads/97/enemy_bat_3.png';

let gameFrame = 0;

// this is brutforce method to create enemy we will optimise this using class constructor function.
// enemy1 = {
//  x :0,
//  y:0,
//  width:200,
//  height:200,
// }


class Enemy {
    constructor(){

        this.image = new Image();
        this.image.src = 'https://www.frankslaboratory.co.uk/downloads/97/enemy_bat_3.png'
        this.speed = Math.random() * 4 + 1
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth /2;
        this.height = this.spriteHeight/2;
        this.x = Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - this.height);
        this.newX = Math.random() * (canvas.width - this.width);
        this.newY = Math.random() * (canvas.height - this.height);
        this.frame =0;
        this.flapSpeed = Math.floor(Math.random() * 3 +1);
        this.interval = Math.random() * 200 +50;


        // this.angle = Math.random() * 500;
        // this.angleSpeed = Math.random() * 0.5 +0.5;

        // this.curve = Math.random() * 200 +50;



    }
    update(){
        if(gameFrame % this.interval === 0){
            this.newX = Math.random() * (canvas.width - this.width)
            this.newY = Math.random() * (canvas.height - this.height);

        }

        let dx  = this.x - this.newX;
        let dy  = this.y - this.newY

        this.x -= dx/70;
        this.y -= dy/70;


        // this.x = 0;
        // this.y = 0;
        // this.x = canvas.width/2 * Math.cos(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);
        // this.y = canvas.height/2 * Math.sin(this.angle * Math.PI/180) + (canvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;
        if(this.x + this.width < 0){
            this.x = canvas.width;
        }
        if(gameFrame % this.flapSpeed ===0){
            this.frame > 4 ? this.frame =0 : this.frame++
        }
        
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image,this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)
    
    
    }
}

for(let i =0; i< numberOfEnemy;i++){
    enemiesArray.push(new Enemy());
}







function animate (){
    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    // enemy1.update()
    // enemy1.draw()
    enemiesArray.forEach(enemy => {
        enemy.update()
        enemy.draw()
    });
    gameFrame++

    // ctx.fillRect(enemy1.x, enemy1.y, enemy1.width, enemy1.height);
    requestAnimationFrame(animate)




}
animate()