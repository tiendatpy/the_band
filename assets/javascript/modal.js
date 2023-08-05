const btnBuys = document.querySelectorAll('.js-btn-ticket')
const modal = document.querySelector('.modal')
const btnClose = document.querySelectorAll('.js-close')
const modalContainer = document.querySelector('.js-modal-container')
function ShowModal (){
    modal.classList.add('open');
}
function HideModal (){
    modal.classList.remove('open');
}
for (const btnBuy of btnBuys) {
    btnBuy.addEventListener('click',ShowModal);
}
for (const btncls of btnClose){
    btncls.addEventListener('click', HideModal);
}
modal.addEventListener('click', HideModal);
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})