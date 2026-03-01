function speak() {
  let text = document.getElementById("text").value;
  let speed = document.getElementById("speed").value;
  let pitch = document.getElementById("pitch").value;

  let speech = new SpeechSynthesisUtterance(text);
  speech.lang = "hi-IN";
  speech.rate = speed;
  speech.pitch = pitch;

  window.speechSynthesis.speak(speech);
}
