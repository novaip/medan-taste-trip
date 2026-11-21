/**
 * Main Entry Script for Medan Food & Travel Media Kit Landing Page
 */
import { initMobileMenu } from './modules/mobile-menu.js';
import { initCopyEmail } from './modules/copy-email.js';
import { initFormValidation } from './modules/form-validation.js';
import { initStatsCounter } from './modules/stats-counter.js';
import { initAIChat } from './modules/ai-chat.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCopyEmail();
  initFormValidation();
  initStatsCounter();
  initAIChat();

  // Dynamic Year in footer
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
});
