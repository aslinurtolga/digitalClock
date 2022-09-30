setInterval(() => {
  let hour = document.getElementById("hour");
  let minutes = document.getElementById("min");
  let seconds = document.getElementById("sec");
  let clockFormat = document.getElementById("ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  //24 saati 12 saate çevirmek için
  if (h > 12) {
    h = h - 12;
  }
  //tek basamaklı sayıdan önce sıfır ekleyelim
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = m;
  ampm.innerHTML = am;
});
