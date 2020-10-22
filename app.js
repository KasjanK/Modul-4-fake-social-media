const commentsButton = document.querySelector(".comment-button");
const authorButton = document.querySelector(".author-button");

const commentsListEl = document.querySelector(".comments");
const postsListEl = document.querySelector(".posts");
const userContainerEl = document.querySelector(".user-container");

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    const posts = data;
    const postsList = posts
      .map((post) => {
        console.log(post);
        return `<div class="post">
                    <h3 class="post-title">${post.title}</h3>
                    <div class="post-body">${post.body}</div>
                    <button class="comment-button" data-postid="${post.id}">Read comments</button>
                    <button class="author-button" data-userid="${post.userId}">Author info</button>
                    <ul class="comments"></ul>
                  </div>`;
      })
      .join("");
    postsListEl.innerHTML = postsList;
  });

commentsButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const comments = data;
      const commentsList = comments
        .map((comment) => {
          console.log(comment);
          return `<li class="comment" data-postid=${comment.id}>${comment.body}</li>`;
        })
        .join("");
      commentsListEl.innerHTML = commentsList;
    });
});

authorButton.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const users = data;
      const usersList = users
        .map((user) => {
          console.log(user);
          return `<div class="user">
                  <h2>Author</h2>
                  <div>${user.name}</div>
                  <div>${user.email}</div>
                  <div>${user.phone}</div>
                  <br>
                  <div>${user.company.name}</div>
                </div> `;
        })
        .join("");
      userContainerEl.innerHTML = usersList;
    });
});

/* vet att jag kan använda data-userid=${post.id} för att få ut olika posts med olika kommentarer men får inte riktigt ihop det. 
testade att ha några "fake posts" direkt i html och då funkade båda knapparna som de skulle */
