const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const recipes = document.querySelectorAll('.recipe-card')

const img = modal.querySelector('.modal-content img')
const title = modal.querySelector('.modal-content h2')
const author = modal.querySelector('.modal-content h4')

for (let recipe of recipes){
    recipe.addEventListener("click", function(){

        img.src = recipe.querySelector('.recipe-card-img img').getAttribute("src")
        title.textContent = recipe.querySelector('.recipe-card-title h2').innerHTML
        author.textContent = recipe.querySelector('.recipe-card-author h4').innerHTML

        modalOverlay.classList.add('active')        
    })
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    img.src = ''
    title.textContent = ''
    author.textContent = ''
    
})
