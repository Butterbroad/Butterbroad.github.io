'use strict'

document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector('.hero__content');
  const heroTitle = document.querySelector('.hero__content-title');
  const heroSubtitle = document.querySelector('.hero__content-subtitle');
  const heroButton = document.querySelector('.hero__button');
  const columnWrapper = document.querySelector('.slot__columns');
  const slotColumns = document.querySelectorAll('.slot__column');
  const heroBox = document.querySelector('.hero__box');

  let lang = !!localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';

  setLanguageSelector(lang);

  const doSteps = stepsHandler();

  heroButton.addEventListener('click', doSteps);

  function stepsHandler() {
    let step = 1;
    return function (e) {
      e.preventDefault();

      if (step === 1) {
        slotColumns.forEach(column => {
          columnWrapper.classList.add('step1');
          heroButton.style.pointerEvents = 'none';
          column.addEventListener('animationend', stepOneHandler);
        });
        step++
      } else {
        slotColumns.forEach(column => {
          column.removeEventListener('animationend', stepOneHandler);
          columnWrapper.classList.add('step2');
          column.addEventListener('animationend', stepTwoHandler);
        });
        heroButton.removeEventListener('click', doSteps);
        step++
      }
    }
  }

  function stepOneHandler() {
    return setInterval(() => {
      document.querySelector('.attempts__digit').textContent = '1';
      heroButton.style.pointerEvents = 'auto';
    }, 500);
  }
  function stepTwoHandler() {
    return setInterval(() => {
      heroBox.classList.add('active');
      heroButton.classList.add('registration');
      if (lang === 'ru') {
        heroButton.textContent = 'РЕГИСТРАЦИЯ';
        heroTitle.textContent = 'вы выиграли 50$';
        heroSubtitle.textContent = 'и 150 фриспинов';
      }
      if (lang === 'en') {
        heroButton.textContent = 'registration';
        heroTitle.textContent = 'YOU WIN $50';
        heroSubtitle.textContent = 'and 150 FREE SPINS';
      }
      if (lang === 'tr') {
        heroButton.textContent = 'Kayıt';
        heroTitle.textContent = '50$ ve 150 BEDAVA';
        heroSubtitle.textContent = 'DÖNDÜRME KAZANDINIZ';
      }

      heroButton.setAttribute('href', "https://www.kingo.bet/");
      heroContent.classList.add('win');
    }, 500);
  }

  const translations = {
  "ru": {
    heroTitle: 'забирай свой',
    heroSubtitle: 'взрывной бонус',
    attemptsTitle: 'у вас есть',
    attemptsNumTitle: 'попытки',
    stepsItemTitle1: 'Регистрируйся',
    stepsItemTitle2: 'пополни счет',
    stepsItemTitle3: 'забирай бонус',
    heroButton: 'Испытай удачу',
  },
  "en": {
    heroTitle: 'GET YOUR',
    heroSubtitle: 'EXPLOSIVE BONUS',
    attemptsTitle: 'YOU HAVE',
    attemptsNumTitle: 'ATTEMPTS',
    stepsItemTitle1: 'Register',
    stepsItemTitle2: 'top up your account',
    stepsItemTitle3: 'take the bonus',
    heroButton: 'TRY YOUR LUCK',
  },
  "tr": {
    heroTitle: 'PATLAYICI',
    heroSubtitle: 'BONUSUNU AL',
    attemptsTitle: 'DENEYİMİNİZ',
    attemptsNumTitle: 'VAR',
    stepsItemTitle1: 'Kayıt ol',
    stepsItemTitle2: 'Hesabınızı doldurun',
    stepsItemTitle3: 'bonusu al',
    heroButton: 'ŞANSINI DENE',
  }
};

const attemptsTitle = document.querySelector('.attempts__title-text');
const attemptsNumTitle = document.querySelector('.attempts__num-title');
const stepsItemTitle1 = document.querySelector('.steps__item-title_1');
const stepsItemTitle2 = document.querySelector('.steps__item-title_2');
const stepsItemTitle3 = document.querySelector('.steps__item-title_3');

