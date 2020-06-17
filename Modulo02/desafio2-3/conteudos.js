const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const cursos = document.querySelectorAll('.curso')

for (let curso of cursos){
    curso.addEventListener("click", function(){
        const cursoID = curso.getAttribute("id")
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.rocketseat.com.br/${cursoID}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ''
})
document.querySelector('.maximize-modal').addEventListener("click", function(){
    if(modal.classList.contains('maximize')){
        modal.classList.remove('maximize')
    }
    else{
        modal.classList.add('maximize')
    }
})