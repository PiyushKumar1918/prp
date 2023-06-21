console.log("object");

var menu = document.querySelector(".menu");
var navbar = document.querySelector(".nav");

menu.addEventListener("click", function () {
  console.log("click");
  navbar.classList.toggle("active");
  // menu.innerHTML = <i class="fa-solid fa-xmark"></i>
});

document.addEventListener('scroll', function () {
  navbar.classList.remove('active')
})

document.querySelector(".close").addEventListener("click", function () {
  navbar.classList.remove("active");
});

// this is a swiper js=======================
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// counter------------------


var percent = document.querySelector("#client");
var isVisible = false;

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      if (!isVisible) {
        isVisible = true;
        startCounter();
      }
    } else {
      isVisible = false;
      resetCounter();
    }
  });
});

observer.observe(percent);

function startCounter() {
  var clients = document.querySelector('.clients');
  var projects = document.querySelector('.projects');
  var customers = document.querySelector('.customers');
  var satisfieds = document.querySelector('.satifieds');
  var count = 1;

  var interval = setInterval(function () {
    clients.innerHTML = count + "%";
    projects.innerHTML = Math.round((count / 2)) + "%";
    customers.innerHTML = + Math.round((count / 2.5)) + "%";
    satisfieds.innerHTML = count + "%";
    count++;

    if (count > 100) {
      clearInterval(interval);
    }
  }, 10);
}

function resetCounter() {
  percentage.innerText = "0";
}


// home

// var home = document.querySelector('.home');

// window.addEventListener("scroll", showHome);

// function showHome() {
//   if (window.scrollY > nav.offsetHeight + 300) {
//     document.classList.add("actives");
//   } else {
//     home.classList.remove("actives");
//   }
// }

// if (window.scrollY > nav.offsetHeight + 300) {
//   document.classList.add('actives')
// }


window.addEventListener('scroll', function() {
  var homeSection = document.getElementById('about');
  var homesDiv = document.querySelector('.home');

  var position = homeSection.getBoundingClientRect();

  if (position.bottom <= window.innerHeight) {
    homesDiv.style.display = 'block';
  } else {
    homesDiv.style.display = 'none';
  }
});
