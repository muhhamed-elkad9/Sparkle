"use strict";

////////////// Start Header
var element = document.querySelector(".span");
var elementlink = document.querySelector(".links");
var spanone = document.querySelector(".span-one");
var spantwo = document.querySelector(".span-two");
var spanthree = document.querySelector(".span-three");
var lia = document.querySelectorAll(".links ul li a");
lia.forEach(function (li) {
  li.addEventListener("click", remove);
});

function remove() {
  var _this = this;

  lia.forEach(function (li) {
    li.classList.remove("active-color");

    _this.classList.add("active-color");
  });
}

element.addEventListener("click", function () {
  element.classList.toggle("active-main");
  elementlink.classList.toggle("active");
  spanone.classList.toggle("active-1");
  spantwo.classList.toggle("active-2");
  spanthree.classList.toggle("active-3");
}); ////////////// End Header
////////////// Start SERVICES

var sections = document.querySelectorAll(".section");
var boxs = document.querySelector(".services .box1");
var spans = document.querySelectorAll(".services .box1 .progres span");
var servicesLanding = document.querySelector(".Services-landing");
var p = document.querySelectorAll(".Services-landing .box .number");
var started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= boxs.offsetTop) {
    spans.forEach(function (span) {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= servicesLanding.offsetTop - 500) {
    if (!started) {
      p.forEach(function (num) {
        return startCount(num);
      });
    }

    started = true;
  }
};

function startCount(el) {
  var goal = el.dataset.goal;
  var count = setInterval(function () {
    el.textContent++;

    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
} ////////////// End SERVICES
////////////// Start PORTFOLIO


var aActive = document.querySelectorAll(".portfolio .content .flex .link a");
var rowAll = document.querySelectorAll(".portfolio .row .all");
aActive.forEach(function (li) {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageAll);
}); // removeActive

function removeActive() {
  var _this2 = this;

  aActive.forEach(function (li) {
    li.classList.remove("active-color");

    _this2.classList.add("active-color");
  });
} // Manage All


function manageAll() {
  rowAll.forEach(function (all) {
    all.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach(function (el) {
    el.style.display = "block";
  });
} ////////////// End PORTFOLIO