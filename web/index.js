
// MODAL DONATE

let modals
let btn_donate = document.querySelector('.btn-donate')
let close_btn = document.querySelector('.btn-cancel')

const show_modal = (modal) => {
    modals = document.querySelector('.'+modal)
    
    modals.showModal()
    setTimeout(() => {
        modals.classList.add('modal-show')
    }, 10)
}

const close_modal = (modal) => {
    modals = document.querySelector('.'+modal)
    modals.classList.remove('modal-show')
    setTimeout(() => {
        modals.close()
    }, 500)
}

// ===================

// BTN BACK

btn_back = document.querySelector(".btn-back")

const back = () => {
   window.location.href = 'index.html'
}


// ===================

// BTN APPLY TO ADOPT

const apply_adopt = () => {
    window.location.href = 'view-adoptables.html'
 }

// ===================
let validou = false
const valida = () => { 
    validou = !validou
    console.log("validou", validou)
}

// VALIDATE
document.getElementById('form-donate').addEventListener('submit', function(event) {
    event.preventDefault()

    const email = document.querySelector('.email').value
    const how_much = document.querySelector('.how-much').value
    var radios = document.getElementsByName('pay-method')
    var formValid = false
    console.log(email, how_much)
    let errorMessages = []

    if (email === '') {
        errorMessages.push('Email é obrigatório')
    }
    
    if (how_much === '') {
        errorMessages.push('Para contribuir digite um valor')
    }
    
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            formValid = true;
            break;
        }
    }

    if (formValid == false) {
        errorMessages.push('Método de pagamento é obrigatório')
    }
    
    const errorMessagesDiv = document.querySelector('.error-message-donate')

    errorMessagesDiv.innerHTML = ''
    
    

    if (errorMessages.length > 0 ) {
        errorMessages.forEach(function(message) {
            const p = document.createElement('p')
            p.textContent = message
            errorMessagesDiv.appendChild(p)
        })
        return
    }
    window.location.href = 'thanks.html'
})

document.getElementById('form-adopt').addEventListener('submit', function(event) {
    
    event.preventDefault()

    const email = document.querySelector('.email2').value
    const full_name = document.querySelector('.full-name').value
    const day = document.getElementById('day').value
    const month = document.getElementById('month').value
    const year = document.getElementById('year').value
    const checkbox = document.getElementById('checkbox').checked

    let errorMessages = []
    console.log("Email", email)
    if (email === '') {
        errorMessages.push('Email é obrigatório')
    }
    if (full_name === '') {
        errorMessages.push('Nome completo é obrigatório')
    }
    if (day === '') {
        errorMessages.push('Dia é obrigatório')
    }
    if (month === '') {
        errorMessages.push('Mês é obrigatório')
    }
    if (year === '') {
        errorMessages.push('Ano é obrigatório')
    }
    if (!checkbox) {
        errorMessages.push('Você deve aceitar os termos e condições')
    }

    console.log(errorMessages)
    const errorMessagesDiv = document.querySelector('.error-message')

    errorMessagesDiv.innerHTML = ''
    if (errorMessages.length > 0) {
        errorMessages.forEach(function(message) {
            const p = document.createElement('p')
            p.textContent = message
            errorMessagesDiv.appendChild(p)
        })
        return
    }
    window.location.href = 'thanks.html'
})



// ===================

// CAROUSEL


function trocar(direction) {
    const carousel = document.querySelector('.imgs')
    let images = Array.from(carousel.querySelectorAll('img')) 

    images.forEach(img => img.classList.add('hidden'))

    setTimeout(() => {
        if (direction == 'right') {
            carousel.appendChild(images[0]) // a primeira imagem vai pro final do arr
        } else {
            carousel.insertBefore(images[images.length - 1], images[0]) // tira o ultimo elemento do arr e insere antes do primeiro
        }

        images = Array.from(carousel.querySelectorAll('img')) // atualizo o array

        images.forEach((img, index) => {
            if (index < 4) {
                img.style.display = ' block'
                setTimeout(() => img.classList.remove('hidden'), 50)
            } else {
                img.style.display = 'none' 
            }
        })
    }, 200)
}


// ===================