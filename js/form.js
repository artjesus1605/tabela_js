let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function (evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let paciente = obterValoresDoForm(form)

    let erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeMensagemDeErro(erros)
        return
    }

    adicionaPacienteNaTabela(paciente)

    let mensagemErro = document.querySelector("#mensagens-erro")
    mensagemErro = ''
})

function validaPaciente(paciente) {
    let erros = []

    if (paciente.nome.length == 0) {
        erros.push('O nome não pode estar em branco')
    }
    if (paciente.data.length == 0) {
        erros.push('A data não pode estar em branco')
    }
    if (paciente.hora.length == 0) {
        erros.push('O horario não pode estar em branco')
    }
    if (paciente.medico.length == 0) {
        erros.push('O nome do medico não pode estar em branco')
    }
    return erros
}

function exibeMensagemDeErro(erros) {
    let ul = document.querySelector('#mensagens-erro')
    ul.innerHTML = ''

    erros.forEach(function (erro) {
        let li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')

    tabela.appendChild(pacienteTr)
}

function montarTr(paciente) {
    let pacienteTr = document.createElement('tr')
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(montarTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montarTd(paciente.data, 'info-data'))
    pacienteTr.appendChild(montarTd(paciente.hora, 'info-hora'))
    pacienteTr.appendChild(montarTd(paciente.medico, 'info-medico'))
  

    return pacienteTr
}

function montarTd(dado, classe) {
    //criando um elemeto td
    let td = document.createElement('td')
    td.textContent = dado
    //classList define a classe do elemento HTML
    td.classList.add(classe)

    return td
}

function obterValoresDoForm(form) {
    let paciente = {
        nome: form.nome.value,
        data: form.data.value,
        hora: form.hora.value,
        medico: form.medico.value,
        
    }
    return paciente
}