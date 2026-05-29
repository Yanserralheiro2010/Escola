(() => {

  // YEAR
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // MODAL
  const modal = document.getElementById('imgModal');

  const modalImg = document.querySelector('[data-modal-img-big]');

  const modalCaption = document.querySelector('[data-modal-caption]');

  const closeBtn = document.querySelector('[data-modal-close]');

  const backdrop = document.querySelector('[data-modal-backdrop]');

  function openModal(src, caption) {

    modal.setAttribute('data-modal-open', 'true');

    modal.setAttribute('aria-hidden', 'false');

    modalImg.src = src;

    modalCaption.textContent = caption;

    document.body.style.overflow = 'hidden';
  }

  function closeModal() {

    modal.setAttribute('data-modal-open', 'false');

    modal.setAttribute('aria-hidden', 'true');

    modalImg.src = '';

    modalCaption.textContent = '';

    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-modal-img]').forEach((btn) => {

    btn.addEventListener('click', () => {

      const img = btn.querySelector('img');

      const caption = btn.querySelector('.gallery__cap')?.textContent;

      if (!img) return;

      openModal(img.src, caption);
    });
  });

  closeBtn?.addEventListener('click', closeModal);

  backdrop?.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {

    if (e.key === 'Escape') {
      closeModal();
    }
  });

})();

