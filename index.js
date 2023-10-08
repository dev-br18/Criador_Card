

const nomeinput = document.querySelector('#name')
const numberinput = document.querySelector('#number')
const dateinput = document.querySelector('#date')
const nameSpan = document.querySelector('.cardholder-name')
const numberSpan = document.querySelector('.card-number')
const dateSpan = document.querySelector('.exp-date')
const dateinput2 = document.querySelector('#date2')
const cvcInput = document.querySelector('#cvc')
const cvcSpan = document.querySelector('.card-cvc')
const meuForm = document.querySelector('.meuForm')
const sucess = document.querySelector('.d-none')




nomeinput.addEventListener('input',atualizarCard)
numberinput.addEventListener('input',atualizarCard)
dateinput.addEventListener('input',atualizarCard)
dateinput2.addEventListener('input',atualizarCard)
cvcInput.addEventListener('input',atualizarCard)

meuForm.addEventListener('submit',function(event) {
    event.preventDefault()

    meuForm.classList.add('d-none')

    sucess.classList.remove('d-none')
    sucess.classList.add('sucess')
})
function atualizarCard(){
    const nome = nomeinput.value
    let number = numberinput.value
    const date = dateinput.value
    const date2 = dateinput2.value
    const cvc = cvcInput.value
    number = number.slice(0,16)


    const formatednumber = number.replace(/\s/g, '').replace(/(\d{4}(?=\d))/g, '$1 ');
    
    dateSpan.textContent = `${date || '00'}/${date2 || '00'}`;
    nameSpan.textContent = nome || 'Jane Appleseed'
    numberSpan.textContent = formatednumber  || '0000 0000 0000 0000'
    cvcSpan.textContent = cvc || '000'
}


function limitarnumero(input,limite){
    const valor = input.value.toString()
    if(valor.length > limite){
        input.value = valor.slice(0,limite)
    }
}



