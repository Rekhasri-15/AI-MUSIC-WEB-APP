song="";
leftWristX=0;
leftWristY=0;
rightWristY=0;
rightWristY=0;
scoreLeftWrist=0;
scoreRightWrist=0;

function preload()
{
    song=loadSound("The Spectacle.mp3");
    song=loadSound("Miraculous Ladybug.mp3");
}

function play()
{
    song.play();
    song.setvolume();
    song.rate(1)
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist="+scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" + leftWristX + "leftWristY="+leftWristY);
        scoreRightWrist=results[0].pose.keypoints[10].score;
        console.log("scoreRightWrist="+scoreRightWrist);
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX + "rightWrist="+rightWristY);

    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialed')
}

function draw()
{
    image(video,0,0,600,500);
    fill("#9d00ff");
    stroke("#9d00ff");
    if(scoreLeftWrist>0.2)
    {
    circle(leftWristX,leftWristY,20);

    if(leftWrist<0.2)
    {
        stop("Miraculous Ladybug");

        if(leftWrist=false)
    {
        play("Spectacle");  
    }
    }
    }
    if(scoreRightWrist>0.2)
    {
    circle(rightWristX,rightWristY,20);

    if(rightWrist<0.2)
    {
        stop("Spectacle");
    
        if(rightWrist=false)
    {
        play("Miraculous Ladybug");
    }
    }
    }