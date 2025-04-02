// Project Boxcar Brand Guide Animations

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize GSAP animations
  initGSAP();
  
  // Initialize particle background
  initParticles();
  
  // Initialize interactive animations
  initInteractiveAnimations();
  
  // Add animated classes to elements
  addAnimatedClasses();
});

// Initialize GSAP animations
function initGSAP() {
  // Check if GSAP is loaded
  if (typeof gsap === 'undefined') {
    console.error('GSAP is not loaded. Make sure to include the GSAP library.');
    return;
  }
  
  // Register ScrollTrigger plugin if available
  if (gsap.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }
  
  // Hero section animations
  animateHero();
  
  // Animate sections on scroll
  animateSectionsOnScroll();
  
  // Animate logo
  animateLogo();
  
  // Animate color palette
  animateColorPalette();
  
  // Animate typography
  animateTypography();
  
  // Animate UI components
  animateUIComponents();
}

// Hero section animations
function animateHero() {
  // We're removing automatic animations for the hero section
  // The hero will now only have hover/interaction animations
}

// Create typing effect - removed as it's an automatic animation
function createTypingEffect(element) {
  // Function kept for reference but no longer used
}

// Animate sections on scroll - disabled to avoid automatic animations
function animateSectionsOnScroll() {
  // Removed scroll-triggered animations to avoid movement that might skew assets
  // This function is kept for reference but no longer adds scroll animations
}

// Animate logo
function animateLogo() {
  // Add animated class to logo previews for hover effects only
  document.querySelectorAll('.logo-preview').forEach(logo => {
    logo.classList.add('animated');
  });
  
  // Removed continuous rotation animation for the logo
}

// Animate color palette
function animateColorPalette() {
  // Add animated class to color previews
  document.querySelectorAll('.color-preview').forEach(preview => {
    preview.classList.add('animated');
  });
  
  // Animate color values on hover
  document.querySelectorAll('.color-value').forEach(value => {
    value.addEventListener('mouseenter', () => {
      gsap.to(value, {
        duration: 0.3,
        scale: 1.1,
        color: '#00dbdb',
        ease: "power2.out"
      });
    });
    
    value.addEventListener('mouseleave', () => {
      gsap.to(value, {
        duration: 0.3,
        scale: 1,
        color: '',
        ease: "power2.out"
      });
    });
  });
}

// Animate typography
function animateTypography() {
  // Add animated class to font samples
  document.querySelectorAll('.font-sample').forEach(sample => {
    sample.classList.add('animated');
  });
  
  // Animate typography tester
  const typographySample = document.getElementById('typography-sample-text');
  if (typographySample) {
    const fontSelect = document.getElementById('font-select');
    const weightSelect = document.getElementById('weight-select');
    const sizeInput = document.getElementById('size-input');
    
    [fontSelect, weightSelect, sizeInput].forEach(input => {
      if (input) {
        input.addEventListener('change', () => {
          gsap.from(typographySample, {
            duration: 0.5,
            opacity: 0.5,
            scale: 0.95,
            ease: "power2.out"
          });
        });
      }
    });
  }
}

// Animate UI components
function animateUIComponents() {
  // Add animated class to buttons
  document.querySelectorAll('.btn').forEach(btn => {
    btn.classList.add('animated');
    btn.classList.add('ripple');
  });
  
  // Add animated class to tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.add('animated');
  });
  
  // Add subtle hover animation to cards instead of flip
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('card-hover');
  });
  
  // Add subtle hover animation to logo items
  document.querySelectorAll('.logo-preview').forEach(logo => {
    // Remove the 3D transform effect
    logo.classList.remove('animated');
    
    // Add a subtle shadow and scale effect on hover
    logo.style.transition = 'all 0.3s ease';
    
    logo.addEventListener('mouseenter', () => {
      gsap.to(logo, {
        duration: 0.3,
        scale: 1.03,
        boxShadow: '0 5px 15px rgba(0, 162, 229, 0.15)',
        ease: "power2.out"
      });
    });
    
    logo.addEventListener('mouseleave', () => {
      gsap.to(logo, {
        duration: 0.3,
        scale: 1,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        ease: "power2.out"
      });
    });
  });
}

// Initialize particle background - disabled to avoid continuous animations
function initParticles() {
  // Particles disabled to avoid continuous animations that might skew assets
  // This function is kept for reference but no longer creates particles
}

// Initialize interactive animations
function initInteractiveAnimations() {
  // Add hover animations to elements
  addHoverAnimations();
  
  // Add click animations
  addClickAnimations();
  
  // Add scroll animations
  addScrollAnimations();
}

// Add hover animations
function addHoverAnimations() {
  // Add hover-scale to color items
  document.querySelectorAll('.color-item').forEach(item => {
    item.classList.add('hover-scale');
  });
  
  // Remove hover-3d from logo items and add subtle hover effect
  document.querySelectorAll('.logo-item').forEach(item => {
    // Remove 3D effect class if it exists
    item.classList.remove('hover-3d');
    
    // Add our new subtle hover class defined in CSS
    // This will add a subtle background color change and shadow
  });
  
  // Add hover-glow to buttons
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.classList.add('hover-glow');
  });
  
  // Replace hover-bounce with a more subtle effect for component items
  document.querySelectorAll('.component-item').forEach(item => {
    item.classList.remove('hover-bounce');
    item.classList.add('hover-scale');
    
    // Reduce the scale amount for a more subtle effect
    item.addEventListener('mouseenter', () => {
      gsap.to(item, {
        duration: 0.3,
        scale: 1.03,
        y: -3,
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
        ease: "power2.out"
      });
    });
    
    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        duration: 0.3,
        scale: 1,
        y: 0,
        boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
        ease: "power2.out"
      });
    });
  });
}

// Add click animations
function addClickAnimations() {
  // Add click animation to tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      gsap.from(tab, {
        duration: 0.3,
        scale: 0.95,
        ease: "power2.out"
      });
    });
  });
}

// Add scroll animations
function addScrollAnimations() {
  // Removed parallax effect for hero section to avoid continuous animations
  // No scroll animations are added here anymore
}

// Add animated classes to elements
function addAnimatedClasses() {
  // We're removing automatic animations and keeping only interaction-based ones
  // No automatic classes are added here anymore
}
