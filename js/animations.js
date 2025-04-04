// Project Boxcar Brand Guide Animations - Modern Edition

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize GSAP animations if GSAP is available
  if (typeof gsap !== 'undefined') {
    initGSAP();
  }
  
  // Initialize interactive animations
  initInteractiveAnimations();
  
  // Initialize scroll-based animations
  initScrollAnimations();
});

// Initialize GSAP animations with modern approach
function initGSAP() {
  // Register ScrollTrigger plugin if available
  if (gsap.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
  
  // Subtle hero section animations
  animateHero();
  
  // Animate sections on scroll with subtle effects
  animateSectionsOnScroll();
  
  // Animate UI components with subtle effects
  animateUIComponents();
}

// Hero section animations - subtle and purposeful
function animateHero() {
  if (typeof gsap === 'undefined') return;
  
  const heroContent = document.querySelector('.hero-content');
  if (!heroContent) return;
  
  // Subtle fade-in and slide-up for hero content
  gsap.from(heroContent, {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "power3.out",
    delay: 0.2
  });
  
  // Subtle gradient animation for hero background
  const hero = document.querySelector('.hero');
  if (hero) {
    gsap.to(hero, {
      backgroundPosition: '100% 50%',
      duration: 15,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }
}

// Animate sections on scroll with subtle effects
function animateSectionsOnScroll() {
  if (typeof gsap === 'undefined' || !gsap.ScrollTrigger) return;
  
  // Animate section titles on scroll
  gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      duration: 0.8,
      y: 20,
      opacity: 0,
      ease: "power3.out"
    });
  });
  
  // Animate tab content when it becomes active
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      if (!targetId) return;
      
      const targetContent = document.getElementById(targetId);
      if (!targetContent) return;
      
      // Get all elements inside the tab content
      const elements = targetContent.querySelectorAll('.color-item, .logo-item, .component-item, .typography-sample');
      
      // Stagger animation for elements
      gsap.from(elements, {
        duration: 0.5,
        y: 20,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.out",
        delay: 0.2
      });
    });
  });
}

// Animate UI components with subtle effects
function animateUIComponents() {
  if (typeof gsap === 'undefined') return;
  
  // Add ripple effect to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('ripple');
    
    // Add hover animation
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        duration: 0.3,
        y: -3,
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
        ease: "power2.out"
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        duration: 0.3,
        y: 0,
        boxShadow: '',
        ease: "power2.out"
      });
    });
  });
  
  // Add subtle hover animation to cards
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -5,
        boxShadow: 'var(--shadow-lg)',
        ease: "power2.out"
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: 'var(--shadow-md)',
        ease: "power2.out"
      });
    });
  });
}

// Initialize interactive animations - modern approach
function initInteractiveAnimations() {
  // Add hover effects to color items
  document.querySelectorAll('.color-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(item, {
          duration: 0.3,
          y: -10,
          boxShadow: 'var(--shadow-lg)',
          ease: "power2.out"
        });
      } else {
        // Fallback if GSAP is not available
        item.style.transform = 'translateY(-10px)';
        item.style.boxShadow = 'var(--shadow-lg)';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(item, {
          duration: 0.3,
          y: 0,
          boxShadow: 'var(--shadow-md)',
          ease: "power2.out"
        });
      } else {
        // Fallback if GSAP is not available
        item.style.transform = '';
        item.style.boxShadow = '';
      }
    });
  });
  
  // Add hover effects to component items
  document.querySelectorAll('.component-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(item, {
          duration: 0.3,
          y: -5,
          scale: 1.02,
          boxShadow: 'var(--shadow-lg)',
          ease: "power2.out"
        });
      } else {
        // Fallback if GSAP is not available
        item.style.transform = 'translateY(-5px) scale(1.02)';
        item.style.boxShadow = 'var(--shadow-lg)';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(item, {
          duration: 0.3,
          y: 0,
          scale: 1,
          boxShadow: 'var(--shadow-md)',
          ease: "power2.out"
        });
      } else {
        // Fallback if GSAP is not available
        item.style.transform = '';
        item.style.boxShadow = '';
      }
    });
  });
  
  // Add click effects to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof gsap !== 'undefined') {
        gsap.to(btn, {
          duration: 0.1,
          scale: 0.95,
          ease: "power2.out",
          onComplete: () => {
            gsap.to(btn, {
              duration: 0.2,
              scale: 1,
              ease: "power2.out"
            });
          }
        });
      }
    });
  });
}

// Initialize scroll-based animations
function initScrollAnimations() {
  // Animate elements when they come into view
  const animateOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  };
  
  // Create the observer
  const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  // Elements to animate on scroll
  const elements = document.querySelectorAll('.color-grid, .logo-grid, .component-grid, .typography-sample');
  
  // Add fade-in class and observe elements
  elements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
  
  // Add CSS for fade-in animation
  const style = document.createElement('style');
  style.textContent = `
    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.in-view {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
}
