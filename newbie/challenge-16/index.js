const items = document.querySelectorAll('.item');

items.forEach(item => {
  const header = item.querySelector('.header');

  header.addEventListener('click', () => {

    if (item.classList.contains('open')) {
      item.classList.remove('open');
      return;
    }
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('open');
      }
    });

    setTimeout(() => {
      item.classList.add('open');
    }, 210); 
  });
});
