
var btns=document.querySelectorAll("button");
for (var i=0;i<btns.length;i++){
btns[i].addEventListener('click',btn_click);
document.addEventListener('keydown',btn_key);
}

var le = ['w','a','s','d','j','k','l'];
var ad = ["./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3","./sounds/snare.mp3","./sounds/crash.mp3","./sounds/kick-bass.mp3"];
function DrumResponse(drum_key){
    var le = ['w','a','s','d','j','k','l'];
    var aud = ["./sounds/tom-1.mp3","./sounds/tom-2.mp3","./sounds/tom-3.mp3","./sounds/tom-4.mp3","./sounds/snare.mp3","./sounds/crash.mp3","./sounds/kick-bass.mp3"];
    var key_index = le.indexOf(drum_key);
    var n_audio = new Audio(aud[key_index]);
    n_audio.play();
    btns[key_index].classList.toggle("pressed");
    setTimeout(() => {
        btns[key_index].classList.toggle("pressed");
    }, 400);
}


function btn_click(){
    DrumResponse(this.innerHTML);
}  
function btn_key(event){
    DrumResponse(event.key.toLowerCase());
}

