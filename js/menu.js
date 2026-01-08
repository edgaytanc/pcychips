document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        // Small delay to allow display:block to apply before opacity transition
        if (!mobileMenu.classList.contains('hidden')) {
            setTimeout(() => {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
            }, 10);
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        }
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMenu);
    }

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', () => {
            // Add opacity classes first
            mobileMenu.classList.add('opacity-0', 'pointer-events-none');
            // Wait for transition to finish before hiding
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300); // Matches duration-300
        });
    }

    // Close menu when clicking outside (optional but good UX)
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenuBtn.click(); // Re-use toggle logic or just close
        }
    });
});
