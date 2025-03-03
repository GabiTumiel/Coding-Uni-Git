//VARIABLES
//PLAYER
let player;
let playerSprite;
let playerSpeed=5;
//TILEMAP
let tileMap=[];
let tilesX=10;
let tilesY=10;
let tileSize=50;
let textures=[];

//LEVEL DATA OBJECTS
let level0={
  graphicsMap:[
  //2nd value
  // 0 1 2 3 4 5 6 7 8 9
    [0,0,0,0,0,0,0,2,3,2], //0
    [0,0,0,0,0,0,0,0,0,0], //1
    [0,0,0,1,0,0,0,0,0,0], //2
    [0,0,0,0,0,0,0,0,0,0], //3
    [0,0,0,0,0,0,0,0,0,0], //4
    [0,0,0,0,0,0,0,0,0,0], //5   //1st value
    [0,0,0,0,0,0,0,0,0,0], //6
    [0,0,0,0,0,0,0,0,0,0], //7
    [0,0,0,0,0,0,0,0,0,0], //8
    [0,0,0,0,0,0,0,0,0,0], //9
  ],

   tileRules:[
  //2nd value
  // 0 1 2 3 4 5 6 7 8 9 
    [0,0,0,0,0,0,0,1,2,1], //0
    [0,0,0,0,0,0,0,0,0,0], //1
    [0,0,0,1,0,0,0,0,0,0], //2
    [0,0,0,0,0,0,0,0,0,0], //3
    [0,0,0,0,0,0,0,0,0,0], //4
    [0,0,0,0,0,0,0,0,0,0], //5
    [0,0,0,0,0,0,0,0,0,0], //6
    [0,0,0,0,0,0,0,0,0,0], //7
    [0,0,0,0,0,0,0,0,0,0], //8
    [0,0,0,0,0,0,0,0,0,0], //9
   ],
   startTileX:8,
   startTileY:1
  }

  let level1={
    graphicsMap:[
    //2nd VALUE (x)  
    // 0 1 2 3 4 5 6 7 8 9
      [4,4,4,4,4,4,4,4,4,4], // 0
      [4,4,4,4,4,4,4,4,4,4], // 1
      [4,4,4,4,4,4,4,4,4,4], // 2 
      [2,2,2,2,2,2,2,2,2,2], // 3
      [2,4,4,4,4,4,4,4,4,2], // 4
      [2,4,4,4,4,4,4,4,4,3], // 5
      [2,4,4,4,4,4,4,4,4,2], // 6
      [2,2,2,2,2,2,2,2,2,2], // 7
      [4,4,4,4,4,4,4,4,4,4], // 8
      [4,4,4,4,4,4,4,4,4,4]  // 9
    ],

    tileRules: [
    //         2nd VALUE (x)  
    //   0 1 2 3 4 5 6 7 8 9
        [1,1,1,1,1,1,1,1,1,1], // 0
        [1,1,1,1,1,1,1,1,1,1], // 1
        [1,1,1,1,1,1,1,1,1,1], // 2 
        [1,1,1,1,1,1,1,1,1,1], // 3
        [1,0,0,0,0,0,0,0,0,1], // 4  1st VALUE (y)
        [1,0,0,0,0,0,0,0,0,2], // 5
        [1,0,0,0,0,0,0,0,0,1], // 6
        [1,1,1,1,1,1,1,1,1,1], // 7
        [1,1,1,1,1,1,1,1,1,1], // 8
        [1,1,1,1,1,1,1,1,1,1]  // 9
    ],

    startTileX: 1, //Sets X tile to start player on
    startTileY: 5  //Sets Y tile to start player on
}

let level2 = {

    graphicsMap: [ 
    //              2nd Value (x)
    //   0 1 2 3 4 5 6 7 8 9 
        [2,2,2,2,2,2,2,2,2,2], // 0
        [2,4,4,4,4,4,4,4,4,2], // 1
        [2,4,2,4,4,4,4,4,4,2], // 2
        [2,4,4,4,4,4,4,2,4,2], // 3
        [2,4,4,4,4,4,4,4,4,2], // 4    1st Value (y)
        [2,4,2,4,4,4,4,4,4,2], // 5
        [2,4,4,4,4,4,4,4,4,2], // 6
        [2,4,4,4,4,4,2,2,4,2], // 7
        [2,4,4,4,4,4,4,4,4,2], // 8
        [2,2,3,2,2,2,2,2,2,2]  // 9
    ],

    tileRules: [ 
    //              2nd Value (x)
    //   0 1 2 3 4 5 6 7 8 9 
        [1,1,1,1,1,1,1,1,1,1], // 0
        [1,0,0,0,0,0,0,0,0,1], // 1
        [1,0,1,0,0,0,0,0,0,1], // 2
        [1,0,0,0,0,0,0,1,0,1], // 3
        [1,0,0,0,0,1,0,0,0,1], // 4    1st Value (y)
        [1,0,1,0,0,0,0,0,0,1], // 5
        [1,0,0,0,0,0,0,0,0,1], // 6
        [1,0,0,0,0,0,1,1,0,1], // 7
        [1,0,0,0,0,0,0,0,0,1], // 8
        [1,1,1,1,1,1,1,1,1,1]  // 9
    ],

    startTileX: 2,
    startTileY: 8 
}

