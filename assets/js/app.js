document.getElementById('hero-image').addEventListener('click', () => {
    // Цель прокрутки — первый блок с товарами (например, секция hot-products)
    const targetSection = document.getElementById('search-scroll');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
console.log("modal");