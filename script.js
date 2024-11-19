// script.js
document.addEventListener('DOMContentLoaded', function () {
    console.log("Page Loaded!");
});
const ue = document.querySelector(".ue");
const pe = document.querySelector(".pe");
const upcoming = document.querySelector(".upcoming");
const past = document.querySelector(".past");
const about = document.querySelector(".about");
const ab = document.querySelector(".ab");


upcoming.addEventListener('click', function () {
    pe.style.display = "none";
    ue.style.display = "flex";
    ab.style.display = "none";
    upcoming.style.textDecoration = "underline";
    past.style.textDecoration = "none";
    about.style.textDecoration = "none";
});

past.addEventListener('click', function () {
    ue.style.display = "none";
    pe.style.display = "flex";
    ab.style.display = "none";
    past.style.textDecoration = "underline";
    upcoming.style.textDecoration = "none";
    about.style.textDecoration = "none";
});

about.addEventListener('click', function () {
    ue.style.display = "none";
    pe.style.display = "none";
    ab.style.display = "flex";
    past.style.textDecoration = "none";
    upcoming.style.textDecoration = "none";
    about.style.textDecoration = "underline";
});
