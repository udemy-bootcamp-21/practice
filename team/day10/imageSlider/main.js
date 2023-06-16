const imageLoader = document.getElementById("imageLoader");

const prevButton = document.querySelector('#prevButton')
const postButton = document.querySelector('#postButton')


const imgURL = ["https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg", "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg", "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg", "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg", "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"]


let num = 0
imageLoader.src = imgURL[num]

prevButton.addEventListener('click',() => {
  num-=1

  if(num < 0){
    num = 5
  }
  imageLoader.src=`${imgURL[num]}`
})

postButton.addEventListener('click',() => {
  num+=1
  if(num > 5){
    num = 0
  }
  imageLoader.src=`${imgURL[num]}`
})


window.addEventListener('keydown',e =>{
  if(e.key === 37 || e.key === "ArrowRight"){
    num+=1
    if(num > 5){
      num = 0
    }
    return imageLoader.src=`${imgURL[num]}`
  }
  if(e.key === 39 || e.key === "ArrowLeft"){
    num-=1

    if(num < 0){
      num = 5
    }
    return imageLoader.src=`${imgURL[num]}`
  }
})
