var dotlinks = document.getElementsByClassName("dot-links");
var dotcontents = document.getElementsByClassName("dot-contents");
var imgcontents = document.getElementsByClassName("img-contents");

function opentab(dotname) {
    for (dotlink of dotlinks) {
        dotlink.classList.remove("active-dot");
    }
    for (dotcontent of dotcontents) {
        dotcontent.classList.remove("active-content");
    }

    event.currentTarget.classList.add("active-dot");
    document.getElementById(dotname).classList.add("active-content");
}

function openimg(imgname) {
    for (imgcontent of imgcontents) {
        imgcontent.classList.remove("active-img");
    }
    event.currentTarget.classList.add("active-dot");
    document.getElementById(imgname).classList.add("active-img");
}