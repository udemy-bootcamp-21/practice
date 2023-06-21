const container = document.querySelector("#container");
const randomNum = Math.floor(Math.random() * 100);
const colorArr = ["red", "blue", "#000", "#fff", "purple"];
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const days = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
const dayName = days[date.getDay()];
let lat = "";
let lng = "";
function onGeoOk(position) {
  console.log(position);
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  console.log("You live in", lat, lng);
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

const getWeather = () => {
  const apiKey = "71056751ccc74a646682bc3ff4340f7f";
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(
      lat
    )}&lon=${Math.floor(lng)}&appid=${apiKey}`
  ).then((res) => {
    console.log("res", res);
  });
};

const getTime = () => {
  const timeBox = document.querySelector("#timeBox");
  const curHour = new Date().getHours().toString().padStart(2, "0");
  const curMin = new Date().getMinutes().toString().padStart(2, "0");
  const curSec = new Date().getSeconds().toString().padStart(2, "0");
  timeBox.innerHTML = `
      <span class="hour">${curHour} : </span>
      <span class="min=">${curMin} : </span>
      <span class="sec">${curSec}</span>
  `;
};

window.onload = () => {
  console.log(navigator);
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  document.body.style.backgroundImage = `url('https://picsum.photos/id/${randomNum}/600/600')`;
  container.style.color = colorArr[Math.floor(Math.random() * colorArr.length)];
  container.innerHTML = `
    <div id="dateBox">
      <span class="year">${year} / </span>
      <span class="month">${month} / </span>
      <span class="date">${day} / </span>
      <span class="day">${dayName}</span>
    </div>
    <div id="timeBox"></div>
  `;
  getWeather();
  getTime();
  document.querySelector("#timeBox").insertAdjacentHTML(
    "afterend",
    `
      <span class="greeting">
        G'day, Jeonggu!
      </span>
    `
  );
  setInterval(() => getTime(), 1000);
};
