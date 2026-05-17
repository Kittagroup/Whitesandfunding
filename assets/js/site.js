(function () {
  'use strict';

  // Remove no-js fallback class so .reveal animations can run
  document.documentElement.classList.remove('no-js');

  // ===== Mobile menu =====
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menuBtn.setAttribute(
        'aria-expanded',
        menu.classList.contains('hidden') ? 'false' : 'true'
      );
    });
    // Auto-close after a nav link is tapped
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ===== Nav shadow on scroll =====
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('nav-scrolled');
      else nav.classList.remove('nav-scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===== Scroll reveal =====
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) =>
      revealObserver.observe(el)
    );
  } else {
    // Old browser fallback
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in'));
  }
})();
