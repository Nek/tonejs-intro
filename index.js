import * as Tone from "tone";

//this is needed due to the browser's security sandbox restrictions
//sounds can start playing only after a user has started interacting with a page
document.getElementById("noise-maker").addEventListener("click", makeNoise);

async function makeNoise() {
  //start up the audio machinery
  await Tone.start();
}
