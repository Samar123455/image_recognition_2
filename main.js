Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+ data_uri +'"/>'
    });
}

console.log('ml5 version:',ml5.version);

classifier =  ml5.imageCLassifier('https://teachablemachine.withgoogle.com/models/dV2QIEmQx/model.jason',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    img = document.getElementById("captured_image");
    classisfier.classify(img, gotResults);
}



function gotResults(error , results){
    if(error)
{
    console.log(error);
} else {
console.log(results);
document.getElementById("result_Object_name").innerHTML = results[0].label;
document.getElementById("resukt_Object_accuracy").innerHTML = results[0].confidence.tofixed(3);
}}