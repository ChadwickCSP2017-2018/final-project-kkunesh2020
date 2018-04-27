var WINDOW_WIDTH = screen.width;
var WINDOW_HEIGHT = screen.height - 200;
var BACKGROUND_COLOR_MORNING = color(202, 218, 239);
var BACKGROUND_COLOR_DAY = color(190, 249, 255);
var BACKGROUND_COLOR_EVENING = color(244, 213, 185);
var BACKGROUND_COLOR_NIGHT = color(70, 88, 113);
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var ENTER_KEY = '13';
var SPACE_BAR = '32';
var BACKGROUND_MUSIC = new Audio('Hello Ditty.mp3');
var Sun_xpos = 200;
var desertTime = 2500;
var health = 100;
var dayNumber = 1;
var foodNumber = 15;
var characterVersion = 0;
var selectXPos = 250;
var gameStart = 0;
var berryXPos = 400;
var wolvesXPos = 400;
var noiseXPos = 400;
var snakesXPos = 400;
var hungryXPos = 400;
var berryVersion = 0;
var wolvesVersion = 0;
var noiseVersion = 0;
var snakesVersion = 0;
var hungryVersion = 0;
var eventEnd = 0;


/* @pjs preload="grumpyCharacter-0.png"; */
/* @pjs preload="grumpyCharacter-1.png"; */
/* @pjs preload="grumpyCharacter-2.png"; */
/* @pjs preload="grumpyCharacter-3.png"; */
/* @pjs preload="grumpyCharacter-4.png"; */
/* @pjs preload="grumpyCharacter-5.png"; */
/* @pjs preload="grumpyCharacter-6.png"; */
/* @pjs preload="grumpyCharacter-7.png"; */
/* @pjs preload="grumpyCharacter-8.png"; */
/* @pjs preload="grumpyCharacter-9.png"; */
/* @pjs preload="grumpyCharacter-10.png"; */
/* @pjs preload="grumpyCharacter-11.png"; */
/* @pjs preload="grumpyCharacter-12.png"; */
/* @pjs preload="grumpyCharacter-13.png"; */
/* @pjs preload="grumpyCharacter-14.png"; */
/* @pjs preload="grumpyCharacter-15.png"; */

PImage[] grumpyCharacter = new PImage[16];


/* @pjs preload="frisbeeDog-1.png"; */
/* @pjs preload="frisbeeDog-2.png"; */
/* @pjs preload="frisbeeDog-3.png"; */
/* @pjs preload="frisbeeDog-4.png"; */
/* @pjs preload="frisbeeDog-5.png"; */
/* @pjs preload="frisbeeDog-6.png"; */
/* @pjs preload="frisbeeDog-7.png"; */
/* @pjs preload="frisbeeDog-8.png"; */
/* @pjs preload="frisbeeDog-9.png"; */
/* @pjs preload="frisbeeDog-10.png"; */
/* @pjs preload="frisbeeDog-11.png"; */
/* @pjs preload="frisbeeDog-12.png"; */
/* @pjs preload="frisbeeDog-13.png"; */
/* @pjs preload="frisbeeDog-14.png"; */
/* @pjs preload="frisbeeDog-15.png"; */
/* @pjs preload="frisbeeDog-16.png"; */
/* @pjs preload="frisbeeDog-17.png"; */
/* @pjs preload="frisbeeDog-18.png"; */
/* @pjs preload="frisbeeDog-19.png"; */
/* @pjs preload="frisbeeDog-20.png"; */
/* @pjs preload="frisbeeDog-21.png"; */
/* @pjs preload="frisbeeDog-22.png"; */
/* @pjs preload="frisbeeDog-23.png"; */
/* @pjs preload="frisbeeDog-24.png"; */
/* @pjs preload="frisbeeDog-25.png"; */
/* @pjs preload="frisbeeDog-26.png"; */
/* @pjs preload="frisbeeDog-27.png"; */
/* @pjs preload="frisbeeDog-28.png"; */
/* @pjs preload="frisbeeDog-29.png"; */
/* @pjs preload="frisbeeDog-30.png"; */
/* @pjs preload="frisbeeDog-31.png"; */
/* @pjs preload="frisbeeDog-32.png"; */
/* @pjs preload="frisbeeDog-33.png"; */

