// export { 
//     apiBase,
//     postsEndpoint,
//     allPostsEndpoint,
//     urlPostBase,
//     eightPostsBase,
//     urlAllPostsBase,
//     fullPostURLExample,
//     eightPoststURLExample,
//   }

export const apiBase = "https://monaandlisa.no/wp-json/wp/v2";

export const postsEndpoint = "/posts";

export const allPostsEndpoint = "/?per_page=12";

export const eightPoststEndpoint = "/?per_page=8";

export const mediaEndpoint = "/media";


// -----------------------------------------------------------

export const urlPostBase = apiBase + postsEndpoint;

export const urlAllPostsBase = urlPostBase + allPostsEndpoint;

export const eightPostsBase = urlPostBase + eightPoststEndpoint;


// -----------------------------------------------------------

export const fullPostURLExample = "https://monaandlisa.no/wp-json/wp/v2/posts"

export const allPostsURLExample = "https://monaandlisa.no/wp-json/wp/v2/posts/?per_page=12";

export const mediaURLExample = "https://monaandlisa.no/wp-json/wp/v2/media";

export const eightPoststURLExample = "https://monaandlisa.no.local/wp-json/wp/v2/posts/?per_page=8"