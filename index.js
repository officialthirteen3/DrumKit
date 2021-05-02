for(var i = 0 ; i<document.getElementsByClassName("drum").length;i++){
 document.getElementsByClassName("drum")[i].addEventListener("click",handlerClick);
}

document.addEventListener("keypress",handlerKey);

function handlerKey(event){
    playSound(event.key);
    setAnimation(event.key);
}

function handlerClick(){
    var keyPressed = this.innerHTML;
    playSound(keyPressed);
    setAnimation(keyPressed);
}

function playSound(keyPressed){
    switch (keyPressed) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();       
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();       
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();       
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();       
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();       
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();       
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();       
            break;
        
        default:
            alert("Some error occured. Kindly retry!!");
            break;
    }
}

function setAnimation(keyPressed){
    document.querySelector("."+keyPressed).classList.add("pressed");
    setTimeout(() => {
        document.querySelector("."+keyPressed).classList.remove("pressed");
    }, 100);
}