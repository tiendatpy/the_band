let index = 0;
carousel();

function carousel() {
    const item = document.getElementsByClassName('slider');
    for (let i = 0; i < item.length; i++) {
        item[i].style.display = "none";
    }
    if (index >= item.length) {
        index = 0;
    }
    item[index].style.display = "block";
    index++;
    setTimeout(carousel, 4000);
}
