let tileMap=[];
let tilesX=10;
let tilesY=10;
let tileSize=50;

function setup() {
  createCanvas(500,500);
  let tileID=0;
  for(let tileX=0;tileX<tilesX;tileX++){
    tileMap[tileX]=[];
    for(let tileY=0; tileY<tilesY; tileY++){
      tileMap[tileX][tileY]=new Tile(tileX,tileY,tileSize,tileID);
      tileID++;
    }
  }
}

function draw() {
  background(0);
  for(let tileX=0;tileX<tilesX;tileX++){
    for(let tileY=0;tileY<tilesY;tileY++){
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
