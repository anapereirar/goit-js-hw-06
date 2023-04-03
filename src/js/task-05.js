const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
input.addEventListener('input', writeName)

function writeName(){
    if (input.value == ""){
        output.textContent = "Anonymus";
    } else {
        output.textContent = input.value;
    }
}
