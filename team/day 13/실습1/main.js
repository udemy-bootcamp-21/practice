const buttons = document.querySelectorAll('button')
const space = document.querySelector('.space h2')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let a = button.parentElement.childNodes[1].textContent
    let b = button.parentElement.childNodes[3].textContent
    // space.append(a,b)
    space.innerHTML += `<h2>${a} ${b}</h2>`
  })
})