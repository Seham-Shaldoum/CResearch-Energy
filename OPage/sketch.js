var sun;
var earth;
//Loading the Gifs
function preload(){
  sun = createImg("/sun.gif")
  earth = createImg("/earth.gif")
 
}
  
function setup() { 
createCanvas(windowWidth, windowHeight);
} 

function draw() { 
  background(0);
  sun.position(1580,0);
  earth.position(10,600);

}
// resizing the canvas size to fit the available screen area.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}