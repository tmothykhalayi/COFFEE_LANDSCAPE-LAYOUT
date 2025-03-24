// --- Menu Section: Toggle Categories ---
document.querySelectorAll('.menu-category').forEach(category => {
  const categoryTitle = category.querySelector('h2');
  categoryTitle.addEventListener('click', () => {
      // Toggle the visibility of the menu items under the category
      const items = category.querySelectorAll('.menu-item');
      items.forEach(item => {
          item.classList.toggle('hidden'); // Toggle visibility on click
      });

      // Change category title to indicate open/close
      if (categoryTitle.innerText.includes('▲')) {
          categoryTitle.innerText = categoryTitle.innerText.replace('▲', '▼'); // Change to '▼' (open state)
      } else {
          categoryTitle.innerText = categoryTitle.innerText.replace('▼', '▲'); // Change to '▲' (closed state)
      }
  });
});

// --- About Section: Read More Toggle ---
document.querySelector('.about').querySelector('h2')?.addEventListener('click', function () {
  const aboutSection = document.querySelector('.about p');  // Find the paragraph to expand
  const fullText = "Founded in 2020, Coffee was born out of a passion for quality coffee and a desire to create a space where people can connect, unwind, and enjoy life's simple pleasures. Our journey began with a single mission: to serve the best coffee, made from ethically sourced beans, roasted to perfection.";
  
  if (aboutSection.innerText.includes('...')) {
      aboutSection.innerText = fullText; // Show full text when 'Read More' clicked
  } else {
      aboutSection.innerText = fullText.substring(0, 150) + '...'; // Shorten text when 'Read Less' clicked
  }
});

// Optional: Menu Item Click for Prices (alert example)
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function () {
      const itemName = this.querySelector('h3').innerText;
      const price = this.querySelector('.price').innerText;
      alert(`You've selected: ${itemName} for ${price}`);
  });
});
