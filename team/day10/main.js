const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const result = document.getElementById('result')
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const times = document.querySelector('#times')
const divide = document.querySelector('#divide')

function getPlusValue(){
  let i1 = input1.value
  let i2 = input2.value

  if(i1.length === 0 || i2.length === 0) return window.alert("값을 모두 입력해주세요.")
  
  return result.innerText = `결과: ${+i1 + +i2}`;
}

function getMinusValue(){
    let i1 = input1.value
    let i2 = input2.value

    if(i1.length === 0 || i2.length === 0) return window.alert("값을 모두 입력해주세요.")

    return result.innerText = `결과: ${+i1 - +i2}`;
}

function getTimesTimesValue(){
    let i1 = input1.value
    let i2 = input2.value

    if(i1.length === 0 || i2.length === 0) return window.alert("값을 모두 입력해주세요.")

    return result.innerText = `결과: ${+i1 * +i2}`;
}

function getDivideValue(){
    let i1 = input1.value
    let i2 = input2.value

    if(i1.length === 0 || i2.length === 0) return window.alert("값을 모두 입력해주세요.")

    return result.innerText = `결과: ${Math.floor(+i1 / +i2 * 100) / 100}`;
}

plus.addEventListener('click',() => getPlusValue())
minus.addEventListener('click',() => getMinusValue())
times.addEventListener('click',() => getTimesTimesValue())
divide.addEventListener('click',() => getDivideValue())