PImage[] frisbeeCharacter = new PImage[33];

Sun testSun = new Sun(200, 150, 150, color(255, 255, 226));
Tree testTree2 = new Tree(100);
Tree testTree = new Tree(400);
GrumpyCharacter grumpy = new GrumpyCharacter(WINDOW_WIDTH / 2 - 300, WINDOW_HEIGHT - 320);
FrisbeeCharacter frisbee = new FrisbeeCharacter(WINDOW_WIDTH / 2 - 300, WINDOW_HEIGHT - 300);
GrumpyCharacter startingScreenGrumpy = new GrumpyCharacter(200, 50);
FrisbeeCharacter startingScreenFrisbee = new FrisbeeCharacter(700, 75);
Mountainline mountains = new Mountainline();
Treeline treeline1 = new Treeline();
Treeline treeline2 = new Treeline();
Cactusline cacti1 = new Cactusline();
Rockline rocks = new Rockline();
Health healthBar = new Health();
Food foodCount = new Food();
Select selectButton = new Select();
SelectEvent events = new SelectEvent();
RandomEvent popup = new RandomEvent(90);
RandomEvent popup = new RandomEvent(150);


/* @pjs preload="betterTree.png"; */
PImage betterTreeImage;

/* @pjs preload="mountains.png"; */
PImage mountainsImage;

/* @pjs preload="morning.png"; */
PImage morningImage;

/* @pjs preload="evening.png"; */
PImage eveningImage;

/* @pjs preload="night.png"; */
PImage nightImage;

/* @pjs preload="day.png"; */
PImage dayImage;

/* @pjs preload="stars.png"; */
PImage starsImage;

/* @pjs preload="cacti 2.png"; */
PImage cactus2Image;

/* @pjs preload="cacti 3.png"; */
PImage cactus3Image;

/* @pjs preload="cacti 4.png"; */
PImage cactus4Image;

/* @pjs preload="cacti 5.png"; */
PImage cactus5Image;

/* @pjs preload="cacti 6.png"; */
PImage cactus6Image;

/* @pjs preload="rock1.png"; */
PImage rock1Image;

/* @pjs preload="rock2.png"; */
PImage rock2Image;

void setup() {
  for (var i = 0; i < 16; i++) {
    grumpyCharacter[i] = loadImage("grumpyCharacter-" + i + ".png")
  }

BACKGROUND_MUSIC.play();

  for (var i = 1; i < 34; i++) {
    frisbeeCharacter[i] = loadImage("frisbeeDog-" + i + ".png")
  }

  size(WINDOW_WIDTH, WINDOW_HEIGHT);

  frameRate(25);

  betterTreeImage = loadImage("betterTree.png");

  mountainsImage = loadImage("mountains.png");

  morningImage = loadImage("morning.png");

  eveningImage = loadImage("evening.png");

  nightImage = loadImage("night.png");

  dayImage = loadImage("day.png");

  starsImage = loadImage("stars.png");

  cactus2Image = loadImage("cacti 2.png");

  cactus3Image = loadImage("cacti 3.png");

  cactus4Image = loadImage("cacti 4.png");

  cactus5Image = loadImage("cacti 5.png");

  cactus6Image = loadImage("cacti 6.png");

  rock1Image = loadImage("rock1.png");

  rock2Image = loadImage("rock2.png");
}

