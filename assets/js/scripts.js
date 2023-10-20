

function handleResize() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;

  const CANVAS_W = (canvas.width = newWidth - newWidth * .1);
  const CANVAS_H = (canvas.height = newHeight - newHeight * .1);

  let gameSpeed = 1;
  let gameFrame = 0;

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

  // Create the yard Background
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

  const enemyImage = new Image();
  enemyImage.src = 'assets/images/monsters/ghosts.png';


  class Enemy {
    constructor(frame) {
      this.x = Math.floor(Math.random() * CANVAS_W - CANVAS_W/10)
      this.y = Math.floor(Math.random() * CANVAS_H - CANVAS_H/10);
      this.speed = Math.random() ;
      this.spriteW = 158;
      this.spriteH = 152;
      this.width = this.spriteW  / 2;
      this.height = this.spriteH / 2;
      this.frame = frame;
    }
    update(){
      this.x += Math.sin(this.speed * Math.random() * 2);
      this.y += Math.sin(this.speed * Math.random() * 1 );
      if (gameFrame % 8 == 0) this.frame >= 4 ? this.frame = 0 : this.frame++;
    }
    draw() {
      ctx.drawImage(enemyImage, this.frame * this.spriteW, 0, this.spriteW, this.spriteH, this.x, this.y, this.width, this.height)
    }
  }
  const enemiesArray = [];

  for (let i = 0; i< 10; i++) {
    enemiesArray.push(new Enemy(i));
  }

  function animate() {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    background.forEach(back => {
      back.draw();
      back.update();
    });
    enemiesArray.forEach(enemy => {
      enemy.draw();
      enemy.update();
    });
    gameFrame--;
    requestAnimationFrame(animate);
  }
  animate();
}
handleResize()
window.addEventListener("resize", handleResize);

