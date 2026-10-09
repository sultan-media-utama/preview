document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  const counters = document.querySelectorAll('[data-count]');

  const formatValue = (value, target) => {
    if (target === 2.8) return `${value.toFixed(1)}x`;
    if (target === 11) return `${Math.round(value)}h`;
    if (target === 99.2) return `${value.toFixed(1)}%`;
    return `${Math.round(value)}`;
  };

  const animateCounter = (element) => {
    const target = Number(element.dataset.count);
    const duration = 1200;
    const start = performance.now();

    const update = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;

      element.textContent = formatValue(value, target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = formatValue(target, target);
      }
    };

    requestAnimationFrame(update);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => observer.observe(counter));
  } else {
    counters.forEach((counter) => {
      counter.textContent = formatValue(Number(counter.dataset.count), Number(counter.dataset.count));
    });
  }
});
