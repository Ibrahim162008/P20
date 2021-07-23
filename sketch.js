var bg, sleep, eat, brush, gym, bath, move
var astronaut

function preload() {
bg = loadImage ("iss.png");
sleep = loadImage("sleep.png");
brush = loadImage("brush.png");
gym = loadAnimation("gym1.png","gym2.png");
eat = loadAnimation("eat1.png","eat1.png","eat2.png","eat2.png","eat2.png");
bath = loadAnimation("bath1.png","bath1.png","bath1.png","bath2.png","bath2.png","bath2.png"); 
move = loadAnimation ("move1.png","move1.png","move2.png","move2.png");
}

function setup() {
  createCanvas(600,500);
  astronaut = createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;
}

function draw() {
  background("bg");
  drawSprites();
  textSize(15);
  text("up arrow = brushing", 20, 55);
  text("down arrow = gyming", 20, 70);
  text("right arrow = bathing", 20, 85);
  text("left arrow = eating", 20, 100);
  text("M key = Moving", 20, 115);
  edges = createEdgeSprites();
  astronaut.bounceOff(edges);
  if (keyDown("UP_ARROW")) {
astronaut.addAnimation("brushing", brush);
astronaut.changeAnimation("brushing")
astronaut.y = 350;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
  }
  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gyming", gym);
    astronaut.changeAnimation("gyming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
      }
      if (keyDown("RIGHT_ARROW")) {
        astronaut.addAnimation("bathing", bath);
        astronaut.changeAnimation("bathing")
        astronaut.x = 300;
        astronaut.velocityX = 0;
        astronaut.velocityY = 0;
          }
          if (keyDown("LEFT_ARROW")) {
            astronaut.addAnimation("eating", eat);
            astronaut.changeAnimation("eating")
            astronaut.x = 350;
            astronaut.y = 150;
            astronaut.velocityX = 0.5;
            astronaut.velocityY = 0.5;
              }
              if (keyDown("m")) {
                astronaut.addAnimation("moving", move);
                astronaut.changeAnimation("moving")
                astronaut.velocityX = 1;
                astronaut.velocityY = 1;
                  }
}