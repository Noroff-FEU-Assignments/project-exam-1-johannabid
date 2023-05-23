const detailContainer= document.querySelector(".blog_post_details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const urlSpecific = "http://projectexam.local/wp-json/wp/v2/posts/" + id; 

async function fetchPost () {

    try {
        const response = await fetch (urlSpecific)
        const details = await response.json();

        console.log (details);

        createHTML(details);

    }

    catch(error) {
        console.log(error)
        detailContainer.innerHTML = message ("error", error);
    }
}

fetchPost ();

function createHTML(details) {
    detailContainer.innerHTML += `<h1>${details.title.rendered}</h1>
                                <div class="details_image> url('${details.content.rendered}</div>
                                    <div class="details_text>${details.excerpt.rendered}</div>`
}

