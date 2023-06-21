const container = document.querySelector('.home__container')
const text = document.querySelector('.text')
const button = document.querySelector('.button')
const btn = document.querySelector('.btn')

let storage1;

text.addEventListener('input',(e) => {
  storage1 = e.target.value
})

button.addEventListener('click',() => {
  const div = document.createElement("div")
  const btn = document.createElement("button")
  btn.classList.add('btn')
  btn.textContent = "삭제"
  div.innerHTML = `
    <span>${storage1}</span>
  `
  btn.addEventListener('click',() => {
    btn.parentElement.remove()
  })
  div.appendChild(btn)
  container.appendChild(div)
})


