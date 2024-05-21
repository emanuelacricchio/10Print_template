let x= 0;
let y=0;
let size= 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(78,0,900)
  
  }

function draw() {
  strokeWeight(2);
  stroke (0, 890, 900);
  
  
  
  
  if (random(1) < 8 ){
    noFill()
      triangle(x,y,x+40,y+40,x+40,y-40);
       } else {
         triangle(x -45, y+ 34, x+5, -56);
         triangle(x -34, y+ 56, x+33, -8);

         
         
         }
        
  x +=size;
  if(x > width){
    x= 0;
    y = y + size;
   }
  
}
