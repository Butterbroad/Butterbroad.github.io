"use strict";
//history toggle
const historyBtn = document.querySelector('.history__btn');
const historyDropdown = document.querySelector('.history__dropdown');

const toggleHistory = () => {
    historyDropdown.classList.toggle('active');
}

historyBtn.addEventListener('click', e => {
    e.stopPropagation();

    toggleHistory();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_historyDropdown = target == historyDropdown || historyDropdown.contains(target);
    let its_historyBtn = target == historyBtn;
    let historyDropdown_is_active = historyDropdown.classList.contains('active');

    if (!its_historyDropdown && !its_historyBtn && historyDropdown_is_active) {
        toggleHistory();
    }
});

//help toggle
const helpBtn = document.querySelector('.help__btn');
const helpDropdown = document.querySelector('.help__dropdown');

const toggleHelp = () => {
    helpDropdown.classList.toggle('active');
}

helpBtn.addEventListener('click', e => {
    e.stopPropagation();

    toggleHelp();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_helpDropdown = target == helpDropdown || helpDropdown.contains(target);
    let its_helpBtn = target == helpBtn;
    let helpDropdown_is_active = helpDropdown.classList.contains('active');

    if (!its_helpDropdown && !its_helpBtn && helpDropdown_is_active) {
        toggleHelp();
    }
});

//search toggle
const searchBtn = document.querySelector('.search__btn');
const searchDropdown = document.querySelector('.search__dropdown');

const toggleSearch = () => {
    searchDropdown.classList.toggle('active');
}

searchBtn.addEventListener('click', e => {
    e.stopPropagation();

    toggleSearch();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_searchDropdown = target == searchDropdown || searchDropdown.contains(target);
    let its_searchBtn = target == searchBtn;
    let searchDropdown_is_active = searchDropdown.classList.contains('active');

    if (!its_searchDropdown && !its_searchBtn && searchDropdown_is_active) {
        toggleSearch();
    }
});


//sidebar toggle
const burger = document.querySelector('.header-chat__burger');
const sidebar = document.querySelector('.sidebar');


const toggleSidebar = () => {
    sidebar.classList.toggle('active');
}

burger.addEventListener('click', e => {
    e.stopPropagation();

    toggleSidebar();
});

document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == sidebar || sidebar.contains(target);
    let its_hamburger = target == burger;
    let menu_is_active = sidebar.classList.contains('active');

    if (!its_menu && !its_hamburger && menu_is_active) {
        toggleSidebar();
    }
});