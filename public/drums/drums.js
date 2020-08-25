const keys = document.getElementsByClassName("key");
const sounds = document.getElementsByTagName("audio");

document.body.addEventListener('keydown', function (event) {

  // define which key was pressed
  let keypress = event.which;

  //loop through all the keys and find which value was pressed
  for (let i = 0; i < keys.length; i++) {
    //if it's one of the keys listed on the buttons
    if (keypress == keys[i].getAttribute("data-key")) {
      //add the .playing class
      keys[i].classList.add("playing");
      //wait 70ms and remove the class
      setTimeout(() => {keys[i].classList.remove("playing")}, 70);
    }
  }
  //loop through the sounds and play the right one
  for (let i = 0; i < sounds.length; i++) {
    //if the keypress event matches a sound data-key attribute
    if (keypress == sounds[i].getAttribute("data-key")) {
      sounds[i].currentTime = 0;
      sounds[i].play();
    }
  }
});

//BUGS:
//can't start the sound again if audio is already playing
//doesn't remove class .playing when it's done