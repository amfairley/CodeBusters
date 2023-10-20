function handleResize() {
  // this function redraw the game in the new size
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  const CANVAS_W = (canvas.width = newWidth - newWidth * .1);
  const CANVAS_H = (canvas.height = newHeight - newHeight * .1);

  let gameSpeed = 1;
  let gameFrame = 0;


  class InputHandler {
    // This will be used to pop the Ghosts
    constructor() {
        this.keys = [];
        this.touchX = null;
        this.touchY = null;

        window.addEventListener('touchstart', this.handleTouchStart.bind(this));
        window.addEventListener('click', this.handleClick.bind(this));
    }

    handleTouchStart(e) {
        this.touchX = e.touches[0].clientX;
        this.touchY = e.touches[0].clientY;
    }

    handleClick(e) {
        this.touchX = e.clientX;
        this.touchY = e.clientY;
    }
}

// Layer Class to create background
  class Layer {
    constructor(image, speedModifier) {
      this.x = 0;
      this.y = 0;
      this.width = CANVAS_W; 
      this.height = CANVAS_H;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }

    update() {
      this.speed = gameSpeed * this.speedModifier;
      this.x = gameFrame * this.speed % - this.width;
    }

    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
  }
  const yardBackground = [
    { img: 'assets/images/background/0_sky.png', speed: 0.0001 },
    { img: 'assets/images/background/1_moon.png', speed: 0.0002 },
    { img: 'assets/images/background/2_landscape.png', speed: 0.002 },
    { img: 'assets/images/background/3_building.png', speed: 0.05 },
    { img: 'assets/images/background/4_mist_b.png', speed: 0.1 },
    { img: 'assets/images/background/5_yard.png', speed: 0.2 },
    { img: 'assets/images/background/6_mist_a.png', speed: 0.3 },
    { img: 'assets/images/background/7_road.png', speed: 0.5 },
    { img: 'assets/images/background/road_stone.png', speed: 1 },
  ];

  function createBackground(images) {
    const backgrounds = images.map(img => {
      const back = new Image();
      back.src = img.img;
      return new Layer(back, img.speed);
    });
    return backgrounds;
  }
  const background = createBackground(yardBackground);
  // end background

  // Create ghosts enemies
  const enemyImage = new Image();
  enemyImage.src = 'assets/images/monsters/ghosts.png';

  class Enemy {
    constructor(frame) {
      this.x = Math.floor(Math.random() * CANVAS_W - CANVAS_W/10)
      this.y = Math.floor(Math.random() * CANVAS_H - CANVAS_H/10);
      this.speed = Math.random() + .1;
      this.spriteW = 158;
      this.spriteH = 152;
      this.width = 25 + this.spriteW * CANVAS_W / 3000;
      this.height = 25 + this.spriteH * CANVAS_W / 3000;
      this.frame = frame;
      this.innerMoveSpeed = Math.floor(Math.random() * 10 + 5)
    }
    update(){
      this.x += this.speed * Math.random() * 5;
      this.y += this.speed * Math.random() * 5;
      if (gameFrame % this.innerMoveSpeed == 0) this.frame >= 4 ? this.frame = 0 : this.frame++;
    }
    draw() {
      ctx.drawImage(enemyImage, this.frame * this.spriteW, 0, this.spriteW, this.spriteH, this.x, this.y, this.width, this.height)
    }
  }
  const enemiesArray = [];

  for (let i = 0; i< 10; i++) {
    enemiesArray.push(new Enemy(i));
  }
  // End of the enemies


// Create Jack lantern
  class MainChar {
    constructor(image, speedModifier) {
      this.x = 200;
      this.y = CANVAS_H - CANVAS_H / 3.5 ;
      this.speed = 0;
      this.spriteW = 102;
      this.spriteH = 140;
      this.width = 25 + this.spriteW * CANVAS_W / 3000;
      this.height = 25 + this.spriteW * CANVAS_W / 3000;
      this.frame = 0;
      this.innerMoveSpeed = 5;
      this.image = image
    }
    update() {
      this.x += this.speed;
      if (gameFrame % this.innerMoveSpeed == 0) {
        this.frame = this.frame >= 9 ? 0 : this.frame + 1;
      }
    }
    draw() {
      ctx.drawImage(this.image, this.frame * this.spriteW, 0, this.spriteW, this.spriteH, this.x, this.y, this.width+10, this.height+20);
    }
  }

  const lantern = new Image();
  lantern.src = 'assets/images/lantern_s.png';
  mainChar = new MainChar(lantern, 1)
  //  end of Jack lantern


  // Main function
  function animate() {
    // clear canvas
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    // draw and update background
    background.forEach(back => {
      back.draw();
      back.update();
    });
    // draw and update enemies
    enemiesArray.forEach(enemy => {
      enemy.draw();
      enemy.update();
    });
    // draw and update main char
    mainChar.draw();
    mainChar.update();
    gameFrame--;
    requestAnimationFrame(animate);
  }
  animate();
}
// run the game
handleResize()
// look for resizes on the screen
window.addEventListener("resize", handleResize);

