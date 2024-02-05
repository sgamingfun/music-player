const audioPlayer = document.getElementById("audioPlayer");
const musicFile = document.getElementById("musicFile");
const playButton = document.getElementById("playButton");

musicFile.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const url = URL.createObjectURL(file);
  audioPlayer.src = url;
});

playButton.addEventListener("click", () => {
  audioPlayer.play();
});
