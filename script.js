const middle = document.getElementById('middle');
const btnEmail = document.getElementById('btnEmail');
const hiddenMiddle = document.getElementById('hidden-middle');
const hiddenButton = document.getElementById('hidden-button');

function onClickShow() {

    middle.style.display = 'none';
    hiddenMiddle.style.display = 'flex';
}

function onClickHide() {
    middle.style.display = 'flex';
    hiddenMiddle.style.display = 'none';

}
btnEmail.addEventListener('click', onClickShow);
hiddenButton.addEventListener('click', onClickHide);
