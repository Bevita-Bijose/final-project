var arrow, arrowImg;
var diamond, diamondImg;
var points, pointsImg;
var gameOver, gameOverImg;
var bg, bgImg;
var target, targetImg;
var gameState;

function preload() {
    bgImg = loadImage("background.png");
    arrowImg = loadImage("arrow.png");
    targetImg = loadImage ("Pan_Blue_Circle.png");
    diamondImg = loadImage("diamond.png");
    pointsImg = loadImage("points.png");
    gameOverImg = loadImage("game_over.png");
}

function setup() {
createCanvas (800,800);

target = createSprite(400,400);
target.addImage("targetImg");

arrow = createSprite(400,200);
arrow.addImage("arrowImg");
arrow.mouseClicked(shoot);

points = createSprite(700,350);
points.addImage("pointsImg");

diamond = createSprite();
diamond.addImage("diamondImg");

}

function draw() {
    background(51);
    image(bgImg,0,0,width,height);

    drawSprites();
}

function shoot() {
    arrow.position.y = +30;
}