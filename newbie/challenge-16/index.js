const items = document.querySelectorAll('.item');

items.forEach(item => {
  const header = item.querySelector('.header');

  header.addEventListener('click', () => {

    // Si déjà ouvert → fermer uniquement cet item
    if (item.classList.contains('open')) {
      item.classList.remove('open');
      return;
    }

    // Fermer tous les autres items, MAIS PAS l'item cliqué
    items.forEach(i => {
      if (i !== item) {
        i.classList.remove('open');
      }
    });

    // Attendre un peu puis ouvrir celui-ci
    setTimeout(() => {
      item.classList.add('open');
    }, 210); // délai d’animation
  });
});
