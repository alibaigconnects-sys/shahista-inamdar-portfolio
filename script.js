/**
 * Shahista Inamdar - Portfolio Script
 * Handles smooth interactions, mobile menu, scroll spying, and contact feedback.
 */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  // 1. Mobile Menu Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          const icon = mobileToggle.querySelector('i');
          if (icon) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
          }
        }
      });
    });
  }

  // 2. Navbar Background on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Active Link Highlighting (Scroll Spy)
  const sections = document.querySelectorAll('section[id]');
  
  const highlightActiveNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      
      if (matchingLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchingLink.classList.add('active');
        } else {
          matchingLink.classList.remove('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightActiveNav);

  // 4. Contact Form Submission (Client Simulation)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = document.getElementById('submit-contact-btn');
      const originalText = submitBtn.innerHTML;
      
      // Temporary loading state
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending...</span>';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        if (formFeedback) {
          formFeedback.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been received. You can also reach Shahista directly on LinkedIn.';
          formFeedback.className = 'form-feedback success';
          
          contactForm.reset();
          
          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 6000);
        }
      }, 900);
    });
  }
});