void draw() {
  background(BACKGROUND_COLOR_EVENING);
  image(cactus3Image, 100, WINDOW_HEIGHT - 250);
  image(cactus4Image, 300, WINDOW_HEIGHT - 350);
  image(cactus6Image, 1100, WINDOW_HEIGHT - 330)
  noStroke();
  fill(color(244, 231, 159));
  rect(0, WINDOW_HEIGHT - 50, WINDOW_WIDTH, 50);
  textSize(50);
  fill(255);
  text("CHOOSE YOUR CHARACTER", 370, 100);
  text("PRESS THE UP ARROW TO BEGIN", 370, WINDOW_HEIGHT - 100);
  selectButton.SelectCharacter();
  startingScreenGrumpy.drawGrumpyCharacter();
  startingScreenFrisbee.drawFrisbeeCharacter();
  BACKGROUND_MUSIC.play();

  if (gameStart === 1 && health > 0) {

    if (Sun_xpos < 300) {
      background(BACKGROUND_COLOR_MORNING);
    } else if (Sun_xpos < 950) {
      background(BACKGROUND_COLOR_DAY);
    } else if (Sun_xpos < 1550) {
      background(BACKGROUND_COLOR_EVENING);
    } else {
      background(BACKGROUND_COLOR_NIGHT);
      image(starsImage, 0, -300);
    }

    testSun.drawAndUpdate();

    stroke();
    mountains.moveMountainline(1);
    rocks.moveRockline(1);
    treeline2.moveTreeline(3);
    treeline1.moveTreeline(5);

    cacti1.moveCactusline(5);


    if (frameCount < desertTime) {

      noStroke();
      fill(color(190, 205, 100));
      rect(0, WINDOW_HEIGHT - 50, WINDOW_WIDTH, 50);
    } else {
      noStroke();
      fill(color(244, 231, 159));
      rect(0, WINDOW_HEIGHT - 50, WINDOW_WIDTH, 50);
    }
    if (characterVersion == 1) {
      grumpy.drawGrumpyCharacter();
    } else if (characterVersion == 2) {
      frisbee.drawFrisbeeCharacter();
    }


    if (Sun_xpos < 300) {
      image(morningImage, 0, 0, WINDOW_WIDTH + 100, WINDOW_HEIGHT);
    } else if (Sun_xpos < 950) {
      image(dayImage, 0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    } else if (Sun_xpos < 1550) {
      image(eveningImage, 0, 0, WINDOW_WIDTH + 100, WINDOW_HEIGHT);
    } else {
      image(nightImage, 0, 0, WINDOW_WIDTH + 100, WINDOW_HEIGHT);
    }
    if (frameCount >= desertTime && frameCount <= desertTime + 200) {
      fill(255, 249, 237);
      rect(400, 290, 670, 150);
      textSize(100);
      fill(0);
      text("Doggy Desert", 430, 400);
    }
    textSize(30);
    healthBar.drawHealth();

    foodCount.drawFood();

    textSize(50);
    text("Day " + dayNumber, WINDOW_WIDTH / 2 - 50, 40);

    events.makeEvent();
    //popup.drawEvent();

  } else if (health <= 0 || dayNumber >=8 || foodCount <=0) {
    background(BACKGROUND_COLOR_NIGHT);
    image(starsImage, 0, -300);
    textSize(100);
    fill(255);
    text("Game Over", 430, 200);
  }
  println("FrameRate:" + frameRate);
}

////////////////////// Makes A Tree ////////////////////////////////////
class Tree {
  var xPosition;
  var yPosition;

  Tree(var xPos) {
    xPosition = xPos;
    yPosition = WINDOW_HEIGHT - 650;
  }

  void drawTree() {
    image(betterTreeImage, xPosition, yPosition, betterTreeImage.width, betterTreeImage.height);
  }

  void update(var speed) {
    xPosition -= speed;

  }

  void drawAndUpdate(treeSpeed) {
    drawTree();
    update(treeSpeed);
  }

}

////////////////////// Makes A Treeline ////////////////////////////////////
class Treeline {
  ArrayList < Tree > treeList;
  var xPosition;

  Treeline() {
    treeList = new ArrayList < Tree > ();
    xPosition = -500;
    fillTreeline();
  }

  void moveTreeline(treeline_speed) {
    drawTreeline();
    update(treeline_speed);
    for (var i = 0; i < treeList.size(); i++) {

      var thisTree = treeList.get(i);
      if (thisTree.xPosition <= -800) {
        treeList.remove(i);
        i--;
        addTree();
      }
    }
  }

  void drawTreeline() {
    for (var i = 0; i < treeList.size(); i++) {

      var thisTree = treeList.get(i);

      thisTree.drawTree();

    }
  }

  void update(treeline_speed) {
    for (var i = 0; i < treeList.size(); i++) {

      var thisTree = treeList.get(i);

      thisTree.update(treeline_speed);
    }

    xPosition -= treeline_speed;
  }

  void addTree() {
    if (frameCount < desertTime - 1200) {
      Tree currentTree = new Tree(xPosition);
      treeList.add(currentTree);
      xPosition += random(500, 800);
    }

  }


  void fillTreeline() {
    while (xPosition < WINDOW_WIDTH + 1000) {
      addTree();


    }
  }
}


////////////////////// Makes A Cactus ////////////////////////////////////
class Cactus {
  var xPosition;
  var yPosition;
  var cactusNumber;

  Cactus(var xPos) {
    xPosition = xPos;
    cactusNumber = int(random(2, 7));
  }

  void drawCactus() {

    if (frameCount < desertTime) {


      if (cactusNumber === 2) {
        image(cactus2Image, xPosition, -400, cactus2Image.width, cactus2Image.height);

      } else if (cactusNumber === 3) {
        image(cactus3Image, xPosition, -400, cactus3Image.width, cactus3Image.height);

      } else if (cactusNumber === 4) {
        image(cactus4Image, xPosition, -400, cactus4Image.width, cactus4Image.height);

      } else if (cactusNumber === 5) {
        image(cactus5Image, xPosition, -400, cactus5Image.width, cactus5Image.height);

      } else if (cactusNumber === 6) {
        image(cactus6Image, xPosition, -400, cactus6Image.width, cactus6Image.height);

      }
    } else {
      if (cactusNumber === 2) {
        image(cactus2Image, xPosition, WINDOW_HEIGHT - 183, cactus2Image.width, cactus2Image.height);

      } else if (cactusNumber === 3) {
        image(cactus3Image, xPosition, WINDOW_HEIGHT - 250, cactus3Image.width, cactus3Image.height);

      } else if (cactusNumber === 4) {
        image(cactus4Image, xPosition, WINDOW_HEIGHT - 350, cactus4Image.width, cactus4Image.height);

      } else if (cactusNumber === 5) {
        image(cactus5Image, xPosition, WINDOW_HEIGHT - 175, cactus5Image.width, cactus5Image.height);

      } else if (cactusNumber === 6) {
        image(cactus6Image, xPosition, WINDOW_HEIGHT - 330, cactus6Image.width, cactus6Image.height);

      }
    }

  }

  void update(var speed) {
    xPosition -= speed;

  }

  void drawAndUpdate(cactusSpeed) {
    drawCactus();
    update(cactusSpeed);
  }
}

////////////////////// Makes A Cactusline ////////////////////////////////////
class Cactusline {
  ArrayList < Cactus > cactusList;
  var xPosition;

  Cactusline() {
    cactusList = new ArrayList < Cactus > ();
    xPosition = -500;
    fillCactusline();
  }

  void moveCactusline(cactusline_speed) {

    drawCactusline();
    update(cactusline_speed);
    for (var i = 0; i < cactusList.size(); i++) {

      var thisCactus = cactusList.get(i);
      if (thisCactus.xPosition <= -800) {
        cactusList.remove(i);
        i--;
        addCactus();
      }
    }
  }

  void drawCactusline() {
    for (var i = 0; i < cactusList.size(); i++) {

      var thisCactus = cactusList.get(i);

      thisCactus.drawCactus();

    }
  }

  void update(cactusline_speed) {
    for (var i = 0; i < cactusList.size(); i++) {

      var thisCactus = cactusList.get(i);

      thisCactus.update(cactusline_speed);
    }

    xPosition -= cactusline_speed;
  }

  void addCactus() {
    Cactus currentCactus = new Cactus(xPosition);
    cactusList.add(currentCactus);
    xPosition += random(500, 800);
  }

  void fillCactusline() {
    while (xPosition < WINDOW_WIDTH + 1000) {
      addCactus();
    }
  }
}

////////////////////// Makes A Mountain ////////////////////////////////////
class Mountain {
  var xPosition;

  Mountain(var xPos) {
    xPosition = xPos;
  }

  void drawMountain() {

    image(mountainsImage, xPosition, WINDOW_HEIGHT - 500);

  }

  void update(var speed) {
    xPosition -= speed;

  }

  void drawAndUpdate(mountainSpeed) {
    drawMountain();
    update(mountainSpeed);
  }

  int getXPosition() {
    return xPosition;
  }
}

////////////////////// Makes A Mountainline ////////////////////////////////////
class Mountainline {
  ArrayList < Mountain > mountainList;
  var xPosition;

  Mountainline() {
    mountainList = new ArrayList < Mountain > ();
    xPosition = -700;
    fillMountainline();
  }

  void moveMountainline(mountainline_speed) {
    drawMountainline();
    update(mountainline_speed);
    for (var i = 0; i < mountainList.size(); i++) {

      var thisMountain = mountainList.get(i);
      if (thisMountain.xPosition <= -1000) {
        mountainList.remove(i);
        i--;
        addMountain();
      }
    }
  }

  void drawMountainline() {

    for (var i = 0; i < mountainList.size(); i++) {
      var thisMountain = mountainList.get(i);

      thisMountain.drawMountain();

    }
  }

  void update(mountainline_speed) {
    for (var i = 0; i < mountainList.size(); i++) {

      var thisMountain = mountainList.get(i);

      thisMountain.update(mountainline_speed);
    }
  }

  void addMountain() {
    if (frameCount < desertTime - 1620) {
      Mountain currentMountain = new Mountain(xPosition);
      mountainList.add(currentMountain);
      xPosition += random(800, 1000);
    }
  }


  void fillMountainline() {
    while (xPosition < WINDOW_WIDTH + 400) {
      addMountain();
    }
  }
}

////////////////////// Makes A Rock ////////////////////////////////////
class Rock {
  var rockNumber;
  var xPosition;

  Rock(var xPos) {
    xPosition = xPos;

    rockNumber = int(random(1, 3));
  }

  void drawRock() {

    if (frameCount < desertTime) {
      if (rockNumber === 1) {
        image(rock1Image, xPosition, -500);
      } else if (rockNumber === 2) {
        image(rock2Image, xPosition, -500);
      }
    } else {
      if (rockNumber === 1) {
        image(rock1Image, xPosition, WINDOW_HEIGHT - 370);
      } else if (rockNumber === 2) {
        image(rock2Image, xPosition, WINDOW_HEIGHT - 370);
      }
    }
  }

  void update(var speed) {
    xPosition -= speed;
  }

  void drawAndUpdate(mountainSpeed) {
    drawMountain();
    update(mountainSpeed);
  }
}

////////////////////// Makes A Rockline ////////////////////////////////////
class Rockline {
  ArrayList < Rock > rockList;
  var xPosition;

  Rockline() {
    rockList = new ArrayList < Rock > ();
    xPosition = -500;
    fillRockline();
  }

  void moveRockline(rockline_speed) {

    drawRockline();
    update(rockline_speed);
    for (var i = 0; i < rockList.size(); i++) {

      var thisRock = rockList.get(i);
      if (thisRock.xPosition <= -800) {
        rockList.remove(i);
        i--;
        addRock();
      }
    }
  }

  void drawRockline() {
    for (var i = 0; i < rockList.size(); i++) {

      var thisRock = rockList.get(i);

      thisRock.drawRock();

    }
  }

  void update(rockline_speed) {
    for (var i = 0; i < rockList.size(); i++) {

      var thisRock = rockList.get(i);

      thisRock.update(rockline_speed);
    }

    xPosition -= rockline_speed;
  }

  void addRock() {
    Rock currentRock = new Rock(xPosition);
    rockList.add(currentRock);
    xPosition += random(700, 1000);

  }

  void fillRockline() {
    while (xPosition < WINDOW_WIDTH + 1000) {
      addRock();
    }
  }
}

////////////////////// Makes A Sun ////////////////////////////////////
class Sun {

  var xPosition, sunWidth, yPosition;
  var sunColor;

  Sun(var xPos,
    var sw,
      var yPos,
        var color) {
    sunWidth = sw;
    xPosition = xPos;
    yPosition = yPos;
    sunColor = color;
  }

  void drawAndUpdate() {
    var sunSpeed = 2;
    drawSun();
    update(sunSpeed);

  }

  void drawSun() {
    noStroke();
    fill(color(255, 215, 160));
    ellipse(xPosition, yPosition, sunWidth + 30, sunWidth + 30);
    fill(sunColor);
    ellipse(xPosition, yPosition, sunWidth, sunWidth);

  }

  void update(var speed) {
    xPosition += speed;
    Sun_xpos += speed;
    yPosition += speed / 2;

    if (xPosition == WINDOW_WIDTH * 2) {
      xPosition = -500;
      Sun_xpos = -500;
      yPosition = -200;
      dayNumber++;
      if (foodNumber > 0) {
        foodNumber -= 5;
      }

    }
  }
}
////////////////////// Makes A Grumpy Character ////////////////////////////////////
class GrumpyCharacter {
  var xPosition, yPosition;
  var imageNumber = 0;
  GrumpyCharacter(xPos, yPos) {
    xPosition = xPos;
    yPosition = yPos;
  }

  void drawGrumpyCharacter() {

    image(grumpyCharacter[imageNumber], xPosition, yPosition);
    imageNumber++;
    if (imageNumber == grumpyCharacter.length) {
      imageNumber = 0;
    }
  }
}

////////////////////// Makes A Frisbee Character ////////////////////////////////////
class FrisbeeCharacter {
  var xPosition, yPosition;
  var imageNumber = 1;
  FrisbeeCharacter(xPos, yPos) {
    xPosition = xPos;
    yPosition = yPos;
  }

  void drawFrisbeeCharacter() {

    image(frisbeeCharacter[imageNumber], xPosition, yPosition, 504, 378);
    imageNumber++;
    if (imageNumber == frisbeeCharacter.length) {
      imageNumber = 1;
    }
  }
}

////////////////////// Makes A Health Bar ////////////////////////////////////
class Health {
  Health() {}
  void drawHealth() {

    fill(100, 250, 110);
    rect(220, WINDOW_HEIGHT - 40, health * 1.9, 20);
    fill(255);
    text("HEALTH: " + int(health), 20, WINDOW_HEIGHT - 20);

    if (foodNumber <= 0) {
      if (health >= 0) {
        health -= .1;
      }

    }
  }

}

////////////////////// Makes A Food Count ////////////////////////////////////
class Food {
  Food() {}
  void drawFood() {
    fill(255);
    text("FOOD: " + foodNumber, WINDOW_WIDTH - 200, WINDOW_HEIGHT - 20);
  }

}

////////////////////// Makes A Selection Box ////////////////////////////////////
class Select {
  Select() {}
  void SelectCharacter() {
    if (gameStart < 1) {
    if (keyPressed) {
      if (keyCode == LEFT_ARROW) {
        selectXPos = 250;
        characterVersion = 1;
        fill(255);
        rect(selectXPos, 170, 400, 200);

      } else if (keyCode == RIGHT_ARROW) {
        selectXPos = 750;
        characterVersion = 2;
        fill(255);
        rect(selectXPos, 170, 400, 200);

      } else {
        fill(255);
        rect(selectXPos, 170, 400, 200);
      }
    } else if (selectXPos == 250) {
      characterVersion = 1;
      fill(255);
      rect(selectXPos, 170, 400, 200);
    }
    else if (selectXPos == 750) {
      characterVersion = 2;
      fill(255);
      rect(selectXPos, 170, 400, 200);
    }

    if (keyPressed) {
      if (keyCode == UP_ARROW) {
        gameStart = 1;
      }
    }
  }
}
}

////////////////////// Makes A Random Event ////////////////////////////////////
class RandomEvent {
  var eventNumber;
  var eventTime;
  var selectionY;
  var selectionWidth;
  var selectionHeight;

  RandomEvent(var et) {
    eventTime = et;
    eventNumber = int(random(1, 6));
    selectionY = 440;
    selectionWidth = 130;
    selectionHeight = 80;
  }

  void BerryEvent(){
    if (keyPressed) {
      if (keyCode == LEFT_ARROW) {
        berryXPos = 400;
        berryVersion = 1;
        fill(203, 218, 242);
        rect(berryXPos, selectionY, selectionWidth, selectionHeight);

      } else if (keyCode == RIGHT_ARROW) {
        berryXPos = 780;
        berryVersion = 2;
        selectionWidth = 115;
        fill(203, 218, 242);
        rect(berryXPos, selectionY, selectionWidth, selectionHeight);

      } else {
        fill(203, 218, 242);
        rect(berryXPos, selectionY, selectionWidth, selectionHeight);
      }
    } else if (berryXPos == 400){
      berryVersion = 1;
      fill(203, 218, 242);
      rect(berryXPos, selectionY, selectionWidth, selectionHeight);
    }
    else if (berryXPos == 780){
      berryVersion = 2;
      fill(203, 218, 242);
      rect(berryXPos, selectionY, selectionWidth, selectionHeight);
    }

    if (keyPressed) {
      if (keyCode == UP_ARROW) {
        eventEnd = 1;
        if (berryVersion == 1) {
          foodNumber += 2;
          health -= 10;
        }
      }
    }

    textSize(50);
    fill(255);
    text("You have found berries!", 395, 300);
    text("Would you like to take them?", 370, 350);
    text("Yes", 420, 500);
    text("No", 800, 500);
  }

  void WolvesEvent(){
    if (keyPressed) {
      if (keyCode == LEFT_ARROW) {
        wolvesXPos = 400;
        wolvesVersion = 1;
        selectionWidth = 125;
        fill(203, 218, 242);
        rect(wolvesXPos, selectionY, selectionWidth, selectionHeight);

      } else if (keyCode == RIGHT_ARROW) {
        wolvesXPos = 780;
        wolvesVersion = 2;
        selectionWidth = 160;
        fill(203, 218, 242);
        rect(wolvesXPos, selectionY, selectionWidth, selectionHeight);

      } else {
        fill(203, 218, 242);
        rect(wolvesXPos, selectionY, selectionWidth, selectionHeight);
      }
    } else if (wolvesXPos == 400) {
      selectionWidth = 125;
      wolvesVersion = 1;
      fill(203, 218, 242);
      rect(wolvesXPos, selectionY, selectionWidth, selectionHeight);
    }
    else if (wolvesXPos == 780) {
      wolvesVersion = 2;
      fill(203, 218, 242);
      rect(wolvesXPos, selectionY, selectionWidth, selectionHeight);
    }
    if (keyPressed) {
      if (keyCode == UP_ARROW) {
        eventEnd = 1;
        if (wolvesVersion == 1) {
          health -= 25;
        }
        else if (wolvesVersion == 2) {
        foodNumber -= 8;
        }
      }
    }
    textSize(50);
    fill(255);
    text("You are surrounded by wolves!", 370, 300);
    text("Run", 420, 500);
    text("Feed", 800, 500);
  }

  void NoiseEvent() {
    if (keyPressed) {
      if (keyCode == LEFT_ARROW) {
        noiseXPos = 400;
        noiseVersion = 1;
        fill(203, 218, 242);
        rect(noiseXPos, selectionY, selectionWidth, selectionHeight);

      } else if (keyCode == RIGHT_ARROW) {
        noiseXPos = 780;
        noiseVersion = 2;
        selectionWidth = 115;
        fill(203, 218, 242);
        rect(noiseXPos, selectionY, selectionWidth, selectionHeight);

      } else {
        fill(203, 218, 242);
        rect(noiseXPos, selectionY, selectionWidth, selectionHeight);
      }
    } else if (noiseXPos == 400) {
      noiseVersion = 1;
      fill(203, 218, 242);
      rect(noiseXPos, selectionY, selectionWidth, selectionHeight);
    }
    else if (noiseXPos == 780) {
      noiseVersion = 2;
      fill(203, 218, 242);
      rect(noiseXPos, selectionY, selectionWidth, selectionHeight);
    }

    if (keyPressed) {
      if (keyCode == UP_ARROW) {
        eventEnd = 1;
        if (noiseVersion == 1 && Sun_xpos >= 1550) {
          health -= 10;
        }
        else if (noiseVersion == 1 && ((Sun_xpos <= 300) || (Sun_xpos >= 950 && Sun_xpos <= 1550))) {
          foodNumber += 3;
        }
      }
    }
    textSize(50);
    fill(255);
    text("You hear a noise.", 450, 300);
    text("Should you investigate?", 370, 350);
    text("Yes", 420, 500);
    text("No", 800, 500);
  }

void SnakesEvent() {
  if (keyPressed) {
    if (keyCode == LEFT_ARROW) {
      snakesXPos = 400;
      snakesVersion = 1;
      selectionWidth = 240;
      fill(203, 218, 242);
      rect(snakesXPos, selectionY, selectionWidth, selectionHeight);

    } else if (keyCode == RIGHT_ARROW) {
      snakesXPos = 780;
      snakesVersion = 2;
      selectionWidth = 190;
      fill(203, 218, 242);
      rect(snakesXPos, selectionY, selectionWidth, selectionHeight);

    } else {
      fill(203, 218, 242);
      rect(snakesXPos, selectionY, selectionWidth, selectionHeight);
    }
  } else if (snakesXPos == 400) {
    selectionWidth = 240;
    snakesVersion = 1;
    fill(203, 218, 242);
    rect(snakesXPos, selectionY, selectionWidth, selectionHeight);
  }
  else if (snakesXPos == 780) {
    snakesVersion = 2;
    fill(203, 218, 242);
    rect(snakesXPos, selectionY, selectionWidth, selectionHeight);
  }

  if (keyPressed) {
    if (keyCode == UP_ARROW) {
      eventEnd = 1;
      sneakOutcome = int(random(1, 3));
      if (snakesVersion == 1) {
        if (sneakOutcome == 1 || sneakOutcome == 2) {
          health -= 50;
        }
      }
      else if (snakesVersion == 2) {
        if (sneakOutcome == 1 || sneakOutcome == 2) {
          foodNumber += 5;
        }
        else if (sneakOutcome == 3) {
          health -= 40;
        }

    }
  }
}
  textSize(50);
  fill(255);
  text("Look! A ton of snakes!", 440, 300);
  text("Sneak by", 420, 500);
  text("Attack!", 800, 500);
}

void HungryEvent() {
  if (keyPressed) {
    if (keyCode == LEFT_ARROW) {
      hungryXPos = 400;
      hungryVersion = 1;
      selectionWidth = 130;
      fill(203, 218, 242);
      rect(hungryXPos, selectionY, selectionWidth, selectionHeight);

    } else if (keyCode == RIGHT_ARROW) {
      hungryXPos = 780;
      hungryVersion = 2;
      selectionWidth = 230;
      fill(203, 218, 242);
      rect(hungryXPos, selectionY, selectionWidth, selectionHeight);

    } else {
      fill(203, 218, 242);
      rect(hungryXPos, selectionY, selectionWidth, selectionHeight);
    }
  } else if (hungryXPos == 400) {
    hungryVersion = 1;
    fill(203, 218, 242);
    rect(hungryXPos, selectionY, selectionWidth, selectionHeight);
  }
  else if (hungryXPos == 780) {
    hungryVersion = 2;
    selectionWidth = 230;
    fill(203, 218, 242);
    rect(hungryXPos, selectionY, selectionWidth, selectionHeight);
  }

  if (keyPressed) {
    if (keyCode == UP_ARROW) {
      eventEnd = 1;
      if (hungryVersion == 1) {
        foodNumber -= int(foodNumber * 0.3);
      }
      else if (hungryVersion == 2) {
      health -= int(health * 0.2);
      }
    }
  }
  textSize(50);
  fill(255);
  text("You are really hungry!", 470, 300);
  text("Eat", 420, 500);
  text("Don't eat", 800, 500);

}

  void drawEvent() {
if (frameCount >= eventTime) {
    if (eventEnd == 0) {
      fill(213, 238, 242);
      rect(320, 150, 750, 450);
      if (eventNumber === 1) {
        BerryEvent();
      } else if (eventNumber === 2) {
        WolvesEvent();
      } else if (eventNumber === 3) {
        NoiseEvent();
      } else if (eventNumber === 4) {
        SnakesEvent();
      } else if (eventNumber === 5) {
        HungryEvent();
      }
    }
  }
}


  void ResetEvent() {
    if (eventEnd == 1) {
      eventEnd = 0;
    }

  }
}

////////////////////// Selects an event ////////////////////////////////////
class SelectEvent {
    ArrayList < Events > eventList;
  var eventTime;

  SelectEvent() {
    eventList = new ArrayList < Events > ();
  }

  void addEvent() {
        if (frameCount % 300 == 0) {
      RandomEvent currentEvent = new RandomEvent(300);
      eventList.add(currentEvent);
      println("add event");
}
  }

  void drawAndRemoveSelectEvent() {

    for (var i = 0; i < eventList.size(); i++) {

      var thisEvent = eventList.get(i);

      thisEvent.drawEvent();
      println("draw event");
      if (eventEnd == 1) {
      eventList.remove(i);
          eventEnd = 0;
      }


  }
  }

  void resetSelectEvent() {

    for (var i = 0; i < eventList.size(); i++) {

      var thisEvent = eventList.get(i);

      thisEvent.resetEvent();

    }
  }

  void makeEvent() {
    addEvent();
    drawAndRemoveSelectEvent();

  }

}
