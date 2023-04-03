const control = document.querySelector('input#font-size-control');
const text = document.querySelector('#text');

control.addEventListener('input', () => {
    text.style.fontSize = `${control.value}px`
});