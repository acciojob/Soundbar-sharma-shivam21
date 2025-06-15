//your JS code here. If required.
const sounds = ['sound1', 'sound2', 'sound3']; // Add your sound file names (without .mp3)
const buttonsContainer = document.getElementById('buttons');

// Create audio elements and buttons
sounds.forEach(sound => {
  const audio = document.createElement('audio');
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    stopAllSounds();
    audio.play();
  });

  buttonsContainer.appendChild(btn);
});

// STOP button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.innerText = 'Stop';
stopBtn.addEventListener('click', stopAllSounds);
buttonsContainer.appendChild(stopBtn);

// Function to stop all sounds
function stopAllSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}
