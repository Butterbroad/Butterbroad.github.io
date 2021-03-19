'use strict'
document.addEventListener('DOMContentLoaded', () => {

  //scroll to top btn
  const upBtn = document.querySelector('.btn-up');

  upBtn.addEventListener('click', () => {
    scrollTo(0, 0);
  });

  window.addEventListener('scroll', () => {
    let scrolled = window.pageYOffset;
    if (scrolled > 700) {
      upBtn.style.display = 'flex';
    } else {
      upBtn.style.display = 'none';
    }
  });

  //header burger 
  const headerBurger = document.querySelector('.header__burger');
  headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active');
    document.body.classList.toggle('lock');
    document.querySelector('.mobile-menu').classList.toggle('active');
  });

  //navigation
  const headerNavigationLinks = document.querySelectorAll('.nav-link');
  headerNavigationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      let path = link.getAttribute("data-path");
      slideToSection(path);
      document.body.classList.remove('lock');
      headerBurger.classList.remove('active');
      document.querySelector('.mobile-menu').classList.remove('active');
    });
  });

  function slideToSection(path) {
    let getSection = document.getElementById(path);
    if (getSection) {
      getSection.scrollIntoView({ block: "start", behavior: "smooth" });
    }
    if (getSection.classList.contains('centered')) {
      getSection.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  }



  function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});

});
