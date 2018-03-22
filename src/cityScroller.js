var WINDOW_WIDTH = screen.width;
var WINDOW_HEIGHT = screen.height - 100;
var BACKGROUND_COLOR_MORNING = color(202, 218, 239);
var BACKGROUND_COLOR_DAY = color(190, 249, 255);
var BACKGROUND_COLOR_EVENING = color(244, 213, 185);
var BACKGROUND_COLOR_NIGHT = color(70, 88, 113);
var Sun_xpos = 200;

/* @pjs preload="grumpyCharacter-0 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-1 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-2 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-3 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-4 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-5 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-6 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-7 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-8 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-9 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-10 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-11 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-12 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-13 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-14 (dragged).tiff"; */
/* @pjs preload="grumpyCharacter-15 (dragged).tiff"; */

PImage[] grumpyCharacter = new PImage[16];

Sun testSun = new Sun(200, 150, 150, color(255, 255, 226));
Tree testTree2 = new Tree(100);
Tree testTree = new Tree(400);
Character grumpy = new Character();
Mountain mountain1 = new Mountain(500);
Treeline treeline1 = new Treeline();
Treeline treeline2 = new Treeline();
Cactus testCactus = new Cactus(500);
Cactus testCactus2 = new Cactus(700);
//Cactusline cacti1 = new Cactusline();

/* @pjs preload="betterTree.png"; */
PImage betterTreeImage;

/* @pjs preload="mountains.png"; */
PImage mountainsImage;

/* @pjs preload="morning.png"; */
PImage morningImage;

/* @pjs preload="evening.png"; */
PImage eveningImage;

/* @pjs preload="morning.png"; */
PImage morningImage;

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

void setup() {
  for (var i = 0; i < 16; i++) {
    grumpyCharacter[i] = loadImage("grumpyCharacter-" + i + " (dragged).tiff")
  }

  size(WINDOW_WIDTH, WINDOW_HEIGHT);

  frameRate(30);

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
}

void draw() {

  if (Sun_xpos < 300) {
      background(BACKGROUND_COLOR_MORNING);
    }
    else if (Sun_xpos < 950) {
      background(BACKGROUND_COLOR_DAY);
    }
    else if (Sun_xpos < 1550) {
      background(BACKGROUND_COLOR_EVENING);
    }
    else {
      background(BACKGROUND_COLOR_NIGHT);
      image(starsImage, 0, -300);
    }

  testSun.drawAndUpdate();

  stroke();
  mountain1.drawAndUpdate(1);

    treeline2.moveTreeline(3);
    treeline1.moveTreeline(5);
    testCactus.drawAndUpdate(5);
    testCactus2.drawAndUpdate(5);

  //cacti1.moveCactusline(5);





  noStroke();
  fill(color(190, 205, 100));
  rect(0, WINDOW_HEIGHT - 50, WINDOW_WIDTH, 50);

  grumpy.drawCharacter();

  if (Sun_xpos < 300) {
      image(morningImage, 0, 0, WINDOW_WIDTH + 100, WINDOW_HEIGHT);
    }
    else if (Sun_xpos < 950) {
    image(dayImage, 0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
    }
    else if (Sun_xpos < 1550) {
    image(eveningImage, 0, 0, WINDOW_WIDTH + 100, WINDOW_HEIGHT);
    }
    else {
      image(nightImage, 0, 0, WINDOW_WIDTH + 100, WINDOW_HEIGHT);
    }


}

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
    Tree currentTree = new Tree(xPosition);
    treeList.add(currentTree);
    xPosition += random(500, 800);
  }


  void fillTreeline() {
    while (xPosition < WINDOW_WIDTH + 1000) {
      addTree();
    }
  }
}


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

class Cactusline {
  ArrayList < Cactus > cactusList;
  var xPosition;

  Cactusline() {
    CactusList = new ArrayList < Cactus > ();
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

  void update(Cactusline_speed) {
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


class Cactus {
  var xPosition;
  var yPosition;
  var cactusNumber;

  Cactus(var xPos) {
    xPosition = xPos;
    cactusNumber = int(random(2, 7));
  }

  void drawCactus() {

    if (cactusNumber === 2) {
      image(cactus2Image, xPosition, WINDOW_HEIGHT - 183, cactus2Image.width, cactus2Image.height);
    }
      else if (cactusNumber === 3) {
      image(cactus3Image, xPosition, WINDOW_HEIGHT - 250, cactus3Image.width, cactus3Image.height);
    }
      else if (cactusNumber === 4) {
      image(cactus4Image, xPosition, WINDOW_HEIGHT - 350, cactus4Image.width, cactus4Image.height);
    }
      else if (cactusNumber === 5) {
      image(cactus5Image, xPosition, WINDOW_HEIGHT - 175, cactus5Image.width, cactus5Image.height);
    }
      else if (cactusNumber === 6){
      image(cactus6Image, xPosition, WINDOW_HEIGHT - 330, cactus6Image.width, cactus6Image.height);
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

class Mountain {
  Mountain(var xPos) {
    xPosition = xPos;
  }

  void drawMountain() {
    image(mountainsImage, xPosition, WINDOW_HEIGHT - 500);
  }

  void update(var speed) {
    xPosition -= speed;

    if (xPosition < -700) {
      xPosition = WINDOW_WIDTH + 300;
    }
  }

  void drawAndUpdate(mountainSpeed) {
    drawMountain();
    update(mountainSpeed);
  }
}

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
    yPosition += speed/2;

    if (xPosition == WINDOW_WIDTH*2) {
      xPosition = -500;
      Sun_xpos = -500;
      yPosition = -200
    }

  }

}

class Character {
  var xPosition, yPosition;
  var imageNumber = 0;
  Character() {

    xPosition = WINDOW_WIDTH / 2 - 300;
    yPosition = WINDOW_HEIGHT - 320;
  }

  void drawCharacter() {

    image(grumpyCharacter[imageNumber], xPosition, yPosition);
    imageNumber++;
    if (imageNumber == grumpyCharacter.length) {
      imageNumber = 0;
    }
  }
}
