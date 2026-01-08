const images = [
  "img11.jpeg",
  "img22.jpeg",
  "img33.jpeg",
  "img44.jpeg",
  "img55.jpeg",
  "img6.jpeg"
];

const img = document.getElementById("slideImg");
const audio = document.getElementById("song");
const playBtn = document.getElementById("playBtn");
const startScreen = document.getElementById("startScreen");
const mainContent = document.getElementById("mainContent");

let index = 0;
let interval;

function changeImage() {
  if (index >= images.length - 1) {
    clearInterval(interval);
    return;
  }

  img.style.animation = "none";
  img.offsetHeight;

  setTimeout(() => {
    index++;
    if (index === 5) {
      img.style.zIndex = "-10";
    }
    img.src = images[index];
  }, 1500);

  img.style.animation = "scaleOutIn 3s ease-in-out forwards";
}


playBtn.addEventListener("click", () => {
  audio.play();                         
  startScreen.style.display = "none";  
  mainContent.style.display = "flex";  

  interval = setInterval(changeImage, 3000);
});
