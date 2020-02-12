// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x=x;
    this.y=y;
    this.speed=speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x=this.x+this.speed*dt + 4;
    if(this.x >=500){
        this.x=0;
        this.speed=60*Math.random();
        this.y=70*randomInteger(1,3);
    }
    if((this.x > player.x -30 && this.x < player.x + 30)&&
     (this.y > player.y - 40 && this.y < player.y + 40)){
       player.reset();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// i take this function from https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player{
    constructor(x,y){
        this.sprite='images/char-boy.png';
        this.x=x;
        this.y=y;
    }
    update(){ 
        if(this.x <-15){
            this.x=-15;  
        }
        if(this.y < -10){
            this.y=-10;
         }
         if(this.x > 420){
            this.x=420;  
        }
        if(this.y > 450 ){
            this.y=450;
        }

    }
    render(){ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}
    handleInput(keys){
        switch(keys){
            case 'left':
                this.x -=30;
                break;
            case  'up':
                this.y -=30;
                break;
            case  'right':
                this.x +=30;               
                break;
            case   'down':
                this.y +=30;
                break;
            default:
                null;            

        }
    }
    reset(){
        this.x=300;
        this.y=450; 

    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies=[];
let animeyNumber=[1,2,3];
animeyNumber.forEach(function(number){
    const newEnemy=new Enemy(0,70*number,60*Math.random());
    allEnemies.push(newEnemy);
} )
const player = new Player(300,450);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
   player.handleInput(allowedKeys[e.keyCode]);
});
