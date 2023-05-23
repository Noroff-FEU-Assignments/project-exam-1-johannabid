import { 
    apiBase,
    postsEndpoint,
    allPostsEndpoint,
    urlPostBase,
    urlAllPostsBase,
    fullPostURLExample
  } from "/js/source.js"
 
const blogPostContainer = document.querySelector(".blog_post_container");

const blogPostTitleContainer = document.querySelector(".post_title");

const blogPostContentContainer = document.querySelector(".post_content");



const event = new Date(Date.UTC(2023, 1, 20, 3, 0, 0));
console.log(event.toLocaleString("en-GB"), {timeZone: "UTC"});


async function fetchPosts () { 

    const response = await fetch (urlPostBase);

    const results = await response.json();

    const posts = results;

    for (let i = 0; i < posts.length; i++) {
                blogPostContainer.innerHTML += 
                `<a href="blogpostspecific.html?id=${posts[i].id}"class="blog_post_container">
                    <div class ="post_title"> 
                     <h1>${posts[i].title.rendered}</h1>
                    </div>
                    <div class="post_content"> 
                    
                     <div>${posts[i].content.rendered}</div>
                    </div> <p class="post_date">${posts[i].date}</p> 
                    <p>${posts[i].excerpt.rendered}<p> </div>
                </a>`;
                
}
}

fetchPosts();

export {
    fetchPosts
}

