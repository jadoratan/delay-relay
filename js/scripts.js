/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
  
    // When the user clicks on <div>, open the popup
    function myFunction() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");
    }

});

speed = 0.1; // seconds
beginStr = "Flight late?".toUpperCase().split("");
endStr = "Delay Relay!".toUpperCase().split("");
// A-Z, 0-9, spaces only

amountOfFlaps =
  beginStr.length >= endStr.length ? beginStr.length : endStr.length;

div = document.querySelector(".center");
html = "";
for (var x = 0; x < amountOfFlaps; x++) {
  html +=
    '<div class=splitflap><div class="top"></div><div class="bottom"></div><div class="nextHalf"></div><div class="nextFull"></div></div>';
}

div.innerHTML = html;

// Set up more stuff
a1 = document.querySelectorAll(".top");
a2 = document.querySelectorAll(".bottom");
b1 = document.querySelectorAll(".nextFull");
b2 = document.querySelectorAll(".nextHalf");

for (var x = 0; x < a1.length; x++) {
  a2[x].style.animationDuration = speed + "s";
  b2[x].style.animationDuration = speed + "s";
}

// And even more
char = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "?",
  "!",
  " ",
];

(strCount = []), (flag = []);

for (var x = 0; x < amountOfFlaps; x++) {
  if (beginStr.length != amountOfFlaps) {
    for (var x = 0; x < amountOfFlaps - beginStr.length; x++) {
      beginStr.push(" ");
    }
  } else if (endStr.length != amountOfFlaps) {
    for (var x = 0; x < amountOfFlaps - endStr.length; x++) {
      endStr.push(" ");
    }
  }
}
for (var x = 0; x < amountOfFlaps; x++) {
  strCount[x] = char.indexOf(beginStr[x]);
  (flag[x] = false), (flag2 = true);
}

// Flip them flaps
setInterval(function () {
  for (var x = 0; x < amountOfFlaps; x++) {
    if (b1[x].innerHTML == endStr[x]) dontFlipIt(x);
    else flipIt(x);

    if (
      flag.every(function (e) {
        return e;
      }) &&
      flag2
    )
      (flag2 = false), changeDestination();
  }
}, speed * 1000);

// Flap flipping functions

function flipIt(x) {
  a1[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  b1[x].innerHTML = char[strCount[x]];
  b2[x].innerHTML = char[strCount[x]];

  a2[x].classList.remove("flip1");
  a2[x].offsetWidth = a2[x].offsetWidth;
  a2[x].classList.add("flip1");
  b2[x].classList.remove("flip2");
  b2[x].offsetWidth = b2[x].offsetWidth;
  b2[x].classList.add("flip2");

  if (strCount[x] > char.length - 2) strCount[x] = 0;
  else strCount[x]++;
}

function dontFlipIt(x) {
  flag[x] = true;
  a2[x].classList.remove("flip2");
  a2[x].style.backgroundColor = "#3BB6eB";
  b2[x].style.backgroundColor = "#3BB6eB";
  a1[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
}

function changeDestination() {
  setTimeout(function () {
    flag.fill(false);
    flag2 = true;

    var tempArr = endStr.slice();
    endStr = beginStr.slice();
    beginStr = tempArr.slice();
  }, 3000);
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    

  }
}