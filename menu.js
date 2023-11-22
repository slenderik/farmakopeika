
const is_giveaway_end = false;

function WinnersSwithcer() {
    if (is_giveaway_end){
        setTimeout(displayTime, 10000); // Вызывать функцию каждые 10 сек. Чтобы не пришлось обновлять страницу
    }
    else {
        let menu = document.getElementById("menu"); // Найти элемент с id="winners_link"
        let one = document.getElementById("winners_link"); // Найти элемент с id="winners_link"
        //element.style.visibility = "collapse";
        menu.removeChild(one);
    }
}

function number() {
    const pageWidth = document.documentElement.scrollWidth;
}

window.onload = WinnersSwithcer; // Начать отображение времени после загрузки документа
