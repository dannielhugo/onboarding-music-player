import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanillaaa!</h1>
// <i class="fas fa-fish"></i>
// <h2>Hello world</h2>
// `;

/**
 * Proxima:
 * - implementar previous - done
 * - colocar o nome da musica que ta tocando na tela - done
 * - estilizar os botões - done
 * - adiantar ou voltar 10s - ongoing
 * - aleatorio - done
 * - mudo e volume - done
 * - colocar play e pause no mesmo botão - done
 * - stop (musica voltar ao inicio) - done
 *
 * - desmutar no botão de mute - ongoing
 * - css :D
 * - Lista de músicas
 * - Url de uma música (usuário define)
 * - Aleatório mais proximo do spotify
 * - Input range para o tempo da música
 */
const play = document.getElementById("play");

const prev = document.getElementById("previous");
const next = document.getElementById("next");
const stop = document.getElementById("stop");
const random = document.getElementById("random");

const audioFile = document.getElementById("audioFile");
const volumeControl = document.getElementById("volume");
const mute = document.getElementById("mute");

const iconPlay = document.getElementById("icon-play");
const iconPause = document.getElementById("icon-pause");

const iconMute = document.getElementById("icon-mute");
const iconUnmute = document.getElementById("icon-unmute");

const next10 = document.getElementById("next10");
const prev10 = document.getElementById("previous10");
let isMuted = false;
let isPlaying = false;
let tracks = [
  {
    id: 1,
    name: "Arleen",
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/62703a9f451706550c8cf7191ec57fc2.mp3"
  },
  {
    id: 2,
    name: "Danniel",
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/8d594c11c34340e26b720d0375ed32c3.mp3"
  },
  {
    id: 3,
    name: "Denise",
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/d09cdc3d82a87eee89f96f6f155999ab.mp3"
  },
  {
    id: 4,
    name: "Emanuel",
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/0a0671b17d60a0bcabc58a96f797ee29.mp3"
  },
  {
    id: 5,
    name: "Marcus",
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/f4d36c5b24c2bf333064d98adcd21f2d.mp3"
  },
  {
    id: 6,
    name: "Thiago",
    url:
      "https://tribeofnoisestorage.blob.core.windows.net/music/87a9cb5b5e1646f76521592b4ee5867e.mp3"
  }
];

let currentTrackIndex = 0;

let volume = 0.5;
let lastVolume = volume;

iconPause.style.display = "none";
volumeControl.value = volume;
audioFile.volume = volume;
iconUnmute.style.display = "none";

const onPlay = () => {
  if (!isPlaying) {
    console.log("play");
    const currentTrack = tracks[currentTrackIndex];
    audioFile.src = currentTrack.url;
    audioFile.play();
    const currentSongTitle = document.getElementById("title");
    currentSongTitle.innerText = currentTrack.name;
  } else {
    audioFile.pause();
  }
  isPlaying = !isPlaying;
  iconPlay.style.display = isPlaying ? "none" : "block";
  iconPause.style.display = isPlaying ? "block" : "none";
};

const onNext = () => {
  console.log("next");

  const next = currentTrackIndex === tracks.length ? 0 : currentTrackIndex + 1;
  currentTrackIndex = next;

  if (isPlaying) {
    onPlay();
  }
  // if (currentTrack === tracks.length)
  // const nextTrack = currentTrack === tracks.length :
};

const onPrevious = () => {
  console.log("next");

  const previous =
    currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
  currentTrackIndex = previous;

  if (isPlaying) {
    onPlay();
  }
  // if (currentTrack === tracks.length)
  // const nextTrack = currentTrack === tracks.length :
};

const onStop = () => {
  console.log("stop");
  audioFile.pause();
  audioFile.currentTime = 0;
  isPlaying = false;
  iconPlay.style.display = isPlaying ? "none" : "block";
  iconPause.style.display = isPlaying ? "block" : "none";
};

const onRandomMode = () => {
  const max = tracks.length - 1;
  const min = 0;
  currentTrackIndex = Math.floor(Math.random() * (max - min + 1) + min);

  isPlaying = false;
  onPlay();
};

const onChangeVolume = () => {
  volume = volumeControl.value;
  audioFile.volume = volume;
};

const onMute = () => {
  volume = 0;
  volumeControl.value = 0;
  audioFile.volume = 0;
};

const onNext10 = () => {
  audioFile.currentTime += 10;
};

const onPrevious10 = () => {
  audioFile.currentTime -= 10;
};

play.addEventListener("click", onPlay);

next.addEventListener("click", onNext);

prev.addEventListener("click", onPrevious);

stop.addEventListener("click", onStop);

random.addEventListener("click", onRandomMode);

mute.addEventListener("click", onMute);

next10.addEventListener("click", onNext10);
prev10.addEventListener("click", onPrevious10);

volumeControl.addEventListener("change", onChangeVolume);
