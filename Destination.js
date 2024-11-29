var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var tabimgs = document.getElementsByClassName("tab-imgs");

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

function openimg(imgname) {
    for (tabimg of tabimgs) {
        tabimg.classList.remove("active-img");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(imgname).classList.add("active-img");
}
