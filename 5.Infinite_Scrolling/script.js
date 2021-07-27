const blogContent = document.querySelector(".blog-content");
const loader = document.querySelector(".loader");
const blogSearch = document.querySelector(".blog-search");

let limit = 5;
let page = 1;

// jsonplaceholder API에서 data를 받아온다.
async function getPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    const data = await response.json();

    console.log(data);
    return data;
}

// post를 보여준다.
async function showPosts() {
    const posts = await getPosts();

    posts.forEach(post => {
        const blogPost = document.createElement("div");
        blogPost.classList.add("post");
        blogPost.innerHTML = ` 
       <div class="number">${post.id}</div>
       <div class="post-info">
           <h2 class="post-title">${post.title}</h2>
           <p class="post-body">${post.body}</p>
       </div>`;

        blogContent.appendChild(blogPost);
    });

}

function loadPosts() {
    loader.classList.add('show');

    setTimeout(() => {
        loader.classList.remove('show');

        setTimeout(() => {
            page++;
            showPosts();
        }, 300);
    }, 1000);
}

// post 검색
function searchPost(event) {
    const word = event.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post');

    posts.forEach((post) => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();

        if (title.indexOf(word) > -1 || body.indexOf(word) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    });
}

window.addEventListener('scroll', function () {
    let scrollLocation = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.scrollHeight;

    if (scrollLocation + windowHeight >= fullHeight) {
        loadPosts();
    }
});

showPosts();

blogSearch.addEventListener('input', searchPost);