let answerState;
let points = 0;
let qNum = parseInt(0);
let questionsArray = []; 

class Question{
    constructor(q, a) {
    this.question = q;
    this.answer = a;
    }
}

//Question objects
let q1 = new Question("Naruto: Is it True or  False that Sasuke had his first kiss with Naruto", true);
questionsArray.push(q1);
let q2 = new Question("True or False: Once Piece is the longest Anime", false);
questionsArray.push(q2);
let q3 = new Question("True or False, Gohan was the name of Goku's father", false);
questionsArray.push(q3);
let q4 = new Question("Tokyo Ghoul Solos", true);
questionsArray.push(q4);
let q5 = new Question("Filler", false);
questionsArray.push(q5);



function setup() {
    createCanvas(500, 500);
    background(0, 30);
    noStroke();
 }

function check() {
    if(answerState == questionsArray[qNum].answer){
        fill(0, 0, 0);
        textSize(22);
        text("Correct!!!", 50, 250);
        points++;


    }
    else if(answerState != questionsArray[qNum].answer){
        fill(0, 0, 0);
        textSize(22);
        text("Incorrect :(", 300, 250);
    }
}

function base() {
        //True box
        fill(0, 51, 102);
        rect(50, 400, 150, 100);
        fill(204, 255, 255);
        stroke(224, 224, 224);
        textSize(20);
        text("True!", 100, 460);
        noStroke();
        //False box
        fill(102, 0, 0);
        rect(300, 400, 150, 100);
        fill(255, 204, 204);
        stroke(224, 224, 224);
        textSize(20);
        text("False!", 350, 460);
        noStroke();
        //Questions
        fill(0, 51, 102);
        rect(0, 0, 500, 150);
        fill(255, 204, 204);
        stroke(224, 224, 224);
        textSize(15);
        text(questionsArray[qNum].question, 30, 100);
        //Question Num
        text("Question #" + (qNum + 1) , 30, 20);
        noStroke();
}


function mouseClicked(){
    //Buttons to set answer true or false
    if(mouseX > 50 && mouseX < 200 && mouseY > 400 && mouseY < 500) {
        answerState = true;
        check()
        qNum++;
    }  
    if(mouseX > 300 && mouseX < 450 && mouseY > 400 && mouseY < 500) {
        answerState = false;
        check()
        qNum++;
    }
    }

    function draw() {
        base()
        if(qNum >= 4) {
            background(0);
            if (points == 0 || points == 1) {
                background(240, 128, 128);
                fill(255, 204, 203);
                textSize(20);
                text("You need to study your anime a bit more :(\n Points: "+points+"/4", 50, 250);
                
            }
            else if (points == 2 || points == 3) {
                background(51, 171, 249);
                fill(0);
                textSize(20);
                text("You know your stuff!\n Points: "+points+"/4", 150, 250);
            }
            else if (points == 4) {
                background(137, 168, 131);
                fill(144, 238, 144);
                textSize(20);
                text("You are an anime god!! (approved by Brandon)\n Points: "+points+"/4", 50, 250);
            }
        }
            
    }