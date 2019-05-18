var cvs = document.getElementById('canvas');
var cxt = cvs.getContext('2d');
var letters = [];
var score = 0;
var lives = 3;

document.addEventListener("keypress", function(event){
    var keynum;
    keynum = event.key || event.keyCode;
    for(i=0; i<letters.length; i++){
        if (keynum == letters[i].value){
            letters[i]= new Letter();
            score+=1;
            document.getElementById('score').innerHTML = "Score: " +String(score);
            }
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
    for(i=0; i<letters.length; i++){
        cxt.font = "30px Arial";
        cxt.fillStyle = "black";
        cxt.fillText(letters[i].value, letters[i].xPos, letters[i].yPos);
        letters[i].yPos+=5;
        if (letters[i].yPos == 200){
            console.log("entered");
            newLetter= new Letter();
            letters.push(newLetter);
        }
        for (i=0; i<letters.length; i++){
            if (letters[i].yPos== 550){
                letters.splice(i, 1);
                lives-=1;
                document.getElementById('lives').innerHTML = "Lives:  " +String(lives);
                if (lives==0){
                    letters.splice(0,letters.length);
                    cxt.font = "60px Arial";
                    cxt.fillText("Game Over!", 250, 260);
                    return;
                    }
                }
            }
        }
        requestAnimationFrame(draw);
    }

draw()

function generateLetter(){
    alphabet="abcdefghijklmnopqrstuvwxyz";
    random_index= Math.floor(Math.random() * (26));
    return alphabet[random_index]; 
}


