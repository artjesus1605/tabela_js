let titulo = document.querySelector('.titulo')
titulo.textContent = 'Clinica ruffancias xprosivas'
//-------------------------------------------------------
//selecionando todos os pacientes da tabela e colocando dentro de uma lista
let pacientes = document.querySelectorAll('.paciente')
// console.log(pacientes)

//percorrendo a lista de pacientes
for (var i = 0; i <= pacientes.length; i++) {
    let paciente = pacientes[i]

    //recebendo o peso do paciente
    let dataTd = paciente.querySelector('.info-data')
    // console.log(pesoTd)
    let data = dataTd.textContent
    // console.log(peso)

    //recebendo a altura do paciente
    let horarioTd = paciente.querySelector('.info-horario')
    // console.log(alturaTd)
    let horario = horarioTd.textContent

    let imcTd = paciente.querySelector('.info-medico')
    let dataEhValido = validaData(data)
    let horarioEhValido = validaHorario(horario)

    if(!dataEhValido){
        console.log('data Invalida')
        dataEhValido = false
        imcTd.textContent = 'data Invalido'
        paciente.classList.add('paciente-invalido')
    }

    if(!horarioEhValido){
        console.log('horario invalido')
        horarioEhValido = false
        imcTd.textContent = 'horario Invalido'
        paciente.classList.add = 'paciente-invalido'
    }

    if(dataEhValido && horarioEhValido){
        let imc = calculaImc(data, horario)
        imcTd.textContent = imc
    }
}
function validaData(data) {
    if (data >= 0 && data <= 1000) {
        return true
    } else {
        return false
    }
}

function validaHorario(horario){
    if (horario >= 0 && horario <= 3.00){
        return true
    } else {
        return false
    }
}
function calculaconsulta(num-cosulta) {
    let consulta = 0
    //calculando o imc do paciente
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}