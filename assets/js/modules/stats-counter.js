/**
 * Count-Up Numbers using IntersectionObserver for Key Metrics
 */
export function initStatsCounter() {
  const statElements = document.querySelectorAll('[data-counter-target]');
  if (statElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => observer.observe(el));

  function animateCounter(element) {
    const rawTarget = element.getAttribute('data-counter-target');
    const suffix = element.getAttribute('data-counter-suffix') || '';
    const prefix = element.getAttribute('data-counter-prefix') || '';
    const isFloat = rawTarget.includes('.');
    const targetValue = parseFloat(rawTarget);
    const duration = 1600; // ms
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // EaseOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = isFloat 
        ? (ease * targetValue).toFixed(1)
        : Math.floor(ease * targetValue);

      element.textContent = `${prefix}${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      } else {
        element.textContent = `${prefix}${targetValue}${suffix}`;
      }
    }

    requestAnimationFrame(updateNumber);
  }
}
