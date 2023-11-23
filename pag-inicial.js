let fade = document.querySelector('#fade')
let modal = document.querySelector('#modal')
let excluir = document.querySelector('.btn-danger')
let excluirr = document.querySelector('#excluirr')
let fecharModal = document.querySelector('#sim')
 let fecharModall = document.querySelector('#nao')

let eventos = [fade, excluir, excluir, fecharModal, fecharModall]

let toogleModal = () =>{
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

eventos.map((elemento)=>{
    elemento.addEventListener('click', toogleModal)
})

// excluir.addEventListener('click', function(){
//     alert('ola')
// })