function makeSound(key)
{
    switch (key)
    {
        case "w":
            let audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
        break;
        case "a":
            let audio2 = new Audio("sounds/tom-2.mp3");
            audio2.play();
        break;
        case "s":
            let audio3 = new Audio("sounds/tom-3.mp3");
            audio3.play();
        break;
        case "d":
            let audio4 = new Audio("sounds/tom-4.mp3");
            audio4.play();
        break;
        case "j":
            let audio5 = new Audio("sounds/crash.mp3");
            audio5.play();
        break;
        case "k":
            let audio6 = new Audio("sounds/kick-bass.mp3");
            audio6.play();
        break;
        case "l":
            let audio7 = new Audio("sounds/snare.mp3");
            audio7.play();
        break;

        default: console.log(button);
    }
}

// Mouse click button
var drumButtons = document.querySelectorAll(".drum");
for (var i = 0; i < drumButtons.length; i++)
{
    drumButtons[i].addEventListener("click", function ()
    {
        makeSound(this.innerText);
    });
}

// Keyboard Press
// Add event listener to the entire webpage document
document.addEventListener("keydown", function(event)
{
    //console.log(this); This will just log the document
    //console.log(event); This logs the key that was pressed
    makeSound(event.key);
});