//LEVEL CONTROLS VARIABLES
letlevels=[level0,level1,level2];
let currentLevel=0;
let graphicMap;
let tileRules;

function preload(){
  textures[0]=loadImage("grassy.png");
  textures[1]=loadImage("stone.png");
  textures[2]=loadImage("wall_50x.png");
  textures[3]=("door.png");
  textures[4]=("void_50x.png");
  playerSprite=loadImage("librarian-bw.png");
}

function setup() {
  createCanvas(500,500);
  loadLevel();
  player=new Player(playerSprite,3,3,tileSize,tileRules);
}

function loadLevel() {
  graphicsMap=levels[currentLevel].graphicsMap;
  tileRules=levels[currentLevel].tileRules;

  let tileID = 0;
  for (let tileX = 0; tileX < tilesX; tileX++) {
    tileMap[tileX] = [];
    for (let tileY = 0; tileY < tilesY; tileY++) {
      let texture = graphicsMap[tileY][tileX];
      tileMap[tileX][tileY] = new Tile(textures[texture], tileX, tileY, tileSize, tileID);
      tileID++;
    }
  }
}

function draw() {
  background(0);
  for(let tileX=0;tileX<tilesX;tileX++){
    for(let tileY=0;tileY<tilesY;tileY++){
      tileMap[tileX][tileY].display()
      tileMap[tileX][tileY].debugGrid();
    }
  }
  player.display();
  player.setDirection();
  player.move()
}

class Tile{
  constructor(texture,tileX,tileY,tileSize,tileID){
    
    this.tileX=tileX;
    this.tileY=tileY;
    this.tileSize=tileSize;
    this.tileID=tileID;
    this.xPos=this.tileX*tileSize; //tilex tiley are position of tile in tilemap grid
    this.yPos=this.tileY*tileSize; //xpos ypos are pixel position in relation to canvas
    this.texture=texture
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

class Player{
  constructor(sprite,startX,startY,tileSize,tileRules){

    this.sprite=sprite;
    this.tileX=startX,
    this.tileY=startY,
    this.xPos=startX*tileSize;
    this.yPos=startY*tileSize;
    this.dirX=0;
    this.dirY=0;
    this.tx=this.xPos;
    this.ty=this.yPos;
    this.isMoving=false;
    this.speed=5;
    this.tileSize=tileSize;
    this.tileRules=tileRules;
  }
  display(){
    image(this.sprite,this.xPos,this.yPos,this.tileSize,this.tileSize)
  }
  setDirection(){
    let up=87;
    let down=83;
    let left=65;
    let right=68;

    if(!this.isMoving){
      if(keyIsDown(up)){
        this.dirX=0;
        this.dirY=-1;
      }
      if(keyIsDown(down)){
        this.dirX=0;
        this.dirY=1;
      }
      if(keyIsDown(left)){
        this.dirX=-1;
        this.dirY=0
      }
      if(keyIsDown(right)){
        this.dirX=1;
        this.dirY=0;
      }
      this.checkTargetTile()
    }
  }
  checkTargetTile(){
    this.tileX=Math.floor(this.xPos/this.tileSize);
    this.tileY=Math.floor(this.yPos/this.tileSize);

    let nextTileX=this.tileX+this.dirX;
    let nextTileY=this.tileY+this.dirY;

    if(nextTileX>=0 &&
      nextTileX<tilesX &&
      nextTileY>=0 &&
      nextTileY<tilesY){

        if(tileRules[nextTileY][nextTileX]===2){
          currentLevel++;

          loadLevel();
        }

        else if(tileRules[nextTileY][nextTileX]!=1){
          this.tx=nextTileX*tileSize;
          this.ty=nextTileY*tileSize;
          this.isMoving=true;
        }
      }
  }
  move(){
    if(this.isMoving){
      this.xPos+=this.speed*this.dirX;
      this.yPos+=this.speed*this.dirY;

    if(this.xPos===this.tx&&this.yPos===this.ty){
      this.isMoving=false;
      this.dirX=0;
      this.dirY=0;
    }
    }
  }
}