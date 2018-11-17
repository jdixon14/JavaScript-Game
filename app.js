// Enemies our player must avoid
class Enemy{
  constructor(x, y, speed){
    this.sprite = 'images/enemy-bug.png';
    this.location = [x,y];
    this.speed = speed;
  }

    update(dt) {
      this.x = this.x + this.speed * dt;

      if(this.x > 505){this.x = 0;}
    }

    render(){
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player{
  constructor(x, y){
    this.sprite = 'images/char-boy.png';
    this.size = [175, 100];
    this.startLocation = [250, 500];
    this.endZone = 50;
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset(){
    this.x = startLocation[0];
    this.y = startLocation[1];
  }

  outOfBounds(){
    alert("Out Of Bounds! Try Again")
    reset();
  }

  score(){
    alert("Goal!!! Keep Going!")
    reset();
  }

  update(){
    if(this.y < this.endZone){
      score();
    }

    if(this.x < 0){outOfBounds();}

    else if(this.x > ctx.canvas.width){outOfBounds();}

    else if(this.y > ctx.canvas.height){outOfBounds();}
  }

  handleInput(keyPress){
    switch (keyPress) {
      case 'up':
      this.y -= 50;
        break;

      case 'down':
      this.y += 50;
      break;

      case 'left':
      this.x -= 50;
      break;

      case 'right':
      this.x += 50;
      break;
    }
  }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [new Enemy(0, 400, 300), new Enemy(-75, 200, 150),
  new Enemy(-150, 300, 500), new Enemy(-150, 125, 300),
  new Enemy(-200, 170, 400)];
let player = new Player(270, 530);

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
