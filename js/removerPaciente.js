let tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeOut')

    setTimeout(function () {
        event.taarget.parentNode.remove()
    }, 500)
   
})