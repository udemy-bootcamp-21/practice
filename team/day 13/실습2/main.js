const postContainer = document.querySelector('.post__container')
const div__container = document.createElement("div")
const div__item = document.createElement("div")
const h2 = document.createElement("h2")
const p = document.createElement("p")

postContainer.innerHTML += `
  <div class="post__container">
    <div class="post__item">
      <h2>첫 번째 게시글</h2>
      <p>안녕하세요!</p>
    </div>
    <div class="post__item">
      <h2>두 번째 게시글</h2>
      <p>안녕하세요!</p>
    </div>
  </div>
`

