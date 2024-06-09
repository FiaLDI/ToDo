const modal = document.querySelector('#dialog1')
const modalBox = document.getElementById('modal-box')
const showModalBtn = document.getElementById('init_create_do')

let isModalOpen = false

showModalBtn.addEventListener('click', (e) => {
    modal.showModal()
    isModalOpen = true
    e.stopPropagation()
    e.preventDefault()
})

document.addEventListener('click', (e) => {
    if (isModalOpen && !modalBox.contains(e.target)) {
        modal.close()
    }
})

const modal2 = document.querySelector('#dialog2')
const modalBox2 = document.getElementById('modal-box2')
const showModalBtn2 = document.getElementById('init_change_do')
const checkboxs = document.querySelectorAll('.todo-select')

let isModalOpen2 = false

showModalBtn2.addEventListener('click', (e) => {
    let CountActive = 0
    checkboxs.forEach((val) => {
        if (val.checked) {
            CountActive += 1
            console.log(val.id)
        }
        
    })
    if (CountActive < 2) {
        modal2.showModal()
        isModalOpen2 = true
        e.stopPropagation()
        e.preventDefault()
    }
    
})

document.addEventListener('click', (e) => {
    if (isModalOpen2 && !modalBox2.contains(e.target)) {
        modal2.close()
    }
})

let init_remove = document.getElementById('init_remove_do');
init_remove.value = 0

init_remove.addEventListener('click', (e) => {
    let rem = []
    checkboxs.forEach((val) => {
        if (val.checked) {
            rem.push(val.name)
        }
    })
    init_remove.value = rem
    e.stopPropagation()
})