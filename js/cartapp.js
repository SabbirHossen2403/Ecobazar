document.addEventListener('DOMContentLoaded', () => {
    // Select all product cards
    const productCards = document.querySelectorAll('.productcard');
  
    productCards.forEach((card) => {
      const counterElement = card.querySelector('.counter');
      const increaseButton = card.querySelector('.increase');
      const decreaseButton = card.querySelector('.decrease');
  
      let counter = 0;
  
      increaseButton.addEventListener('click', () => {
        counter++;
        counterElement.textContent = counter;
      });
  
      decreaseButton.addEventListener('click', () => {
        if (counter > 0) {
          counter--;
          counterElement.textContent = counter;
        }
      });
    });
  });