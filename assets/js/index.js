// OPEN and CLOSE SEARCH-BOX
document.querySelector(".header-search__toggle").onclick = function () {
    document.querySelector(".header-search").classList.toggle("active")
    this.classList.toggle("active")
}

// OPEN and CLOSE LANGUAGE-DROP-DOWN
document.querySelector("#header-languages-mobile__toggle").onclick = function () {
    document.querySelector("#header-languages-mobile__inner").classList.toggle("active")
}

// DROP-DOWN-MENU
document.querySelectorAll(".drop-parent").forEach((el) => {
    el.onclick = function () {
        this.nextElementSibling.classList.toggle("active");
        this.nextElementSibling.nextElementSibling.classList.toggle("active")
    };
});

// OPEN AND CLOSE MENU
document.querySelector(".header-mobile-toggle").onclick = function () {
    document.querySelector(".header-navbar").classList.toggle("active")
    document.querySelectorAll(".drop-down").forEach((item) => item.classList.remove("active"))
    document.querySelectorAll(".fa-angle-down").forEach((item) => item.classList.remove("active"))
}