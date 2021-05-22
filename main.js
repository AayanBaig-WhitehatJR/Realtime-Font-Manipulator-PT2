function preload(){

}
function setup(){
video = createCapture(VIDEO)
video.size(550, 500)
canvas = createCanvas(600, 450)
canvas.position(570, 280)
poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotResult)
}
function modelLoaded(){
    console.log("PoseNet is initialized!")
}
function gotResult(result){
   if(result.length > 0){
console.log(result)
   }
}
function draw(){

}
function addText(){

}