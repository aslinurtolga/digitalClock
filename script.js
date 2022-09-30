setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh =  document.getElementById("hh");
  let mm =  document.getElementById("mm");
  let ss =  document.getElementById("ss");

  let hourDot = document.querySelector(".hourDot");
  let minDot = document.querySelector(".minDot");
  let secDot = document.querySelector(".secDot");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";


  //24 saati 12 saate çevirmek istersek
  // if (h > 12) {
  //   h = h - 12;
  // }
  //tek basamaklı sayıdan önce sıfır ekleyelim
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";
  ampm.innerHTML = am;



  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  //24 saatlik saat
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  // 60 dakika
  ss.style.strokeDashoffset = 450 - (440 * s) / 60;
  //60 saniye


  hourDot.style.transform = `rotate(${h * 30} deg)`;
  // 360/12 = 30
  minDot.style.transform = `rotate(${m * 6} deg)`;
  // 360/60 = 6
  secDot.style.transform = `rotate(${s * 6} deg)`;


});
