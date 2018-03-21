var WINDOW_WIDTH = 1000;
var WINDOW_HEIGHT = 600;
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

Tree testTree2 = new Tree(100);
Tree testTree = new Tree(400);
Character grumpy = new Character();


//since these are variables we don't want to ever change in the code, we capitalize them

/* @pjs preload="betterTree.png"; */
PImage betterTreeImage;

//This function only runs once at the start of the program
void setup() {

  for (var i = 0; i < 16; i++) {
    grumpyCharacter[i] = loadImage("grumpyCharacter-" + i + " (dragged).tiff")
  }

  size(WINDOW_WIDTH, WINDOW_HEIGHT); //sets the size of the window

  frameRate(30); //how many times the draw function is called per second

  betterTreeImage = loadImage("betterTree.png");

}


//called repeatedly
void draw() {

  background(BACKGROUND_COLOR); //needed in the draw function to "clear" the screen between updates

stroke();
testTree2.drawAndUpdate(3);

  testTree.drawAndUpdate(5);



noStroke();
fill(color(68, 58, 7));
  rect(0, WINDOW_HEIGHT - 50, WINDOW_WIDTH, 50);

  grumpy.drawCharacter();
}


//This is the definition of your object
//a class consists of:
//attributes which describes the object
//a constructor which sets the default values for the attributes
//and functions which manipulate/give information about the attributes
class HorizontalLine {

//attributes
  var yPos, speed; //float means they can be decimals

  //constructor
  //allows us to easily create different instances of our class
  HorizontalLine (float y, float s) {

    yPos = y;

    speed = s;

  }

  void moveLine() {
    updateLine();
    drawLine();
  }

  void updateLine() {

    yPos += speed;

  //height is a pre-defined variable that is the pixel value for the bottom of the screen
    if (yPos > height) {
      yPos = 0;
    }


  }

  void drawLine() {
    //width is a pre-defined variable that is the pixel value for the right of the screen
    line(0, yPos, width, yPos);
  }

}

class Tree {
  var xPosition;

  Tree(var xPos) {
    xPosition = xPos;
    }

    void drawTree() {
        image(betterTreeImage, xPosition, 5);
    }

    void update(var speed){
      xPosition -= speed;

      if (xPosition < -700) {
        xPosition = WINDOW_WIDTH + 300;
      }
    }

    void drawAndUpdate(treeSpeed) {
      drawTree();
      update(treeSpeed);
    }

}

class Character {
  var xPosition, yPosition;
  var imageNumber =0;
  Character() {

    xPosition = WINDOW_WIDTH / 2 - 200;
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
