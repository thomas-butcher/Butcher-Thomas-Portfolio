/* ============================================================
   SMOOTH SCROLLING & NAVIGATION
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for valid section links
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                
                const target = document.querySelector(href);
                const offsetTop = target.offsetTop - 80; // Account for sticky header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close navigation on mobile after clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Could add mobile menu toggle logic here if needed
        });
    });
});


/* ============================================================
   ACCESSIBILITY ENHANCEMENTS
   ============================================================ */

// Ensure all interactive elements are keyboard accessible
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn, .nav-link, .project-link, .contact-link');
    
    buttons.forEach(button => {
        // Ensure they are focusable
        if (!button.hasAttribute('tabindex')) {
            button.tabIndex = 0;
        }
    });
});
