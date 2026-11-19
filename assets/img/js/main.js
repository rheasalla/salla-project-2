(() => {
  'use strict';

  const nav = document.querySelector('#navmenu');
  const toggle = document.querySelector('.mobile-nav-toggle');

  toggle?.addEventListener('click', () => {
    const open = nav?.classList.toggle('mobile-open');
    toggle.classList.toggle('bi-list', !open);
    toggle.classList.toggle('bi-x-lg', Boolean(open));
    toggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      toggle?.classList.add('bi-list');
      toggle?.classList.remove('bi-x-lg');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const scrollTop = document.querySelector('.scroll-top');
  const onScroll = () => scrollTop?.classList.toggle('active', window.scrollY > 480);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  scrollTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  document.querySelectorAll('.email-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.querySelector('.sent-message')?.classList.add('show');
      form.reset();
    });
  });

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
