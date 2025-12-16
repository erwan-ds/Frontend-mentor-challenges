const counter = document.querySelector(".Notifications__counter");
const notifications = document.querySelector(".notifications");
const remove = document.querySelector(".remove__unread");


remove.addEventListener("click",()=>{

    document.querySelectorAll('.unread').forEach(el => {
    el.classList.remove('unread');
    updateCountUnread();
});

});

function updateCountUnread(){
let unread = document.querySelectorAll(".unread");
    counter.textContent = unread.length


};

notifications.addEventListener('click', (event) => {
    const card = event.target.closest('.card');
    if (!card) return;
    else if (card.classList.contains('unread')) {
        card.classList.remove('unread');
        updateCountUnread();
    }
    console.log('card cliquée', card);
    console.log(card.classList);
});

updateCountUnread();