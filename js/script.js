document.querySelectorAll('.acc-trigger').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.acc-item').forEach((el) => {
      el.classList.remove('open');
      const chev = el.querySelector('.chev');
      if (chev) chev.textContent = '⌄';
    });
    if (!isOpen) {
      item.classList.add('open');
      const chev = item.querySelector('.chev');
      if (chev) chev.textContent = '⌃';
    }
  });
});
