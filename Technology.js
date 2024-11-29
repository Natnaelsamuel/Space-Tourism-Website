var tablinks = document.getElementsByClassName("circle");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabimgs = document.getElementsByClassName("img-tabs");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openimg(tabname) {
    for (tabimg of tabimgs) {
        tabimg.classList.remove("active-img");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-img");
}