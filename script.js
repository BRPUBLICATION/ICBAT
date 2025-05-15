// Animate past event cards on scroll
function animatePastEvents() {
  const cards = document.querySelectorAll('.event-card');

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', animatePastEvents);
window.addEventListener('load', animatePastEvents);
