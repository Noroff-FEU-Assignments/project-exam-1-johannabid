const apiBase = "http://projectexam.local"

const pageBase = "/wp-json/wp/v2/pages"
const allPages = "/posts?_embed" //?? får ikke tak i alle sidene kun 1 post som viser seg å være "hello world"

const fullPagesURL = apiBase + pageBase

const blogPostsContainers = [...document.querySelectorAll(".carousel_latest_post_container_all")];
const nxtBtn = [...document.querySelectorAll(".nxt_btn")];
const preBtn = [...document.querySelectorAll(".pre_btn")];

blogPostsContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
