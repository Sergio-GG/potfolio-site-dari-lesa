const catalog = document.querySelector('.catalog-items');
const items = document.querySelectorAll('.item-block-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
//const visibleItems = 4; /* не хард код */
const gapPercentage = 3;





// 
function setItemWidth() {

    const screenWidth = window.innerWidth; // Получаем текущую ширину экрана

    if (screenWidth >= 1024) { // Большой экран
        visibleItems = 4;
    } else if (screenWidth >= 768) { // Средний экран
        visibleItems = 3;
    } else if (screenWidth >= 480) { // Средний экран
        visibleItems = 2; 
    } else { // Узкий экран
        visibleItems = 1;
    }
    /* Узнал ширину блока элкментов */
    const catalogWidth = catalog.offsetWidth;
    /* Узнал ширину элемента (карточки)  */
    const itemWidth = (catalogWidth - (visibleItems - 1) * (gapPercentage / 100) * catalogWidth) / visibleItems;
    /* Задал размеры элементу после пересчета*/
    items.forEach(item => {
        index.style.minWidth = `${itemWidth}px`;
    });

    
}


let index = 0;

function moveCarousel() {
    const itemWidth = items[0].offsetWidth + parseInt(window.getComputedStyle(items[0]).marginRight);
    const gapWidth = (gapPercentage / 100) * catalog.offsetWidth;
    catalog.style.transform = `translateX(-${index * (itemWidth + gapWidth)}px`;
}

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = items.length - visibleItems;
    }
    moveCarousel();
});

nextButton.addEventListener('click', () => {
    if (index < items.length - visibleItems) {
        index++;
    } else {
        index = 0;
    }
    moveCarousel();
});

window.addEventListener('resize', setItemWidth);
setItemWidth();