import checkingCpf from "./checkCpf.js";
import checkLegalAge from "./checkAge.js";
const fieldsForm = document.querySelectorAll("[required]")
const form = document.querySelector('[data-formulario]')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const listResponse = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "rg": e.target.elements["rg"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    localStorage.setItem("cadastro", JSON.stringify(listResponse))

    window.location.href = './abrir-conta-form-2.html'
})

fieldsForm.forEach((campo) => {
    campo.addEventListener("blur", () => checkField(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const typeErrors = [
    'valueMissing',
    'typeismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const customMsg = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function checkField(campo){
    let msg = ""
    campo.setCustomValidity('')
    if(campo.name == "cpf" && campo.value.length >= 11){
        checkingCpf(campo)
    }
    if(campo.name == "aniversario" && campo.value != ""){
        checkLegalAge(campo)
    }
    typeErrors.forEach(erro => {
        if(campo.validity[erro]){
            msg = customMsg[campo.name][erro]
            console.log(msg)
        }
    })
    const errMsg = campo.parentNode.querySelector('.mensagem-erro')
    const validInput = campo.checkValidity()

    if(!validInput){
        errMsg.textContent = msg
    } else {
        errMsg.textContent = ""
    }
}