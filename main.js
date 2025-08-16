const mobileMenu = document.getElementById('mobile-menu');
    const navMain = document.getElementById('nav-main');
    
    mobileMenu.addEventListener('click', () => {
      navMain.classList.toggle('active');
      navAuth.classList.toggle('active');
    });


     const mobilemenu = document.getElementsByClassName('mobile-menu');

  mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });


  const toggleButtons = document.querySelectorAll('.toggle-btn');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.parentElement.nextElementSibling;

      if (content.style.display === 'block') {
        content.style.display = 'none';
        button.textContent = '+';
      } else {
        content.style.display = 'block';
        button.textContent = '−';
      }
    });
  });
