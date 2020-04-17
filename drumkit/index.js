var length=document.querySelectorAll(".drum").length;

for(var i=0;i<length;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){

  var clickey=this.innerHTML;//gives innerHTMl of current object
  soundmake(clickey);
});
}//for all click operations

document.addEventListener("keypress",function(event){
  soundmake(event.key.toUpperCase())//event has an attribute or propert called key which registers which key was pressed
});


function soundmake(butt){

    if(butt=='W'){
      var audio=new Audio('sounds/crash.mp3');
      audio.volume=1.0;
      audio.play();
    }
    else if(butt=='A'){
      var audio=new Audio('sounds/snare.mp3');
      audio.volume=1.0;
      audio.play();
    }
    else if(butt=='S'){
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.volume=1.0;
      audio.play();
    }
    else if(butt=='D'){
      var audio=new Audio('sounds/tom-1.mp3');
      audio.volume=1.0;
      audio.play();
    }
    else if(butt=='K'){
      var audio=new Audio('sounds/tom-2.mp3');
      audio.volume=1.0;
      audio.play();
    }
    else if(butt=='J'){
      var audio=new Audio('sounds/tom-3.mp3');
      audio.volume=1.0;
      audio.play();
    }
    else{
      var audio=new Audio('sounds/tom-4.mp3');
      audio.volume=1.0;
      audio.play();
    }

}
