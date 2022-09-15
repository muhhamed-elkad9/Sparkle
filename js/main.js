
////////////// Start Header
let element = document.querySelector(".span");
let elementlink = document.querySelector(".links");
let spanone = document.querySelector(".span-one");
let spantwo = document.querySelector(".span-two");
let spanthree = document.querySelector(".span-three");

let lia = document.querySelectorAll(".links ul li a")

lia.forEach((li) => {
    li.addEventListener("click", remove)
})
function remove() {
    lia.forEach((li) => {
        li.classList.remove("active-color");
        this.classList.add("active-color");
    })
}

element.addEventListener("click", function () {
    element.classList.toggle("active-main")
    elementlink.classList.toggle("active")
    spanone.classList.toggle("active-1")
    spantwo.classList.toggle("active-2")
    spanthree.classList.toggle("active-3")
})

////////////// End Header


////////////// Start SERVICES
let sections = document.querySelectorAll(".section");

let boxs = document.querySelector(".services .box1")
let spans = document.querySelectorAll(".services .box1 .progres span")

let servicesLanding = document.querySelector(".Services-landing")
let p = document.querySelectorAll(".Services-landing .box .number")
let started = false; // Function Started ? No


window.onscroll = function () {

    if (window.scrollY >= boxs.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

    if (window.scrollY >= servicesLanding.offsetTop - 500) {
        if (!started) {
            p.forEach((num) => startCount(num));
        }
        started = true;
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
        clearInterval(count);
    }
    }, 2000 / goal);
}

////////////// End SERVICES


////////////// Start PORTFOLIO
let aActive = document.querySelectorAll(".portfolio .content .flex .link a")
let rowAll = document.querySelectorAll(".portfolio .row .all");


aActive.forEach((li) => {
    li.addEventListener("click", removeActive)
    li.addEventListener("click", manageAll)
})

// removeActive
function removeActive() {
    aActive.forEach((li) => {
        li.classList.remove("active-color");
        this.classList.add("active-color");
    })
}

// Manage All
function manageAll() {
  rowAll.forEach((all) => {
    all.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
////////////// End PORTFOLIO





