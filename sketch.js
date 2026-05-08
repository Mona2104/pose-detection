let capture;
let posenet;
let noseX,noseY;
let leyeX,leyeY;
let reyeX,reyeY;
let singlePose;
let actor_img;
function setup(){
    createCanvas(800,500);
    capture= createCapture(VIDEO);
    capture.size(800,500);
    capture.hide();
    posenet=ml5.poseNet(capture,modelLoaded);
    posenet.on('pose',receivedPoses);
    actor_img=loadImage('images/Aish.png');
}
function receivedPoses(poses){
    console.log(poses);
    if(poses.length >0){
        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
    }
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw(){
    image(capture,0,0,800,500);
    fill(255,0,0);
   if(singlePose){
        for(let i=0;i<singlePose.keypoints.length;i++){
            let x=singlePose.keypoints[i].position.x;
            let y=singlePose.keypoints[i].position.y;
            ellipse(x,y,20,20);
        }
        stroke(255,0,0);
        strokeWeight(5);

        for(let j=0;j<skeleton.length;j++){
            line(skeleton[j][0].position.x,skeleton[j][0].position.y,skeleton[j][1].position.x,skeleton[j][1].position.y);
        }
        //image(actor_img,singlePose.nose.x-100,singlePose.nose.y-100,200,200);
    }
}