var cvs = document.getElementById('canvas');
var cxt = cvs.getContext('2d');
var letters = [];
var score = 0;

document.addEventListener("keypress", function(event){
    var keynum;
    keynum = event.key || event.keyCode;

    if (keynum == letters[0].value){
        letters[0] = new Letter();
        score+=1;
        document.getElementById('score').innerHTML = "Score " +String(score);
        }
});
    


function Letter(){
    this.value = generateLetter();
    this.xPos = Math.floor(Math.random()*750);
    this.yPos = 0
}

letters[0] = new Letter();

function draw(){
    cxt.clearRect(0,0,800,500);
    for(i=0; i<1; i++){
        cxt.font = "30px Arial";
        cxt.fillStyle = "black";
        cxt.fillText(letters[i].value, letters[i].xPos, letters[i].yPos);
        letters[i].yPos+=5;
    }
    requestAnimationFrame(draw);
}
draw()

function generateLetter(){
    alphabet="abcdefghijklmnopqrstuvwxyz";
    random_index= Math.floor(Math.random() * (26));
    return alphabet[random_index]; 
}





function drawAndUpdate(){
    cxt.clearRect(0,0,800,500);
    var myCircle = circles[0];
    for(var i =0; i<circles.length; i++){
        if (myCircle.yPos == 550){
            myCircle.xPos = 50+Math.round(Math.random()*720);
            myCircle.yPos = 0;
            console.log('entered');
        }
        myCircle.update();
    }
    requestAnimationFrame(drawAndUpdate);
}


function generateLetter(){
    alphabet="abcdefghijklmnopqrstuvwxyz";
    random_index= Math.floor(Math.random() * (26));
    return alphabet[random_index]; 
}
