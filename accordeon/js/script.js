document.querySelectorAll('.accordeon__question-btn').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        const secondParent = parent.parentNode;

        if (secondParent.classList.contains('accordeon__item_active')) {
            secondParent.classList.remove('accordeon__item_active');
        } else {
            document
                .querySelectorAll('.accordeon__item')
                .forEach((answer) => {
                    answer.classList.remove('accordeon__item_active');
                });
            secondParent.classList.toggle('accordeon__item_active');
        }

    });
});
























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