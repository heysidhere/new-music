song1="music.mp3";
song2="music2.mp3";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3");
    song=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.posenet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}


function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.X;
        leftWristY = results[0].pose.leftWrist.Y;
        console.log("leftWristX = " + leftWristX+"leftWristY + " + leftWristY);

        rightWristX = results[0].pose.rightWrist.X;
        rightWristY = results[0].pose.rightWrist.Y;
        console.log("rightWristX = " + rightWristX+"rightWristY + " + rightWristY);
    }
}