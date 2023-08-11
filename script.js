let desafios = "+30 desafios"
let duracao = '90 dias'
let local = 'São Paulo'
infoDesafios = document.querySelector('#dotOne')
infoDuracao = document.querySelector('#dotTwo')
infoLocal = document.querySelector('#dotThree')


console.log(info)

function mostrar1(){
    infoDesafios.textContent = desafios
}
function mostrar2(){
    infoDuracao.textContent = duracao
}
function mostrar3(){
    infoLocal.textContent = local
}

function mostrarMenu() {
    let menu = document.querySelector("#nav-header")
    let icone = document.querySelector("#icone")

    if (getComputedStyle(menu).display == 'none'){
        menu.style.display = "flex"
        icone.classList.remove("fa-bars")
        icone.classList.add("fa-times")
    }
    else {
        menu.style.display = "none"
        icone.classList.remove("fa-times")
        icone.classList.add("fa-bars")
    }
}