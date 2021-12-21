const readMoreBtn = document.querySelector('.more-button');
const text = document.querySelector('.sub-menu');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more')
});


const expnadhomepage = document.querySelector('.expand');
const project = document.querySelector('.main-menu');

expnadhomepage.addEventListener('click',(e)=>{
    project.classList.toggle('show-more')
});