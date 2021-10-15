var SpeechRecognition= window.webkitSpeechRecognition;      
var some = new SpeechRecognition();

function start(){
 document.getElementById("tat").innerHTML=" ";
 some.start();
}

some.onresult=function(event){
    console.log(event);
    var sky=event.results[0][0].transcript;
    document.getElementById("tat").innerHTML=sky;
    console.log(sky);
    if (sky=="take my selfie") {
        console.log("taking selfie");
        speak();
    }
}

function speak(){
    var speaker=window.speechSynthesis;
    var text= " Taking your selfie in 5, 4, 3, 2, 1 SMILE hehehe";
    var say=new SpeechSynthesisUtterance(text);
     speaker.speak(say);

     Webcam.attach(camera);

     setTimeout(function(){
         snapshot();
         save();
     }, 5000 );
}

camera= document.getElementById("webcam");
Webcam.set({
    width:350, 
    height:300,
    image_format:"jpeg",
    jpeg_quality:90,
});

function snapshot(){
    Webcam.snap(function(picering){
       document.getElementById("results").innerHTML="<img id='selfie' src=' " + picering + " '> ";
    });
}

function save(){
    var nap= document.getElementById("down");
    nap.href=document.getElementById("selfie").src;
    nap.click();
}