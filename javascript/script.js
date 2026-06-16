  const fills = document.querySelectorAll('.skill-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        el.style.width = el.dataset.width + '%';
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.2 });
  fills.forEach(f => {
    f.style.transition = 'width 1s cubic-bezier(0.4,0,0.2,1)';
    observer.observe(f);
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });