const imageLoader = document.getElementById("imageLoader");
const randomButton = document.getElementById("randomButton")
const image = document.querySelector('img')

const imgURL = ["https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg", "https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg", "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg", "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg", "https://cdn.pixabay.com/photo/2015/04/23/22/01/mountains-736886_1280.jpg", "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg"]



imageLoader.src = imgURL[0]

function randomImage(){
  let num = Math.floor(Math.random()*10 % 6)
  imageLoader.src=imgURL[num]
}

randomButton.addEventListener("click",() => {
  randomImage()
})