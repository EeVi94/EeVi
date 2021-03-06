var img;
var initials ='jm'; // your initials
var choice = '2'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('knife.jpg');  // knife.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://eevi94.github.io/EeVi/images/fulls/happytrump.jpg');
  img2 = loadImage('https://eevi94.github.io/EeVi/images/fulls/sadtrump.jpg');
  img3 = loadImage('https://eevi94.github.io/EeVi/images/fulls/madtrump.jpg');
  img4 = loadImage('https://eevi94.github.io/EeVi/images/fulls/paintorder.png');
  img5 = loadImage('https://eevi94.github.io/EeVi/images/fulls/letterguide1.png');
  img6 = loadImage('https://eevi94.github.io/EeVi/images/fulls/letterguide2.png');
  img7 = loadImage('https://eevi94.github.io/EeVi/images/fulls/letterguide3.png');
  img8 = loadImage('https://eevi94.github.io/EeVi/images/fulls/letterguide4.png');
}
  
function setup() {
createCanvas(1000, 1000);  // canvas size
background(screenbg);   // use our background screen color
}

function draw() {
  
  image(img4, 0, 825); 
  image(img5, 475, 760, 500,40); //txtpics
  image(img6, 440, 815, 550,40);
  image(img7, 430, 875, 550,40);
  image(img8, 470, 930, 520,40);
  
 
 if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
   
    stroke(2); //black
    line(mouseX, mouseY, pmouseX, pmouseY);
    
 }  else if (toolChoice == 'q' || toolChoice == 'Q') {
    
   stroke(255);//white
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // red

    stroke(255,0,0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    2
  } else if (toolChoice == '3') { // green

    stroke(0, 90, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);

  } else if (toolChoice == '4') { //blue
    stroke(0, 0, 250);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'w' || toolChoice == 'W') {
    stroke(246, 255, 8);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 'e' || toolChoice == 'E') {
    stroke(247, 161, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  
} else if (toolChoice == 'r' || toolChoice == 'R') {
    stroke(3, 249, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '5') {

    stroke(255, 3, 251);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == 't' || toolChoice == 'T') {
    stroke(147, 88, 0);
    line(mouseX, mouseY, pmouseX, pmouseY);
 
//trumpfaces 
} else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
} else if (toolChoice == 's' || toolChoice == 'S') { // B places the image we pre-loaded
    image(img2, mouseX, mouseY);
} else if (toolChoice == 'm' || toolChoice == 'M') { // B places the image we pre-loaded
    image(img3, mouseX, mouseY);
 }
}
 

function self_portrait(){
// this function draws a self portrait when called
// you will need to call this, perhaps as one of your keypress functions
  
}
function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
