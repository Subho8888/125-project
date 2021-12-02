leftWrist_x = 0;
rightWrist_x = 0;
difference = 0;


function setup(){

    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,150);


poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function draw(){
    background('#EE4B2B');
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    textSize(difference);
    fill("#00ff0a");
    text("Subham",50,400)
}
function modelLoaded(){
    console.log("poseNet is Inisilised");
}
function gotposes(results){
if(results.length > 0){
    console.log(results);
    
    leftWrist_x = results[0].pose.leftWrist.x;
    rightWrist_x = results[0].pose.rightWrist.x;

    difference = floor(leftWrist_x - rightWrist_x);
    console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
    console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);

}
}