/**
 * Copy Email with Animated Floating Toast Feedback
 */
export function initCopyEmail() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toast-notification');
  const toastMsg = document.getElementById('toast-message');
  let toastTimeout;

  if (copyButtons.length === 0) return;

  function showToast(message, isError = false) {
    if (!toast) return;

    if (toastMsg) {
      toastMsg.textContent = message;
    }

    if (isError) {
      toast.classList.remove('bg-brand-dark', 'text-white');
      toast.classList.add('bg-red-600', 'text-white');
    } else {
      toast.classList.remove('bg-red-600');
      toast.classList.add('bg-brand-dark', 'text-white');
    }

    toast.classList.remove('hidden');
    // Trigger transition
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 350);
    }, 3200);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'kerjasama@medanfoodtravel.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
          showToast(`✓ Email ${email} berhasil disalin!`);
        } else {
          // Fallback for older browsers/insecure contexts
          const textArea = document.createElement('textarea');
          textArea.value = email;
          textArea.style.position = 'fixed';
          textArea.style.left = '-999999px';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
          showToast(`✓ Email ${email} berhasil disalin!`);
        }
      } catch (err) {
        showToast(`Gagal menyalin email. Silakan hubungi: ${email}`, true);
      }
    });
  });
}
