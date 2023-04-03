const input = document.querySelector('input');

input.addEventListener('blur', validateSimbols);

function validateSimbols (){
    let simbolsQuantity = this.value.length;
    let quantitySimbolsRule = this.dataset.length;
    if (simbolsQuantity == quantitySimbolsRule){
        input.setAttribute('class', 'valid');
    }else{
        input.setAttribute('class', 'invalid')
    }
}