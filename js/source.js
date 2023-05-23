export { 
    apiBase,
    postsEndpoint,
    allPostsEndpoint,
    urlPostBase,
    eightPostsBase,
    urlAllPostsBase,
    fullPostURLExample,
    eightPoststURLExample,
  }

const apiBase = "http://projectexam.local/wp-json/wp/v2"

const postsEndpoint = "/posts"

const allPostsEndpoint = "/?per_page=12";

const eightPoststEndpoint = "/?per_page=8"

const mediaEndpoint = "/media";


// -----------------------------------------------------------

const urlPostBase = apiBase + postsEndpoint;

const urlAllPostsBase = apiBase + allPostsEndpoint;

const eightPostsBase = urlPostBase + eightPoststEndpoint;


// -----------------------------------------------------------

const fullPostURLExample = "http://projectexam.local/wp-json/wp/v2/posts"

const allPostsURLExample = "http://projectexam.local/wp-json/wp/v2/posts/?per_page=12";

const mediaURLExample = "http://projectexam.local/wp-json/wp/v2/media";

const eightPoststURLExample = "http://projectexam.local/wp-json/wp/v2/posts/?per_page=8"