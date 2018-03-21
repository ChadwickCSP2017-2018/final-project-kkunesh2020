var WINDOW_WIDTH = screen.width;
var WINDOW_HEIGHT = screen.height - 100;
var BACKGROUND_COLOR = color(190, 249, 255);


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


/* @pjs preload="betterTree.png"; */
PImage betterTreeImage;

/* @pjs preload="mountains.png"; */
PImage mountainsImage;

void setup() {
  for (var i = 0; i < 16; i++) {
    grumpyCharacter[i] = loadImage("grumpyCharacter-" + i + " (dragged).tiff")
  }

  size(WINDOW_WIDTH, WINDOW_HEIGHT);

  frameRate(30);

  betterTreeImage = loadImage("betterTree.png");

  mountainsImage = loadImage("mountains.png");

}

void draw() {

  background(BACKGROUND_COLOR);

  testSun.drawAndUpdate();

  stroke();
  mountain1.drawAndUpdate(1);

  //testTree2.drawAndUpdate(3);

  //testTree.drawAndUpdate(5);
  treeline2.moveTreeline(3);
  treeline1.moveTreeline(5);

  noStroke();
  fill(color(190, 205, 100));
  rect(0, WINDOW_HEIGHT - 50, WINDOW_WIDTH, 50);

  grumpy.drawCharacter();


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

  Tree(var xPos) {
    xPosition = xPos;
  }

  void drawTree() {
    image(betterTreeImage, xPosition, WINDOW_HEIGHT - 650);
  }

  void update(var speed) {
    xPosition -= speed;

    // if (xPosition < -700) {
    //   xPosition = WINDOW_WIDTH + 300;
    // }
  }

  void drawAndUpdate(treeSpeed) {
    drawTree();
    update(treeSpeed);
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
    var sunSpeed = .5;
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
    yPosition += speed/2;


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
