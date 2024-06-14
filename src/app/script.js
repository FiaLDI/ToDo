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

// Redact

const modals = document.querySelectorAll('.dial')
const modalBoxs = document.querySelectorAll('.modal-boxs')
const showModalBtnS = document.getElementById('init_change_do')
const checkboxs = document.querySelectorAll('.todo-select')
let curModal = 0 

let isModalOpen2 = false

showModalBtnS.addEventListener('click', (e) => {
    e.preventDefault()
    let CountActive = 0
    checkboxs.forEach((val) => {
        if (val.checked) {
            CountActive += 1
            curModal = Number(val.name)
        }
        
    })
    if (CountActive == 1) {
        modals[curModal].showModal()
        isModalOpen = true
        e.stopPropagation() 
    } 
    
   
})

document.addEventListener('click', (e) => {
    if (isModalOpen2 && !modals[curModal].contains(e.target)) {
        modals[curModal].close()
    }
})


// Remove
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

// const form = document.querySelector('form');

// form.addEventListener('submit', () => {
//   const checkboxes = form.querySelectorAll('input[type="checkbox"]');
//   const query = [...checkboxes]
//     .filter(checkbox => checkbox.checked)
//     .map(checkbox => checkbox.name)
//     .join('+')
//   const url = 'https://example.ru/search/' + query;

//   // not working in sandbox
//   // window.location.href = url;
//   alert('redirect to ' + url);
// })