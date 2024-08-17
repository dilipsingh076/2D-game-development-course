
let playerState = 'fall'
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value
})

const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
console.log('ctx',ctx)

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage  = new Image();
playerImage.src = 'https://www.frankslaboratory.co.uk/downloads/shadow_dog.png'
const spriteHeight = 523;
const spriteWidth =575;


let gameFrame = 0;
const staggerFrames = 5
const spriteAnimation = [];
const animationStates = [
    {
        name:'idle',
        frames: 7
    },
    {
        name:'jump',
        frames: 7
    },
    {
        name:'run',
        frames: 9
    },
    {
        name:'fall',
        frames: 9
    },
    {
        name:'dizzy',
        frames: 11
    },
    {
        name:'sit',
        frames: 5
    },
    {
        name:'roll',
        frames: 7
    },
    {
        name:'bite',
        frames: 7
    },
    {
        name:'ko',
        frames: 12
    },
    {
        name:'gethit',
        frames: 4
    },
]

animationStates.forEach((state,index) => {
    let frames = {
        loc:[],
    }
    for(let j = 0;j< state.frames;j++){
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x:positionX, y:positionY});
    }
    spriteAnimation[state.name] = frames;

})
console.log("check animation state", spriteAnimation)


function animate (){
    ctx.clearRect(0, 0 ,CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimation[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimation[playerState].loc[position].y




    // ctx.fillRect(100,50,100,100);
    // ctx.drawImage(image,sx, sy,sw,sh,dx,dy,dw,dh)
    ctx.drawImage(playerImage,frameX , frameY,spriteWidth,spriteHeight,0,0 , spriteWidth, spriteHeight)

    if(gameFrame % staggerFrames == 0){
        if(frameX < 4) {
            frameX++;
        }else{ 
            frameX = 0
        }
    }
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();