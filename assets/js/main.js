// Simple enhancements for the Code 82 landing page
(function () {
  // Update footer year
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Activate Bootstrap scrollspy after load
  const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach(function (dataSpyEl) {
    bootstrap.ScrollSpy.getInstance(dataSpyEl) || new bootstrap.ScrollSpy(dataSpyEl);
  });

  // Navbar scrolled state
  const nav = document.getElementById('mainNav');
  const onScroll = () => {
    if (!nav) return;
    const scrolled = (window.scrollY || window.pageYOffset) > 8;
    nav.classList.toggle('scrolled', scrolled);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();