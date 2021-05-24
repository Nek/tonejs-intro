import * as Tone from "tone";

//this is needed due to the browser's security sandbox restrictions
//sounds can start playing only after a user has started interacting with a page
document.getElementById("noise-maker").addEventListener("click", makeNoise);

async function makeNoise() {
  //start up the audio machinery
  await Tone.start();

  //let's go crazy with a reverb
  const filter = new Tone.Filter({
    type: "lowpass",
    frequency: 250,
  }).toDestination();

  //create a panner devices. 1 is for rightmost position,
  //-1 is for the leftmost one
  const panner = new Tone.Panner(1).connect(filter);

  //create an audio file player, load piano-loop.mp3 and make it looped
  const player = new Tone.Player({
    url: "piano-loop.mp3",
    loop: true,
  });
  //plug the player into the panner. Don't forget to remove toDestination from the player creation code
  player.connect(panner);

  //wait for the sounds to load
  await Tone.loaded();
  //fade it in during 10 seconds
  player.fadeIn = 10;
  //play a sound
  player.start();
  //use ramptTo to move the sound from right to left
  panner.pan.rampTo(-1, 10);
  filter.frequency.rampTo(1600, 5);
}
