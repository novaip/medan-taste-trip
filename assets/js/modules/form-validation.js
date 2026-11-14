/**
 * Form Validation & Submission State Handling
 */
export function initFormValidation() {
  const form = document.getElementById('collab-form');
  if (!form) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const successState = document.getElementById('form-success-state');
  const btnOriginalText = submitBtn ? submitBtn.innerHTML : 'Kirim Penawaran Kolaborasi';

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function setError(inputElement, errorElement, message) {
    inputElement.classList.add('border-red-500', 'focus:ring-red-400');
    inputElement.classList.remove('border-gray-200', 'focus:ring-brand-primary');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove('hidden');
    }
  }

  function clearError(inputElement, errorElement) {
    inputElement.classList.remove('border-red-500', 'focus:ring-red-400');
    inputElement.classList.add('border-gray-200', 'focus:ring-brand-primary');
    if (errorElement) {
      errorElement.textContent = '';
      errorElement.classList.add('hidden');
    }
  }

  // Setup input change clears
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const err = form.querySelector(`#error-${input.name}`);
      clearError(input, err);
    });
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;

    // 1. Brand/PIC Name
    const nameInput = form.querySelector('[name="brand_name"]');
    const nameErr = form.querySelector('#error-brand_name');
    if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
      setError(nameInput, nameErr, 'Nama Brand atau PIC wajib diisi (minimal 3 karakter).');
      isValid = false;
    } else {
      clearError(nameInput, nameErr);
    }

    // 2. Email
    const emailInput = form.querySelector('[name="email"]');
    const emailErr = form.querySelector('#error-email');
    if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
      setError(emailInput, emailErr, 'Harap masukkan alamat email bisnis yang valid.');
      isValid = false;
    } else {
      clearError(emailInput, emailErr);
    }

    // 3. Service Category
    const serviceSelect = form.querySelector('[name="collab_type"]');
    const serviceErr = form.querySelector('#error-collab_type');
    if (!serviceSelect.value) {
      setError(serviceSelect, serviceErr, 'Silakan pilih paket kolaborasi yang diinginkan.');
      isValid = false;
    } else {
      clearError(serviceSelect, serviceErr);
    }

    // 4. Notes / Brief
    const messageInput = form.querySelector('[name="message"]');
    const messageErr = form.querySelector('#error-message');
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setError(messageInput, messageErr, 'Harap tuliskan deskripsi singkat atau rencana campaign (minimal 10 karakter).');
      isValid = false;
    } else {
      clearError(messageInput, messageErr);
    }

    if (!isValid) return;

    // Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        Mengirim Penawaran...
      `;
    }

    // Simulate / Trigger async sending (or hook into Formspree/Cloudflare Worker)
    try {
      // In production, user can replace this with actual fetch to Formspree or Cloudflare Worker endpoint
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Show success state
      form.classList.add('hidden');
      if (successState) {
        successState.classList.remove('hidden');
      }
      form.reset();
    } catch (err) {
      alert('Maaf, terjadi kendala saat mengirim pesan. Silakan hubungi kami via WhatsApp atau Email langsung.');
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = btnOriginalText;
      }
    }
  });

  // Reset button on success card to submit another proposal
  const sendAnotherBtn = document.getElementById('btn-send-another');
  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
      if (successState) successState.classList.add('hidden');
      form.classList.remove('hidden');
    });
  }
}
