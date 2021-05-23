import * as Tone from "tone";

//this is needed due to the browser's security sandbox restrictions
//sounds can start playing only after a user has started interacting with a page
document.getElementById("noise-maker").addEventListener("click", makeNoise);

async function makeNoise() {
  //start up the audio machinery
  await Tone.start();
  //create a synth and connect it to the main output (your speakers)
  const synth = new Tone.Synth().toDestination();
  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");
}
