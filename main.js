
  document.querySelectorAll('.explore-btn').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault(); 
      const target = btn.getAttribute('href');
      // Smooth scroll to anchor (if section `id="drywall"`)
      if (target.startsWith('#')) {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = target; // Default
      }
    });
  });

