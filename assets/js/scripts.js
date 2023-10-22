// INDEX PAGE

const audio = document.querySelector('audio');
const volumeButton = document.getElementById('volumeButton');
const volumeIcon = document.getElementById('volumeIcon');



// Mute and mute index page
function toggleAudio() {
  if (audio.paused) {
      audio.play();
      volumeIcon.classList.remove('fa-volume-mute');
      volumeIcon.classList.add('fa-volume-high');
  } else {
      audio.pause();
      volumeIcon.classList.remove('fa-volume-high');
      volumeIcon.classList.add('fa-volume-mute');
  }
}

volumeButton.addEventListener('click', toggleAudio);


// Variables for modal box
const closeInstructions = document.getElementById('close-instructions');
const rulesModal = document.getElementById('rules');

// Close instructions when clicking on button
closeInstructions.onclick = function () {
  rulesModal.style.display = "none";
};

//GAME PAGE

function handleResize() {
  // this function redraw the game in the new size
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight;
const backgroundScreens = [
    {id: 0, name:  "Ghostly Gathering Grounds"},
    {id: 1, name:  "Spectral Shenanigans on Main street"},
    {id: 2, name:  "The Lonesome Road"},
    {id: 3, name:  "Spectral Harmony Yard"},
  ]

  const CANVAS_W = (canvas.width = newWidth - newWidth * 0.2);
  const CANVAS_H = (canvas.height = newHeight - newHeight * 0.3);

  let gameSpeed = 1;
  let gameFrame = 0;
  let maxGhosts = 5;
let STAGE = 0;
  const startBtn = document.getElementById("start-btn");
  const restartBtn = document.getElementById("end-game");
  const gameOverDisplay = document.getElementById("gameOver");
  const displayPoints = document.getElementById("ghosts-points");
  const displayLives = document.getElementById("player-lives");
  let POINTS = 0
  let LIVES = 3
// Variable for Homepage button in game area
const goBackToMenuButton = document.getElementById('go-back-to-menu');

// Click event listener to homepage button in game area
goBackToMenuButton.addEventListener('click', function(){
  window.location.href = 'index.html';
})

  gameOverDisplay.style.display = "none";

  function hasCollided(centerX1, centerY1, centerX2, centerY2, radius1, radius2) {
    // Detect if the distance is smaller than 2 radius
    // https://www.youtube.com/watch?v=GFO_txvwK_c&t=6524s
    if (centerX1  == null ) {
      return false;
    }
    const dx = centerX1 - centerX2;
    const dy = centerY1 - centerY2;
    const distance = Math.sqrt(dx*dx + dy*dy)
    const radiusSum = radius1 + radius2;
    if (distance < radiusSum){
      return true;
    }
    return false;
  }


  class InputHandler {
    constructor(canvas) {
      this.canvas = canvas;
      this.touchX = null;
      this.touchY = null;
      
      canvas.addEventListener("touchstart", this.handleTouchStart.bind(this));
      canvas.addEventListener("click", this.handleClick.bind(this));
    }
  
    handleTouchStart(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.touchX = e.touches[0].clientX - rect.left;
      this.touchY = e.touches[0].clientY - rect.top;
    }
  
    handleClick(e) {
      const rect = this.canvas.getBoundingClientRect();
      this.touchX = e.clientX - rect.left;
      this.touchY = e.clientY - rect.top;
    }
  
    clear() {
      this.touchX = null;
      this.touchY = null;
    }
  }

  // Background class
  class Background {
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
      this.x = (gameFrame * this.speed) % -this.width;
    }

    draw() {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      ctx.drawImage(
        this.image,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    }
    updateDraw() {
      this.update();
      this.draw();
    }
  }
  const scenes = [[
    { img: "assets/images/background/0_sky.png", speed: 0.0001 },
    { img: "assets/images/background/1_moon.png", speed: 0.0002 },
    { img: "assets/images/background/2_landscape.png", speed: 0.002 },
    { img: "assets/images/background/3_building.png", speed: 0.05 },
    { img: "assets/images/background/4_mist_b.png", speed: 0.1 },
    { img: "assets/images/background/5_yard.png", speed: 0.2 },
    { img: "assets/images/background/6_mist_a.png", speed: 0.3 },
    { img: "assets/images/background/7_road.png", speed: 0.5 },
    { img: "assets/images/background/road_stone.png", speed: 1 },
  ],[
    { img: "assets/images/background2/layer-1g.png", speed: 0.0001 },
    { img: "assets/images/background2/layer-2g.png", speed: 0.0002 },
    { img: "assets/images/background2/layer-3g.png", speed: 0.1 },
    { img: "assets/images/background2/layer-4g.png", speed: 0.1 },
    { img: "assets/images/background2/layer-5g.png", speed: 1 },
  ], [
    { img: "assets/images/background/0_sky.png", speed: 0.0001 },
    { img: "assets/images/background3/layer-2g.png", speed: 0.0002 },
    { img: "assets/images/background3/layer-3g.png", speed: 0.1 },
    { img: "assets/images/background3/layer-4g.png", speed: 0.1 },
    { img: "assets/images/background3/layer-5g.png", speed: 1 },
  ],
  [
    { img: "assets/images/background4/layer-1g.png", speed: 0.0001 },
    { img: "assets/images/background4/layer-2g.png", speed: 0.0002 },
    { img: "assets/images/background4/layer-3g.png", speed: 0.0001 },
    { img: "assets/images/background4/layer-4g.png", speed: 0.0002 },
    { img: "assets/images/background4/layer-5g.png", speed: 0.05 },
    { img: "assets/images/background4/layer-6g.png", speed: 0.2 },
    { img: "assets/images/background4/layer-7g.png", speed: 0.5 },
    { img: "assets/images/background4/layer-8g.png", speed: 1 },
  ]]

  function createBackground(images) {
    const backgrounds = images.map((img) => {
      const back = new Image();
      back.src = img.img;
      return new Background(back, img.speed);
    });
    return backgrounds;
  }

  class Explosion {
    constructor(x, y) {
      this.speed = Math.random() + 0.1;
      this.spriteW = 100;
      this.spriteH = 90;
      this.width = this.spriteW;
      this.height = this.spriteH;
      this.x = x - this.width / 2;
      this.y = y - this.height / 2;
      this.image = new Image();
      this.image.src = "assets/images/exploded/boom.png";
      this.frame = 0;
    }
    update() {
      if (gameFrame % 5 == 0)
        this.frame++;
    }
    draw() {
      ctx.drawImage(
        this.image,
        this.frame * this.spriteW,
        0,
        this.spriteW,
        this.spriteH,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  class Enemy {
    constructor(frame) {
      this.x = CANVAS_W / 4 + Math.floor(Math.random() * CANVAS_W - CANVAS_W / 10);
      this.y = Math.floor(Math.random() * CANVAS_H - CANVAS_H / 10);
      this.speed = Math.random() + 0.1 * gameSpeed;
      this.spriteW = 158;
      this.spriteH = 152;
      this.width = 25 + (this.spriteW * CANVAS_W) / 3000;
      this.height = 25 + (this.spriteH * CANVAS_W) / 3000;
      this.frame = frame;
      this.innerMoveSpeed = Math.floor(Math.random() * 2 + 8);
      this.radius = this.spriteH / 4;
      this.centerX = 0
      this.centerY = 0
    }
    update(jackX, jackY) {
      const dx = jackX - this.x;
      const dy = jackY - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const directionX = dx / distance;
      const directionY = dy / distance;
      this.x += this.speed * directionX;
      this.y += this.speed * directionY;

      if (gameFrame % this.innerMoveSpeed == 0)
        this.frame >= 4 ? (this.frame = 0) : this.frame++;
        this.centerX = this.x + this.width / 2;
        this.centerY = this.y + this.height / 2;
    }
    draw() {
      ctx.drawImage(
        enemyImage,
        this.frame * this.spriteW,
        0,
        this.spriteW,
        this.spriteH,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
    updateDraw(jackX, jackY) {
      this.update(jackX, jackY);
      this.draw();
    }
  }

  class FriendlyGhost {
      constructor(frame) {
        this.x = CANVAS_W / 4 + Math.floor(Math.random() * CANVAS_W - CANVAS_W / 10);
        this.y = Math.floor(Math.random() * CANVAS_H - CANVAS_H / 10);
        this.speed = Math.random() + 0.1 * gameSpeed;
        this.spriteW = 158;
        this.spriteH = 152;
        this.width = 25 + (this.spriteW * CANVAS_W) / 3000;
        this.height = 25 + (this.spriteH * CANVAS_W) / 3000;
        this.frame = frame;
        this.innerMoveSpeed = Math.floor(Math.random() * 2 + 8);
        this.radius = this.spriteH / 4;
        this.centerX = 0
        this.centerY = 0
        this.life = 50;
      }
      update(jackX, jackY) {
        const dx = jackX - this.x;
        const dy = jackY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const directionX = dx / distance;
        const directionY = dy / distance;
        this.x += this.speed * directionX;
        this.y += this.speed * directionY;
  
        if (gameFrame % this.innerMoveSpeed == 0)
          this.frame >= 3 ? (this.frame = 0) : this.frame++;
          this.centerX = this.x + this.width / 2;
          this.centerY = this.y + this.height / 2;
      }
      draw() {
        this.life++;
        if (this.life > 200) {
          return;
        }
        ctx.drawImage(
          friendlyGhost,
          this.frame * this.spriteW,
          0,
          this.spriteW,
          this.spriteH,
          this.x,
          this.y,
          this.width,
          this.height
        );
      }
      updateDraw(jackX, jackY) {
        this.update(jackX, jackY);
        this.draw();
      }
    }
  
  class MainChar {
    constructor(image, speedModifier) {
      this.x = 200;
      this.y = CANVAS_H - CANVAS_H / 3.5;
      this.speed = 0;
      this.spriteW = 102;
      this.spriteH = 140;
      this.width = 25 + (this.spriteW * CANVAS_W) / 3000;
      this.height = 25 + (this.spriteW * CANVAS_W) / 3000;
      this.frame = 0;
      this.innerMoveSpeed = 5;
      this.image = image;
      this.radius = Math.floor(Math.min(this.height, this.height)/1.8)
      this.centerX = this.x + this.width / 2;
      this.centerY = this.y + this.height / 2;
    }
    update() {
      this.x += this.speed;
      if (gameFrame % this.innerMoveSpeed == 0) {
        this.frame = this.frame >= 9 ? 0 : this.frame + 1;
      }
    }
    draw() {
      ctx.drawImage(
        this.image,
        this.frame * this.spriteW,
        0,
        this.spriteW,
        this.spriteH,
        this.x,
        this.y,
        this.width + 10,
        this.height + 20
      );
      // // ctx.beginPath();
      // // ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI);
      // // ctx.stroke()
    }
    updateDraw() {
      this.update();
      this.draw();
    }


  }

  // Create all animations
  let background = createBackground(scenes[STAGE]);
  const enemiesArray = [];
  const friendlyArray = [];
  const enemyImage = new Image();
  enemyImage.src = "assets/images/monsters/ghosts_inverted.png";
  const friendlyGhost = new Image();
  friendlyGhost.src = "assets/images/monsters/ghost2ani.png";

  // Create initial ghosts
  for (let i = 0; i < 7; i++) {
    enemiesArray.push(new Enemy(i));
    if (Math.random() <= .15) { 
      friendlyArray.push(new FriendlyGhost(i));
    }
  }

  const jack = new Image();
  jack.src = "assets/images/lantern_s.png";
  mainChar = new MainChar(jack, 1);
  const inputs = new InputHandler(canvas);
  let explosions = [];

  // Main function
  function animate() {
    ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
    background.forEach((back) => {
      back.updateDraw();
    });
    // Update enemies
    let wasClicked = false;
    for (let i = 0; i < enemiesArray.length; i++) {
      const enemy = enemiesArray[i]; 
      wasClicked = hasCollided(inputs.touchX, inputs.touchY, enemy.centerX, enemy.centerY, 1, enemy.radius);
      if (wasClicked) {
        enemiesArray.splice(i, 1);
        i--;
        POINTS+=1;
        wasClicked = false;
        explosions.push(new Explosion(inputs.touchX, inputs.touchY))
        explosions[0].update()
        explosions[0].draw()
        inputs.clear();
      } else {
        if (hasCollided(mainChar.centerX, mainChar.centerY, enemy.centerX, enemy.centerY, mainChar.radius, enemy.radius)) {
          if (LIVES === 1){
            gameOverDisplay.style.display = "block";
            document.getElementById("score").value = POINTS;
            restartBtn.addEventListener("click", () => {
              gameOverDisplay.style.display = "none";
           })
          }
          LIVES-=1;
          enemiesArray.splice(i, 1);
          i--;
        }
        enemy.updateDraw(mainChar.x, mainChar.y);
      }
    }
    // Update friendly ghosts
    for (let i = 0; i < friendlyArray.length; i++) {
      const friendly = friendlyArray[i]; 
      wasClicked = hasCollided(inputs.touchX, inputs.touchY, friendly.centerX, friendly.centerY, 1, friendly.radius);
      if (wasClicked) {
        friendlyArray.splice(i, 1);
        i--;
        POINTS-=15;
        wasClicked = false;
        explosions.push(new Explosion(inputs.touchX, inputs.touchY))
        explosions[0].update()
        explosions[0].draw()
        inputs.clear();
        friendly.updateDraw(mainChar.x, mainChar.y);
      } else if (friendly.life > 200) {
        friendlyArray.splice(i, 1);
        i--;
      }
      friendly.updateDraw(mainChar.x, mainChar.y);
    }
    
  // make explosion
  if (explosions.length > 0) {
    for (let i = explosions.length - 1; i >= 0; i--) {
      explosions[i].update();
      explosions[i].draw();
      if (explosions[i].frame > 5) {
        explosions.splice(i, 1);
        console.log("remove explosion");
      }
      }
    }
    // draw and update main char
    mainChar.updateDraw()
    
    
    gameFrame--;
    requestAnimationFrame(animate);
    // Create new enemies
    if (enemiesArray.length < maxGhosts && (gameFrame % 2 == 0)) {
        enemiesArray.push(new Enemy(enemiesArray.length + 1));
        if (Math.random() <= .15) { 
          friendlyArray.push(new FriendlyGhost(friendlyArray.length + 1));
        }
    }
    // update game speed
    if (gameFrame % 1000 === 0){
      gameSpeed+=1;
    }
    // update max enemies
    if (gameFrame % 300 === 0){
      max+=1;
    }
// Change stage
    if (gameFrame % 500 === 0) {
      STAGE++;
      background = createBackground(scenes[STAGE])
      levelname1.innerHTML = backgroundScreens[STAGE].name;
    }
    // update points and lives
    displayPoints.innerHTML = POINTS;
    displayLives.innerHTML = LIVES;
  }
  animate();


  /**
   * Possible start button?
   */
  //startBtn.addEventListener("click", () => {
  //  animate();
  //  startBtn.style.display = "none";
 // })


  /**
   * Possible start button?
   */
  //startBtn.addEventListener("click", () => {
  //  animate();
  //  startBtn.style.display = "none";
 // })
  
}
// run the game
handleResize();
// look for resizes on the screen
window.addEventListener("resize", handleResize);
// add input handler



/**
 * Start Game timer (source: https://daily-dev-tips.com/posts/vanilla-javascript-timer/)
 */

const timer = document.getElementById('timer');
let timerInterval;

startTimer = () => {
  // Firs twe start by clearing the existing timer, in case of a restart
  clearInterval(timerInterval);
  // Then we clear the variables
  let second = 0,
    minute = 0,
    hour = 0;

  // Next we set a interval every 1000 ms
  timerInterval = setInterval(function () {

    // We set the timer text to include a two digit representation
    timer.innerHTML =
      (hour ? hour + ':' : '') +
      (minute < 10 ? '0' + minute : minute) +
      ':' +
      (second < 10 ? '0' + second : second);

    // Next, we add a new second since one second is passed
    second++;

    // We check if the second equals 60 "one minute"
    if (second == 60) {
      // If so, we add a minute and reset our seconds to 0
      minute++;
      second = 0;
    }

    // If we hit 60 minutes "one hour" we reset the minutes and plus an hour
    if (minute == 60) {
      hour++;
      minute = 0;
    }
  }, 1000);
};
//  end of game timer

//We start the game timer
startTimer();










// Start of Score section
//Read scores.json with Fetch API

const Errors = document.getElementById("error");

function get_scores(callback) {
  let file = "scores.json"
  fetch(file, {cache: 'no-cache'})
    .then(function(response){
      //If the response is not OK
      if(response.status !== 200){
        Errors.innerHTML = response.status;
      }
      //If the response is OK
      response.json().then(function(data){
        let scores = JSON.stringify(data);
        console.log(scores);
        callback(scores);
      });
    })
    // If there is an error
    .catch(function(err){
      Errors.innerHTML = err;
    })
}

// Display High Score List

const List = document.getElementById("highscores");

var list_scores = function (scores) {
  let object = JSON.parse(scores);
  //lowest score saved for later
  let lowest_score = object[9].score;
  document.getElementById("lowscore").value = lowest_score;

  //for loop
  for (let i=0; i<object.length; i++) {
    // console.log(object[i]);
    let li = document.createElement("LI");
    let text = document.createTextNode(object[i].name + " ... " + object[i].score)
    li.appendChild(text);
    List.appendChild(li);

    if(i===0) {
      li.setAttribute("class","top1");
    }
    if(i===1) {
      li.setAttribute("class","top2");
    }
    if(i===2) {
      li.setAttribute("class","top3");
    }

  }
}

//reload stuff
function resetForm() {
  while(list.hasChildNodes()) {
    List.removeChild(List.firstChild)
  }
  // fetch data and make high score list
  get_scores(list_scores);
  // reset stuff
  document.getElementById("score").value = 0;
  score = 0;
}

// Submit Form

//listen for clicking the submit button
myform.addEventListener("submit", function(event){
  //don't reload page
  event.preventDefault();

  // lowest high score
  var tenth_score = document.getElementById("lowscore").value;

  //if the player made the hs list, change message gif
  if (score > tenth_score) {
    document.getElementById("message").src="images/highscore.gif";
    document.getElementById("message").alt="You made it on the high score list!";
  }
  else {
    document.getElementById("message").src="images/good-luck.gif";
    document.getElementById("message").alt="Good luck chump!";
  }

  // form data object
  var formData = new FormData(this);

  //POST fetch request
  fetch("dice.php", {
    method: "post",
    body: formData
  })
  .then (function(response){
    return response.text();
  })
  .then (function (text) {
    resetForm();
    console.log(text);
  })
  .catch(function (err) {
    Errors.innerHTML = err;
  })
})

// End scores section