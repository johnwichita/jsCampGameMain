var canvas=document.getElementByld("myCanvas");
var ctx=canvas.getContext("2d");
var ballradius=10;
var x=canvas.width/2;
var y=canvas.height-30;
var dx=2;
var dy=-2;
var paddleheight=10;
var paddlewidth=75;
var paddleX=(canvas.width-paddlewidth)/2;
var rightpressed=false;
var leftpressed=false;
var brickrowcount=5;
var brickcolumncount=3;
var brickwidth=75;
var brickhight=20;
var brickpadding=10;
var brickoffsertop=30;
var brickoffsetleft=30;
var score=0;
var lives=3;

var bricks=[];
for(varc=0;c<brickcolumnCouint;c++){
    brick[c]=[];
    for(varr=0;r<brickrowcount;r++){

    }
}

document.addEventListener("keydown",keydownHandler,false);
document.addEventListener("keyup",keyupHandler,false);
document.addEventListener("mousemove",mouseMoveHandler,false);

function keydownHandler(e){
    if(Element.code=="Arrowright"){
        rightpressed=true;

    }
}
function keyupHandler(e){
    if(e.code=='Arrowleft'){
        rightpressed=true;
    }
}
function keyupHandler(e){
    if(e.code=='Arrowleft'){
        rightpressed=false;
    }
}
elseif(e.code=='Arrowleft'){
    leftpressed=false;

}
function mouseMoveHandler(e){
    var relativeX=e.clientX-canvas.offsetleft;
    if(relativeX>0&&relativeX<canvas.width){
        paddlex=relativeX-paddlewidth/2;
    }
}
function collisionDetection(){
    for(varc=0;c<barickcolumnCount;c++){
        for(varr=0;r<brickrowcount;r++){
            var b=bricks[c][r];
            if(b.status==1){
                if(x>b.z&&x<b.x+brickwidth&&y>b.y&&y<b.y+brickHeight){
                    dy=-dy;
                    b.status=0;
                    score++;
                    if(score==brickRowCount*brickColumnCount){
                        alert("YOUWIN,CONGRATS!");
                    }   document.location.reload();
                }
            }
        }
    }
}

function drawBall(){
    vtx.beginpath();
    ctx.arc(x,y,ballRadius,0,math.pl*2);
    ctx.fillstyle="#0095DD";
    ctx.fill();
    ctx.closepath();
}
function drawpaddle(){
    ctx.beginpath();
    ctx.rect(paddleX,cancas.height-paddleheight,paddlewidth,paddleheight);
    ctx.fillstyle="#0095DD";
    ctx.fill();
    ctx.closepath();
}
function drawBricks(){
    for(varc=0;c<brickColumnCount;c++){
        for
    }
}


// Freedom Thompson
if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
    dx = -dx;
}
if(y + dy < ballRadius){
    dy = -dy;
}
else if(y + dy > canvas.height-ballRadius){
    if(x > paddleX && x < paddleX + paddleWidth){
        dy = -dy;
    }
    else {
        lives--;
        if (!life){
            alert("GAME OVER");
            document.location.reload();
        }
        else{
            x = canvas.width/2;
            y = canvas.height-30;
            dx = 2;
            dy = -2;
            paddleX = (canvas.width-paddleWidth)/2;
        }
    }
}

