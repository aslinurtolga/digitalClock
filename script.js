setInterval(() => {
  let hour = document.getElementById("hour");
  let minutes = document.getElementById("min");
  let seconds = document.getElementById("sec");
  let clockFormat = document.getElementById("ampm");

  let hh =  document.getElementById("hrs");
  let mnt =  document.getElementById("mnt");
  let scn =  document.getElementById("scn");

  let hourDot = document.querySelector(".hourDot");
  let minDot = document.querySelector(".minDot");
  let secDot = document.querySelector(".secDot");

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

  hour.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;



  hrs.style.strokeDashoffset = 450 - (450 * h) / 12;
  //12 saatlik saat
  mnt.style.strokeDashoffset = 450 - (450 * m) / 60;
  // 60 dakika
  scn.style.strokeDashoffset = 450 - (450 * s) / 60;
  //60 saniye


  hourDot.style.transform = `rotate(${h * 30} deg)`;
  // 360/12 = 30
  minDot.style.transform = `rotate(${m * 6} deg)`;
  // 360/60 = 6
  secDot.style.transform = `rotate(${s * 6} deg)`;


});
