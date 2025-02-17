let tileMap=[];
let tilesX=10;
let tilesY=10;
let tileSize=50;
let textures=[]

let graphicsMap=[
// Y VALUES (second value)  
// 0 1 2 3 4 5 6 7 8 9  
  [0,0,0,0,0,0,0,0,0,0], //0
  [0,0,0,0,0,0,0,0,0,0], //1
  [0,0,0,1,0,0,0,0,0,0], //2
  [0,0,0,0,0,0,0,0,0,0], //3
  [0,0,0,0,0,0,0,0,0,0], //4    X VALUES (first value)
  [0,0,0,0,0,0,0,0,0,0], //5
  [0,0,0,0,0,0,0,0,0,0], //6
  [0,0,0,0,0,0,0,0,0,0], //7
  [0,0,0,0,0,0,0,0,0,0], //8
  [0,0,0,0,0,0,0,0,0,0]  //9
]

function preload(){
  textures[0]= loadImage("grassy.png")
  textures[1]= loadImage("stone.png")
}

function setup() {
  createCanvas(500,500);
  let tileID=0;
  for(let tileX=0;tileX<tilesX;tileX++){
    tileMap[tileX]=[];
    for(let tileY=0; tileY<tilesY;tileY++){
      let textureIndex=graphicsMap[tileY][tileX]
      tileMap[tileX][tileY]=new Tile(textures[textureIndex],tileX,tileY,tileSize,tileID);
      tileID++;
    }
  }
}

function draw() {
  background(0);
  for(let tileX=0;tileX<tilesX;tileX++){
    for(let tileY=0;tileY<tilesY;tileY++){
      display(); //run display function here somehow
      tileMap[tileX][tileY].debugGrid();
    }
  }
  tileMap[5][6].displayMessage()
}

class Tile{
  constructor(tileX,tileY,tileSize,tileID){
    
    this.tileX=tileX;
    this.tileY=tileY;
    this.tileSize=tileSize;
    this.tileID=tileID;
    this.xPos=this.tileX*tileSize; //tilex tiley are position of tile in tilemap grid
    this.yPos=this.tileY*tileSize; //xpos ypos are pixel position in relation to canvas
  }
  display(){
    image(this.texture,this.xPos,this.yPos,this.tileSize,this.tileSize)
  }
  debugGrid(){
    let xPadding=2;
    let yCoordinatePadding=8;
    let yIDPadding=18;

    strokeWeight(1)
    stroke("black")
    fill("yellow")

    textSize(8)
    text("X: "+this.tileX+", Y: "+this.tileY,this.xPos+xPadding,this.yPos+yCoordinatePadding)

    textSize(10)
    text("ID: "+this.tileID,this.xPos+xPadding,this.yPos+yIDPadding)

    noFill();
    stroke('yellow');
    rect(this.xPos,this.yPos,this.tileSize,this.tileSize);
  }
  displayMessage(){
    let xPadding=2;
    let yPadding=40;

    strokeWeight(1)
    stroke("black")
    fill("white")
    textSize(10)
    text("Accessed!",this.xPos+xPadding,this.yPos+yPadding)
  }
}
