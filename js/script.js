import checkingCpf from "./checkCpf.js";
const fieldsForm = document.querySelectorAll("[required]")

fieldsForm.forEach((campo) => {
    campo.addEventListener("blur", () => checkField(campo))
})

function checkField(campo){
    if(campo.name == "cpf" && campo.value.length >= 11){
        checkingCpf(campo)
    }
}