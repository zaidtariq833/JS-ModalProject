// const click = document.querySelector("#modal-btn")
// const modalBtn = document.querySelector("#my-modal")
// const closed = document.querySelector(".close")


// click.addEventListener('click', function(){
//    modalBtn.style.display = 'block'
//    modalBtn.style.backgroundColor = 'pink'
// })

// closed.addEventListener('click', function(){
//    closed.style.display = 'none'
// })

// window.addEventListener('click', function(e){
//     if(e.target == modalBtn)
//     modalBtn.style.display = 'none'
// })

const modal = document.querySelector("#modal-btn")
const modalBtn = document.querySelector("#my-modal")
const close = document.querySelector(".close")

modal.addEventListener('click', function(){
    modalBtn.style.display = 'block'
})

close.addEventListener('click', function(){
    close.style.display = 'static'
})

window.addEventListener('click', function(e){
    if(e.target == modalBtn){
        modalBtn.style.display = 'none'
    }
})