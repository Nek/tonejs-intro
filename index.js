import * as Tone from "tone";
import { Tremolo } from "tone";

//this is needed due to the browser's security sandbox restrictions
//sounds can start playing only after a user has started interacting with a page
document.getElementById("noise-maker").addEventListener("click", makeNoise);

async function makeNoise() {
  //start up the audio machinery
  await Tone.start();

  const musicSpace = new Tone.Reverb(1).toDestination();

  const doorBell = new Tone.Player({
    url: "door-bell.mp3",
  }).connect(musicSpace);
  const music = new Tone.Player({
    url: "piano-loop.mp3",
    loop: true,
  }).connect(musicSpace);
  const footsteps = new Tone.Player({
    url: "footsteps.mp3",
  }).toDestination();
  footsteps.volume.value = -6;
  const hello = new Tone.Player({
    url: "hello.mp3",
  }).toDestination();
  //this is in dB. it's a relative, not an absolute unit of loudness
  //just experiment with the numbers
  music.volume.value = -12;
  const noise = new Tone.Player({
    url: "chatter.mp3",
    loop: true,
  }).toDestination();

  await Tone.loaded();
  music.start();
  noise.start();
  doorBell.start(3);
  footsteps.start(3);
  footsteps.volume.rampTo(6, 11);
  hello.start(12);
}
