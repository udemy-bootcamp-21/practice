const text = document.querySelector('.text')
const message = document.querySelector('.message')
const button = document.querySelector('.button')
const space = document.querySelector('.space')

let storage1;
let storage2;

text.addEventListener('input',(e) => {
  storage1 = e.target.value
})

message.addEventListener('input',(e) => {
  storage2 = e.target.value
})

button.addEventListener('click', () => {
  // space.append(storage1,": ",storage2," ")
  space.innerHTML += `
    <h2>${storage1}: ${storage2}</h2>
  `
})
