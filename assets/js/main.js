/**
 * CSS Layout Tester - Shared JavaScript Utilities
 * Common functions and i18n for both Flexbox and Grid testers
 */

// i18n Setup
let currentLocale = localStorage.getItem('locale') || 'en';

async function loadTranslations(locale) {
    try {
        // Use path relative to the HTML page location
        const basePath = new URL('.', document.baseURI).href;
        await fetch(`${basePath}locales/${locale}.json`);
        const langBtn = document.getElementById('current-lang');
        if (langBtn) {
            langBtn.textContent = locale.toUpperCase();
        }
    } catch (e) {
        console.error('Failed to load translations:', e);
    }
}

window.setLanguage = function (locale) {
    currentLocale = locale;
    localStorage.setItem('locale', locale);
    loadTranslations(locale);
};

// Initialize i18n
loadTranslations(currentLocale);

// Modal utilities
window.openModal = function (property, title, content) {
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const modal = document.getElementById('info-modal');
    const backdrop = document.getElementById('modal-backdrop');

    if (modalTitle) modalTitle.textContent = title;
    if (modalContent) modalContent.innerHTML = content;
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    if (backdrop) backdrop.classList.remove('hidden');
};

window.closeModal = function () {
    const modal = document.getElementById('info-modal');
    const backdrop = document.getElementById('modal-backdrop');

    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
    if (backdrop) backdrop.classList.add('hidden');
};

// Copy to clipboard utility
window.copyToClipboard = function (elementId, buttonId) {
    const element = document.getElementById(elementId);
    const button = document.getElementById(buttonId);

    if (element && navigator.clipboard) {
        navigator.clipboard.writeText(element.textContent).then(() => {
            if (button) {
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = originalText;
                }, 2000);
            }
        });
    }
};
