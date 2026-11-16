function Meme() {
  console.log("Meme Button was clicked");
  window.alert("Unfortunately the community was so dead that there are no new memes");
}

function showGrimoire() {
  console.log("Grimoire Button was clicked");
  window.alert("Grimoire Unlocked: 5-Leaf Anti-Magic Grimoire — Never giving up is my magic!");
}

function rateArc() {
  console.log("Arc Rating Button was clicked");
  window.alert("Spade Kingdom Raid Arc is rated 9.8/10 by Black Clover fans!");
}

function joinSquad() {
  console.log("Join Squad Button was clicked");
  window.alert("Welcome to the Black Bulls! Captain Yami says: Surpass your limits right here, right now!");
}

const scenes = [
  { src: "pop1.jpg", title: "Scene 1: Asta & Yami vs. Dante (Episode 170)" },
  { src: "pop2.jpg", title: "Scene 2: Asta Unleashes Black Form (Episode 63)" },
  { src: "pop3.jpg", title: "Scene 3: Wizard King Julius vs. Licht (Episode 93)" },
  { src: "pop4.jpg", title: "Scene 4: Black Bulls Team Attack vs. Vetto (Episode 49)" },
  { src: "pop5.jpg", title: "Scene 5: Yuno's Spirit Dive Awakening (Episode 83)" }
];

let currentSlide = 0;

function updateSlide() {
  const img = document.getElementById("scene-img");
  const caption = document.getElementById("scene-caption");
  const counter = document.getElementById("scene-counter");
  if (!img) return;

  img.src = scenes[currentSlide].src;
  img.alt = scenes[currentSlide].title;
  caption.textContent = scenes[currentSlide].title;
  counter.textContent = "Image " + (currentSlide + 1) + " of " + scenes.length;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % scenes.length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + scenes.length) % scenes.length;
  updateSlide();
}

function sceneAlert() {
  console.log("Scene Info Button clicked on: " + scenes[currentSlide].title);
  window.alert("Now Viewing — " + scenes[currentSlide].title);
}
