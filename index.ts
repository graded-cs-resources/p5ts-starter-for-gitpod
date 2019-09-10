// if this is not working or there are many errors,
// open a terminal and type `npm install` to install dependencies

function setup() {
    createCanvas(400, 600);
    textSize(32);
    textStyle("bold");
    textAlign(CENTER);
    strokeWeight(1.5);
}

function draw() {

    if (mouseIsPressed) {
        fill(0);
        stroke(255);
    }
    else {
        fill(255);
        stroke(0);
    }

    ellipse(mouseX, mouseY, 80, 80);

    fill("white");
    stroke("red");
    text("Welcome to p5ts!",width/2,50);

}