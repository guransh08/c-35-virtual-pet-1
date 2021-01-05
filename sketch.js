//Create variables here
var dog, happyDog, database, foods , foodStock;
var dog1,dog2;
var foods=20;
function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
  
 dog1=createSprite(400,500,30,30)
 dog1.addImage("dog",dog)
 dog1.scale=0.3;
  
}


function draw() { 
  background(46, 139, 87) 

  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog1.addImage("dog",happyDog)
     
  } 
  else{ 
    (keyWentUp(UP_ARROW))
    dog1.changeImage(dog);
  }
  if(foods=0){
    textSize(20)
    fill("black")
    noStroke();
    text("oh wow! drago finished the milk",300,200)
  }


 // image(dog,400,500,80,80)
  drawSprites();

  textSize(15);
  noStroke();
  fill ("black");
  text("food remaining: "+foods,300,250);
  text("NOTE: Press UP_ARROW Key To Feed Dog Milk!",100,20)
  
  //add styles here

}
function readStock(data){
  foods=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}



