import { 
    apiBase,
    postsEndpoint,
    urlAllPostsBase,
    urlPostBase,
    allPostsEndpoint,
   
  } from "/js/source.js"

  const post11 = "http://projectexam.local/wp-json/wp/v2/posts/37"
  const post12 = "http://projectexam.local/wp-json/wp/v2/posts/35"

  const morePosts = post11 + post12;

  const morePostsContainer = document.querySelector(".blog_post_container_more_posts");

