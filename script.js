const singInBtn = document.querySelector('.singin-btn')
const singUpBtn = document.querySelector('.singup-btn')
const formBox = document.querySelector('.form-box')
const body = document.body

singUpBtn.addEventListener('click', function(){
    formBox.classList.add('active');
    body.classList.add('active')
})
singInBtn.addEventListener('click', function(){
    formBox.classList.remove('active');
    body.classList.remove('active')
})

