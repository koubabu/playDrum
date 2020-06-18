var no_of_buttons = document.querySelectorAll(".drum").length;

for(var i=0;i<no_of_buttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var button = this.innerHTML;
    play(button);
    buttonAnimation(button);

    });
    
}

document.addEventListener("keypress", function(e){

    play(e.key);
    buttonAnimation(e.key);
})


function play(key)
{
    
    switch(key){

        case "w":
            var x = new Audio("sounds/tom-1.mp3");
            x.play();
            break;
        case "a":
            var x = new Audio("sounds/tom-2.mp3");
            x.play();
            break;
        case "s":
            var x = new Audio("sounds/tom-3.mp3");
            x.play();
            break;
        case "d":
            var x = new Audio("sounds/tom-4.mp3");
            x.play();
            break;
        case "j":
            var x = new Audio("sounds/snare.mp3");
            x.play();
            break;
        case "k":
            var x = new Audio("sounds/crash.mp3");
            x.play();
            break;
        case "l":
            var x = new Audio("sounds/kick-bass.mp3");
            x.play();
            break;
        default:
            console.log("this button is pressed "+key);
    }
    

}
function buttonAnimation(curretnKey)
{
    var activeButton = document.querySelector("."+curretnKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
