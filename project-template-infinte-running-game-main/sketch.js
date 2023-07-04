var skyImg, sky;
var cloudOneImg, cloudTwoImg, cloud, cloudGroup;
var greenBird, greenBirdImg;
var pinkBird, pinkBirdImg, pinkBirdGroup;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"



function preload(){
 skyImg = loadImage("sky.jpg");
 //cloudOneImg = loadImage("-");
 cloudTwoImg = loadImage("cloud-two.jpg");
 greenBirdImg = loadImage("green-bird.png");
 pinkBird = loadImage("pink-bird.png");
 birdsound = loadSound("bird-final-sound.mp3");
}

function setup() {
 createCanvas(600,600);
 sky = createSprite(300,300);
 sky.addImage("sky_sky", skyImg);
 sky.velocityY = 1;

 cloudGroup = new Group();
 pinkBirdGroup = new Group();
 invisibleBlockGroup = new Group();

 greenBird = createSprite(200,200,50,50);
 greenBird.scale = 0.2;
 greenBird.addImage("Little_Bird", greenBirdImg);
}

function draw() {
  background(255);
  if(sky.y > 500){
     sky.y = 400
 }
   if (gameState === "play") {
    
    if(keyDown("left")){
        greenBird.x = greenBird.x - 3;
    }
    if(keyDown("right")){
        greenBird.x = greenBird.x + 3;
    }
    if(keyDown("space")){
        greenBird.velocityY = -10;
    }

   }

  greenBird.velocityY = greenBird.velocityY + 0.8;
  
  spawnClouds();

  if(pinkBirdGroup.isTouching(greenBird)){
     greenBird.velocityY = 0;
  }
  if(invisibleBlockGroup.isTouching(greenBird) || greenBird.y > 600){
     greenBird.destroy();
     gameState = "end";
  }

 drawSprites();

   if (gameState === "end"){
     stroke("red");
     fill("red");
     textSize(30);
     text("Game Over", 230,250)
     birdsound.play();
    }
}


function spawnClouds()
{
    if (frameCount % 240 === 0) {
        //var cloudOne = createSprite(200, -50);
        var cloudTwo = createSprite(200, 50);
        var pinkBird = createSprite(200,10);
        var invisibleBlock = createSprite(200,15);
        invisibleBlock.width = pinkBird.width;
        invisibleBlock.height = 2;
       
       // cloudOne.addImage(cloudOneImg);
        cloudTwo.addImage(cloudTwoImg);
        pinkBird.addImage(pinkBirdImg);
        
       // cloudOne.velocityY = 1; 
        cloudTwo.velocityY = 1;
        pinkBird.velocityY = 3;
        invisibleBlock.velocityY = 1;


        greenBird.depth = cloudTwo.depth;
        greenBird.depth +=1;
    
        //cloudOne.lifetime = 800;
        cloudTwo.lifetime = 800;
        invisibleBlock.lifetime = 800;
        pinkBird.lifetime = 800;
    
      cloudGroup.add(cloudTwo);
      invisibleBlock.debug = true;
      pinkBirdGroup.add();
      invisibleBlockGroup.add();  

}
}
