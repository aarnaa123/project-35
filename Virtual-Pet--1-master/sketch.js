//Create variables here
var dog,happyDog,dog_img,happyDog_img;
var database;
var foodStock,foodS
function preload()
{
  //load images here
 happyDog_img=loadImage("images/dogImg1.png");
 dog_img=loadImage("images/dogImg.png");
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);
  
  dog = createSprite(200,250,10,10);
  dog.addImage(dog_img);
  dog.scale=0.08
  
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,287)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dog_img);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    food:x
  })
}



