document.querySelector('.involved-button').addEventListener('click', () => {
  document.querySelector('.pages-section').scrollIntoView({ behavior: 'smooth' });
});
const cards= document.querySelectorAll('.flip-card');
cards.forEach(card => {
    card.addEventListener('click' , () => {card.classList.toggle('flipped');});
});

