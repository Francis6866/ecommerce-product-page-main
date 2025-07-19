const toggleBtn = document.querySelector('.header__toggle-btn');
const closeBtn = document.querySelector('.mobile-menu__close-btn');
const mobileMenu = document.querySelector('.mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});


// Close menu when a link is clicked (mobile only)
document.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  
// Highlight active link based on current page path
function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop(); // e.g., 'men.html'
  
    document.querySelectorAll('.nav__link, .mobile-menu__link').forEach(link => {
      const linkPath = link.getAttribute('href');
  
      const isActive = linkPath === currentPath || (currentPath === '' && linkPath === 'index.html');
  
      if (link.classList.contains('nav__link')) {
        link.classList.toggle('nav__link--active', isActive);
      } else if (link.classList.contains('mobile-menu__link')) {
        link.classList.toggle('mobile-menu__link--active', isActive);
      }
    });
  }
  
  window.addEventListener('load', highlightActiveLink);