heroTitle.textContent = translations[lang].heroTitle;
heroSubtitle.textContent = translations[lang].heroSubtitle;
attemptsTitle.textContent = translations[lang].attemptsTitle;
attemptsNumTitle.textContent = translations[lang].attemptsNumTitle;
stepsItemTitle1.textContent = translations[lang].stepsItemTitle1;
stepsItemTitle2.textContent = translations[lang].stepsItemTitle2;
stepsItemTitle3.textContent = translations[lang].stepsItemTitle3;
heroButton.textContent = translations[lang].heroButton;
;

  const langSelect = document.querySelector('.lang');
  const listLangItems = document.querySelectorAll('.lang__item_list');

  listLangItems.forEach(item => {
    if (item.dataset.lang === langSelect.querySelector('.lang__item_current').dataset.lang) {
      item.classList.add('active');
    }
  });

  langSelect.addEventListener('click', (e) => {
    langSelect.classList.toggle('active');
    let currentItem = langSelect.querySelector('.lang__item_current')
    let selectedItem = e.target.closest('.lang__item');

    if (selectedItem.classList.contains('lang__item_current')) return;

    lang = localStorage.setItem('lang', selectedItem.getAttribute('data-lang'));

    currentItem.querySelector('.lang__item-code').textContent = selectedItem.querySelector('.lang__item-code').textContent;
    currentItem.dataset.lang = selectedItem.dataset.lang;
    currentItem.querySelector('.lang__item-icon img').src = selectedItem.querySelector('.lang__item-icon img').getAttribute('src');
    if (currentItem.querySelector('.lang__item-icon source')) {
      currentItem.querySelector('.lang__item-icon source').srcset = selectedItem.querySelector('.lang__item-icon source').getAttribute('srcset');
    }

    listLangItems.forEach(item => {
      item.classList.remove('active');
      if (item.dataset.lang === currentItem.dataset.lang) {
        item.classList.add('active');
      }
    });

    let currentLang = localStorage.getItem('lang');
    //translate
    heroTitle.textContent = translations[currentLang].heroTitle;
    heroSubtitle.textContent = translations[currentLang].heroSubtitle;
    attemptsTitle.textContent = translations[currentLang].attemptsTitle;
    attemptsNumTitle.textContent = translations[currentLang].attemptsNumTitle;
    stepsItemTitle1.textContent = translations[currentLang].stepsItemTitle1;
    stepsItemTitle2.textContent = translations[currentLang].stepsItemTitle2;
    stepsItemTitle3.textContent = translations[currentLang].stepsItemTitle3;
    heroButton.textContent = translations[currentLang].heroButton;

    setLanguageSelector(currentLang);
  });


  function setLanguageSelector(lang) {
    if (lang === 'ru') {
      document.querySelector('.lang__item-icon img').src = './img/language/ru.svg';
      if (document.querySelector('.lang__item-icon source')) {
        document.querySelector('.lang__item-icon source').srcset = './img/language/ru.svg';
      }
      document.querySelector('.lang__item-code').textContent = 'ru';
      document.querySelector('.lang__item_current').dataset.lang = 'ru';

      document.querySelector('.hero__attempts').innerHTML = `
      <div class="attempts__title">
      <span class="attempts__title-text">у вас есть</span>
      </div>
      <div class="attempts__num">
      <span class="attempts__digit">2</span>
       <span class="attempts__num-title">попытки</span>
      </div>
      `;
    }
    if (lang === 'en') {
      document.querySelector('.lang__item-icon img').src = './img/language/en.svg';
      if (document.querySelector('.lang__item-icon source')) {
        document.querySelector('.lang__item-icon source').srcset = './img/language/en.svg';
      }
      document.querySelector('.lang__item-code').textContent = 'en';
      document.querySelector('.lang__item_current').dataset.lang = 'en';

      document.querySelector('.hero__attempts').innerHTML = `
      <div class="attempts__title">
      <span class="attempts__title-text">YOU HAVE</span>
      </div>
      <div class="attempts__num">
      <span class="attempts__digit">2</span>
       <span class="attempts__num-title">ATTEMPTS</span>
      </div>
      `;
    }
    if (lang === 'tr') {
      document.querySelector('.lang__item-icon img').src = './img/language/tr.svg';
      if (document.querySelector('.lang__item-icon source')) {
        document.querySelector('.lang__item-icon source').srcset = './img/language/tr.svg';
      }
      document.querySelector('.lang__item-code').textContent = 'tr';
      document.querySelector('.lang__item_current').dataset.lang = 'tr';

      document.querySelector('.hero__attempts').innerHTML = `
      <div class="attempts__title">
      <span class="attempts__digit">2</span>
      <span class="attempts__title-text">DENEYİMİNİZ</span>
      </div>
      <div class="attempts__num">
       <span class="attempts__num-title">VAR</span>
      </div>
      `;
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