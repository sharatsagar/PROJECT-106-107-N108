function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/YojQokXbk/model.json' ,modelready);
 
}
function modelready(){
classifier.classify(gotResult)
}
function gotResult(error,results){
console.log(results);

document.getElementById("result_label").innerHTML="i can hear-" + results[0].label;
document.getElementById("result_confidence").innerHTML="accuracy" +(results[0].confidence*100).toFixed(1)+"%"


img=document.getElementById("animal")
if( results[0].label=="Barking")
{
    img.src='sharat.jpg';

}
else if( results[0].label=="Meowing")
{
img.src='th.jpg';
    

}

else{
    img.src='listen.gif';
    
}
}