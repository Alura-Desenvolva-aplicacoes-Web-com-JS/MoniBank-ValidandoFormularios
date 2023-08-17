import checkingCpf from "./checkCpf.js";
import checkLegalAge from "./checkAge.js";
const fieldsForm = document.querySelectorAll("[required]")

fieldsForm.forEach((campo) => {
    campo.addEventListener("blur", () => checkField(campo))
})

function checkField(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        checkingCpf(campo)
    }
    if(campo.name == "aniversario" && campo.value != ""){
        checkLegalAge(campo)
    }
}