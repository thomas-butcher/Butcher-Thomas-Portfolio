/* ============================================================
   DARK MODE TOGGLE
   ============================================================ */

(function () {
    const root = document.documentElement;
    const STORAGE_KEY = 'theme';
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    // Apply saved theme immediately to keep UI in sync with preference.
    if (savedTheme === 'dark') {
        root.setAttribute('data-theme', 'dark');
    }

    document.addEventListener('DOMContentLoaded', function () {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        function applyTheme(isDark) {
            if (isDark) {
                root.setAttribute('data-theme', 'dark');
                toggleBtn.textContent = 'Light Mode';
                toggleBtn.setAttribute('aria-label', 'Switch to light mode');
                localStorage.setItem(STORAGE_KEY, 'dark');
            } else {
                root.removeAttribute('data-theme');
                toggleBtn.textContent = 'Dark Mode';
                toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
                localStorage.setItem(STORAGE_KEY, 'light');
            }
        }

        applyTheme(root.getAttribute('data-theme') === 'dark');

        toggleBtn.addEventListener('click', function () {
            applyTheme(root.getAttribute('data-theme') !== 'dark');
        });
    });
}());
