

const apiBase = "http://projectexam.local"
const blogPostBase = "/wp-json/wp/v2/posts";

const allPosts = "/?per_page=12";

const fullBlogPostURL = apiBase + blogPostBase + allPosts;
const fullBlogPostURLExample = "http://projectexam.local/wp-json/wp/v2/posts/?per_page=12";

// 

const blogPostContainer= document.querySelector(".blog_post_container");

async function fetchBlogPosts() {
    const response = await fetch (fullBlogPostURL);
    const result = await response.json();
    // console.log(result);
    return result;
}

async function fetchBlogPost(id) {
    const response = await fetch (blogPostBase+ `/${id}`);
    const result = await response.json();
    // console.log(result);
    return result;
}

function renderSingleBlogPostHTML(post) { 
    // const blogPostContainer = document.createElement("div")
    const heading = document.createElement("h1")
    const datePublished = document.createElement("h3")
    const postText = document.createElement("p")

    // blogPostContainer.href = `?id=${post.id}`
    heading.innertext = heading.title;
    datePublished.innerText = datePublished.date;
    postText.innerText = postText.excerpt; 

    blogPostContainer.append (heading, datePublished, postText);
    return blogPostContainer;
}

async function renderPosts() {
    const posts = await fetchBlogPosts();
    console.log (posts)
    posts.forEach (post  => { 
        console.log({post});
       const domItem = renderSingleBlogPostHTML(post);
       blogPostContainer.append(domItem);
    })
}
 
renderPosts();

// getBlogPosts();
// getBlogPost(45);

// function createBlogPostsHTML(blogPosts){
//     for (let i= 0; i < blogPosts.length; i++) { 
//     blogPost = blogPosts[i]
//     createBlogPostHTML = blogPost;
//     }
// }

