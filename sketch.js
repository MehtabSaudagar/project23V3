const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var comBase;
var playBase;
var player;
var comPlayer;


function preload() {

  comBaseImage = loadImage("./assets/base1.png");
  playBaseImage = loadImage("./assets/base2.png");
  playerImage = loadImage("./assets/player.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   comBase = new ComputerBase(100,250,300,200);
   playBase = new PlayerBase(570,250,300,200);
   player = new Player(100,145,120,250);
   comPlayer = new Player(570,145,120,250);

   rectMode(CENTER);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   comBase.show();
   playBase.show();
   player.show();
   comPlayer.show();

   //display Player and computerplayer


}
