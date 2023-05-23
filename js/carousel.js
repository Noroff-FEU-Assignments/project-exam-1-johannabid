var count = 0;
var inc = 0;
var margin = 0;
var slider = document.getElementsByClassName("slider_width")[0];
var postDisplay = 0;
if (screen.width > 980){
    postDisplay = document.getElementsByClassName("carousel_slider_container")[0].getAttribute("post_display_d");
    margin = postDisplay * 5;
}

// console.log(itemDisplay)

var postContainer = document.getElementsByClassName("post_container");
var postContainerLeft = postContainer.length % postDisplay;
var postSlide = postContainer.length / postDisplay;
for (let i=0; i<postContainer.length; i ++); {
    item [i].style.width =(screen.width / postDisplay) - margin + "px";
}

function next (){
    slider.style.left = - screen.width + "px";
}

// function prev {

// }