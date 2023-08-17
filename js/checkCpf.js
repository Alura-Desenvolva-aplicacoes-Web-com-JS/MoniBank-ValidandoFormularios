export default function checkingCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(checkRepeatNumbers(cpf) || checkFirstNumber(cpf) || checkSecondNumber(cpf)){
        console.log("esse cpf não existe")
    }else{
        console.log("Existe")
    }
}

function checkRepeatNumbers(cpf) {
    const repeatNumbers = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return repeatNumbers.includes(cpf)
}

function checkFirstNumber(cpf){
    let plus = 0 // Soma
    let Xtion = 10 // Multiplicador

    for(let i = 0; i < 9; i++){
        plus += cpf[i] * Xtion
        Xtion--
    }

    plus = (plus * 10) % 11

    if(plus == 10 || plus == 11){
        plus = 0
    }

    return plus != cpf[9]
}

function checkSecondNumber(cpf){
    let plus = 0 // Soma
    let Xtion = 11 // Multiplicador

    for(let i = 0; i < 10; i++){
        plus += cpf[i] * Xtion
        Xtion--
    }

    plus = (plus * 10) % 11

    if(plus == 10 || plus == 11){
        plus = 0
    }

    return plus != cpf[10]
}