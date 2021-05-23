import * as Tone from "tone";

//this is needed due to the browser's security sandbox restrictions
//sounds can start playing only after a user has started interacting with a page
document.getElementById("noise-maker").addEventListener("click", makeNoise);

async function makeNoise() {
  //start up the audio machinery
  await Tone.start();
  //create an audio file player, load piano-loop.mp3 and make it looped
  const player = new Tone.Player({
    url: "piano-loop.mp3",
    loop: true,
  }).toDestination();
  //wait for the sounds to load
  await Tone.loaded();
  //play a sound
  player.start();
}
