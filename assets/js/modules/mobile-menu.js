/**
 * Mobile Drawer Menu Navigation
 * Accessible, smooth slide-in, ESC-key dismissable, scroll-locking
 */
export function initMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuOverlay = document.getElementById('menu-overlay');
  const closeBtn = document.getElementById('close-menu-btn');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!menuToggle || !mobileDrawer || !menuOverlay) return;

  function openMenu() {
    mobileDrawer.classList.remove('translate-x-full');
    menuOverlay.classList.remove('hidden');
    // slight delay for overlay opacity transition
    requestAnimationFrame(() => {
      menuOverlay.classList.remove('opacity-0');
      menuOverlay.classList.add('opacity-100');
    });
    document.body.classList.add('overflow-hidden');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileDrawer.classList.add('translate-x-full');
    menuOverlay.classList.remove('opacity-100');
    menuOverlay.classList.add('opacity-0');
    setTimeout(() => {
      menuOverlay.classList.add('hidden');
    }, 300);
    document.body.classList.remove('overflow-hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  menuOverlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      closeMenu();
    }
  });
}
