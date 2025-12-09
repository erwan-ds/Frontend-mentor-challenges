const share = document.querySelector('.share');
const shared = document.querySelector('.shared');


share.addEventListener('click',()=>{

        share.classList.add('open')
        shared.classList.remove('close')
    



});

shared.addEventListener('click',()=>{

        share.classList.remove('open')
        shared.classList.add('close')
    



});
