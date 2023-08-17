export default function checkLegalAge(campo){
    const bthDate = new Date(campo.value) // data Nascimento
    validAge(bthDate)
    console.log(validAge(bthDate))
}

function validAge(data){
    const ctDate = new Date() // data Atual
    const plus18date = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate()) // data maior de 18 anos
    return ctDate >= plus18date
}