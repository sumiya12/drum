var audio1 = new Audio('sounds/clap.wav');
var audio2 = new Audio('sounds/hihat.wav');
var audio3 = new Audio('sounds/kick.wav');
var audio4 = new Audio('sounds/openhat.wav');
var audio5 = new Audio('sounds/boom.wav');
var audio6 = new Audio('sounds/ride.wav');
var audio7 = new Audio('sounds/snare.wav');
var audio8 = new Audio('sounds/tom.wav');
var audio9 = new Audio('sounds/tink.wav');


document.addEventListener("keypress", keyDownTextField, false);

    function keyDownTextField(e) {
      var keyCode = e.keyCode;
      if(keyCode==97) {audio1.play();}
      if(keyCode==115) {audio2.play();}
      if(keyCode==100) {audio3.play();}       
      if(keyCode==102) {audio4.play();}       
      if(keyCode==103) {audio5.play();}       
      if(keyCode==104) {audio6.play();}       
      if(keyCode==106) {audio7.play();}       
      if(keyCode==107) {audio8.play();}       
      if(keyCode==108) {audio9.play();}       
      else {}
}