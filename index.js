var len=document.querySelectorAll(".drum").length;
for(var i=0;i<len;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML=this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        // switch (buttonInnerHTML) {
        //     case "w":
        //         var crash=new Audio("sounds/crash.mp3");
        //         crash.play();

        //         break;
        //     case "a":
        //         var kick = new Audio("sounds/kick-bass.mp3");
        //         kick.play();

        //         break;
        //     case "s":
        //         var snare = new Audio("sounds/snare.mp3");
        //         snare.play();

        //         break;
        //     case "d":
        //         var crash = new Audio("sounds/tom-1.mp3");
        //         crash.play();

        //         break;
        //     case "j":
        //         var crash = new Audio("sounds/tom-2.mp3");
        //         crash.play();

        //         break;
        //     case "k":
        //         var crash = new Audio("sounds/tom-3.mp3");
        //         crash.play();

        //         break;
        //     case "l":
        //         var crash = new Audio("sounds/tom-4.mp3");
        //         crash.play();

        //         break;

        //     default:
        //         console.log(buttonInnerHTML);
        //         break;
        // }
    });
}

document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
    });

function makesound(key){
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();

            break;
        case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();

            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();

            break;
        case "d":
            var crash = new Audio("sounds/tom-1.mp3");
            crash.play();

            break;
        case "j":
            var crash = new Audio("sounds/tom-2.mp3");
            crash.play();

            break;
        case "k":
            var crash = new Audio("sounds/tom-3.mp3");
            crash.play();

            break;
        case "l":
            var crash = new Audio("sounds/tom-4.mp3");
            crash.play();

            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(currentkey){
    var activeButton=document.querySelector("."+currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100)

}
