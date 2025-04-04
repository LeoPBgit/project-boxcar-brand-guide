// Project Boxcar Brand Guide Scripts - Modern Edition

document.addEventListener('DOMContentLoaded', function() {
  // Initialize tabs
  initTabs();
  
  // Initialize color code copy functionality
  initColorCopy();
  
  // Initialize interactive logo backgrounds
  initLogoBackgrounds();
  
  // Initialize code snippets copy functionality
  initCodeCopy();
  
  // Initialize mobile navigation
  initMobileNav();
  
  // Add active class to current section in navigation
  initActiveNavigation();
  
  // Initialize smooth scrolling for anchor links
  initSmoothScroll();
});

// Tab functionality with animation
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Get the target content ID from the data attribute
      const targetId = tab.getAttribute('data-target');
      
      if (!targetId) return;
      
      // Get the parent tabs container
      const tabsContainer = tab.closest('.tabs');
      
      // Get all tabs in this container
      const siblingTabs = tabsContainer.querySelectorAll('.tab');
      
      // Get all tab content related to these tabs
      const tabContents = document.querySelectorAll('.tab-content');
      
      // Find the target content
      const targetContent = document.getElementById(targetId);
      
      if (!targetContent) return;
      
      // Remove active class from all tabs in this container
      siblingTabs.forEach(t => t.classList.remove('active'));
      
      // Find all tab contents that are siblings of the target content
      const siblingContents = Array.from(tabContents).filter(content => {
        return content.parentElement === targetContent.parentElement;
      });
      
      // Remove active class from sibling contents
      siblingContents.forEach(c => {
        c.classList.remove('active');
        // Add a small delay before hiding to allow for animation
        setTimeout(() => {
          if (!c.classList.contains('active')) {
            c.style.display = 'none';
          }
        }, 300);
      });
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Show and add active class to target content
      targetContent.style.display = 'block';
      
      // Force a reflow before adding the active class for animation
      void targetContent.offsetWidth;
      
      // Add active class to target content
      setTimeout(() => {
        targetContent.classList.add('active');
      }, 10);
    });
  });
}

// Color code copy functionality with enhanced feedback
function initColorCopy() {
  const colorValues = document.querySelectorAll('.color-value');
  
  colorValues.forEach(value => {
    // Add a copy indicator
    const copyIndicator = document.createElement('span');
    copyIndicator.className = 'copy-indicator';
    copyIndicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    copyIndicator.style.marginLeft = '5px';
    copyIndicator.style.opacity = '0.5';
    copyIndicator.style.cursor = 'pointer';
    copyIndicator.style.display = 'none';
    
    value.appendChild(copyIndicator);
    
    // Show copy indicator on hover
    value.addEventListener('mouseenter', () => {
      copyIndicator.style.display = 'inline-block';
    });
    
    value.addEventListener('mouseleave', () => {
      if (!value.classList.contains('copying')) {
        copyIndicator.style.display = 'none';
      }
    });
    
    value.addEventListener('click', () => {
      const colorCode = value.textContent.trim();
      navigator.clipboard.writeText(colorCode)
        .then(() => {
          // Add copying class
          value.classList.add('copying');
          
          // Show copied message
          const originalText = copyIndicator.innerHTML;
          copyIndicator.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
          copyIndicator.style.color = '#00dbdb';
          copyIndicator.style.opacity = '1';
          
          // Add a subtle animation
          value.style.transform = 'translateY(-2px)';
          value.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
          
          // Reset after 2 seconds
          setTimeout(() => {
            copyIndicator.innerHTML = originalText;
            copyIndicator.style.color = '';
            copyIndicator.style.opacity = '0.5';
            value.style.transform = '';
            value.style.boxShadow = '';
            value.classList.remove('copying');
            
            if (!value.matches(':hover')) {
              copyIndicator.style.display = 'none';
            }
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });
}

// Interactive logo backgrounds with smooth transitions
function initLogoBackgrounds() {
  const backgroundToggles = document.querySelectorAll('.background-toggle');
  
  backgroundToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const logoPreview = toggle.closest('.logo-item').querySelector('.logo-preview');
      
      // Add transition class for smooth animation
      logoPreview.style.transition = 'background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease';
      
      // Toggle dark class
      logoPreview.classList.toggle('dark');
      
      // Update toggle text with animation
      if (logoPreview.classList.contains('dark')) {
        toggle.textContent = 'View on Light Background';
        toggle.classList.add('active');
      } else {
        toggle.textContent = 'View on Dark Background';
        toggle.classList.remove('active');
      }
      
      // Add a subtle animation to the logo
      logoPreview.style.transform = 'scale(1.02)';
      setTimeout(() => {
        logoPreview.style.transform = '';
      }, 300);
    });
  });
}

// Code snippet copy functionality with enhanced UI
function initCodeCopy() {
  const codeBlocks = document.querySelectorAll('.code-block');
  
  codeBlocks.forEach(block => {
    // Create copy button with icon
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
    block.appendChild(copyBtn);
    
    copyBtn.addEventListener('click', () => {
      const code = block.querySelector('code').textContent;
      navigator.clipboard.writeText(code)
        .then(() => {
          // Update button text and style
          copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
          copyBtn.style.backgroundColor = 'var(--primary-blue)';
          copyBtn.style.color = 'white';
          
          // Add a subtle animation to the code block
          block.style.boxShadow = 'var(--shadow-md)';
          
          // Reset after 2 seconds
          setTimeout(() => {
            copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy';
            copyBtn.style.backgroundColor = '';
            copyBtn.style.color = '';
            block.style.boxShadow = '';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });
}

// Mobile navigation with improved interaction
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const body = document.body;
  
  if (menuToggle && nav) {
    // Set initial display style for menu toggle
    menuToggle.style.display = 'none';
    
    // Check if we need to show the mobile menu toggle
    function checkMobileNav() {
      if (window.innerWidth <= 768) {
        menuToggle.style.display = 'flex';
      } else {
        menuToggle.style.display = 'none';
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
      }
    }
    
    // Run on load
    checkMobileNav();
    
    // Run on resize
    window.addEventListener('resize', checkMobileNav);
    
    // Toggle menu
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
      body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a nav item
    nav.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove('active');
          menuToggle.classList.remove('active');
          body.classList.remove('menu-open');
        }
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 768 && 
          nav.classList.contains('active') && 
          !nav.contains(e.target) && 
          !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });
  }
}

// Add active class to current section in navigation
function initActiveNavigation() {
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');
  
  function highlightNavItem() {
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }
  
  window.addEventListener('scroll', highlightNavItem);
  highlightNavItem(); // Run on load
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return; // Skip if it's just "#"
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Color contrast checker with enhanced validation and visualization
function checkContrast(color1, color2) {
  // Normalize hex colors
  function normalizeHex(hex) {
    // Remove hash if present
    hex = hex.replace(/^#/, '');
    
    // Convert 3-digit hex to 6-digit
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    
    // Add hash back
    return '#' + hex;
  }
  
  // Convert hex to RGB
  function hexToRgb(hex) {
    // Try standard hex format
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    }
    
    // Try shorthand hex format
    result = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(hex);
    
    if (result) {
      return {
        r: parseInt(result[1] + result[1], 16),
        g: parseInt(result[2] + result[2], 16),
        b: parseInt(result[3] + result[3], 16)
      };
    }
    
    return null;
  }
  
  // Calculate relative luminance
  function luminance(r, g, b) {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  
  // Normalize colors
  color1 = normalizeHex(color1);
  color2 = normalizeHex(color2);
  
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return null;
  
  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Initialize color contrast checker with enhanced UI
function initContrastChecker() {
  const contrastForm = document.getElementById('contrast-checker-form');
  const contrastResult = document.getElementById('contrast-result');
  const color1Input = document.getElementById('color1');
  const color2Input = document.getElementById('color2');
  
  if (contrastForm && color1Input && color2Input) {
    // Add color pickers
    color1Input.type = 'color';
    color2Input.type = 'color';
    
    // Create text inputs for hex values
    const color1Hex = document.createElement('input');
    color1Hex.type = 'text';
    color1Hex.className = 'form-input';
    color1Hex.value = color1Input.value;
    color1Hex.placeholder = '#RRGGBB';
    
    const color2Hex = document.createElement('input');
    color2Hex.type = 'text';
    color2Hex.className = 'form-input';
    color2Hex.value = color2Input.value;
    color2Hex.placeholder = '#RRGGBB';
    
    // Insert hex inputs after color pickers
    color1Input.parentNode.insertBefore(color1Hex, color1Input.nextSibling);
    color2Input.parentNode.insertBefore(color2Hex, color2Input.nextSibling);
    
    // Style color pickers
    color1Input.style.width = '50px';
    color1Input.style.height = '50px';
    color1Input.style.padding = '0';
    color1Input.style.border = 'none';
    color1Input.style.borderRadius = 'var(--border-radius-sm)';
    color1Input.style.cursor = 'pointer';
    
    color2Input.style.width = '50px';
    color2Input.style.height = '50px';
    color2Input.style.padding = '0';
    color2Input.style.border = 'none';
    color2Input.style.borderRadius = 'var(--border-radius-sm)';
    color2Input.style.cursor = 'pointer';
    
    // Sync color picker and hex input
    color1Input.addEventListener('input', () => {
      color1Hex.value = color1Input.value;
      updateContrastPreview();
    });
    
    color2Input.addEventListener('input', () => {
      color2Hex.value = color2Input.value;
      updateContrastPreview();
    });
    
    color1Hex.addEventListener('input', () => {
      // Validate hex format
      if (/^#?([a-f\d]{3}|[a-f\d]{6})$/i.test(color1Hex.value)) {
        let hex = color1Hex.value;
        if (!hex.startsWith('#')) {
          hex = '#' + hex;
          color1Hex.value = hex;
        }
        color1Input.value = hex;
        updateContrastPreview();
      }
    });
    
    color2Hex.addEventListener('input', () => {
      // Validate hex format
      if (/^#?([a-f\d]{3}|[a-f\d]{6})$/i.test(color2Hex.value)) {
        let hex = color2Hex.value;
        if (!hex.startsWith('#')) {
          hex = '#' + hex;
          color2Hex.value = hex;
        }
        color2Input.value = hex;
        updateContrastPreview();
      }
    });
    
    // Create a live preview
    const livePreview = document.createElement('div');
    livePreview.className = 'contrast-preview';
    livePreview.style.marginTop = 'var(--spacing-md)';
    livePreview.style.marginBottom = 'var(--spacing-md)';
    livePreview.style.borderRadius = 'var(--border-radius-md)';
    livePreview.style.overflow = 'hidden';
    livePreview.style.boxShadow = 'var(--shadow-sm)';
    
    // Insert live preview before the submit button
    contrastForm.insertBefore(livePreview, contrastForm.querySelector('button'));
    
    function updateContrastPreview() {
      const color1 = color1Input.value;
      const color2 = color2Input.value;
      
      livePreview.innerHTML = `
        <div style="background-color: ${color1}; color: ${color2}; padding: 2rem; text-align: center;">
          <span style="font-size: 1.5rem; font-weight: 500;">Sample Text</span><br>
          <span style="font-size: 1rem;">This is how your text will look</span>
        </div>
      `;
      
      const ratio = checkContrast(color1, color2);
      
      if (ratio) {
        const formattedRatio = ratio.toFixed(2);
        let assessment = '';
        let assessmentClass = '';
        
        if (ratio >= 7) {
          assessment = 'Excellent - AAA (Enhanced)';
          assessmentClass = 'excellent';
        } else if (ratio >= 4.5) {
          assessment = 'Good - AA (Standard)';
          assessmentClass = 'good';
        } else if (ratio >= 3) {
          assessment = 'Acceptable for Large Text Only';
          assessmentClass = 'acceptable';
        } else {
          assessment = 'Poor - Fails WCAG Guidelines';
          assessmentClass = 'poor';
        }
        
        livePreview.innerHTML += `
          <div style="padding: 1rem; background-color: #f5f5f5;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>Contrast Ratio: <strong>${formattedRatio}:1</strong></span>
              <span class="assessment ${assessmentClass}">${assessment}</span>
            </div>
          </div>
        `;
      }
    }
    
    // Initialize preview
    updateContrastPreview();
    
    // Form submission
    contrastForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const color1 = color1Input.value;
      const color2 = color2Input.value;
      
      const ratio = checkContrast(color1, color2);
      
      if (ratio) {
        const formattedRatio = ratio.toFixed(2);
        let assessment = '';
        let assessmentClass = '';
        
        if (ratio >= 7) {
          assessment = 'Excellent - AAA (Enhanced)';
          assessmentClass = 'excellent';
        } else if (ratio >= 4.5) {
          assessment = 'Good - AA (Standard)';
          assessmentClass = 'good';
        } else if (ratio >= 3) {
          assessment = 'Acceptable for Large Text Only';
          assessmentClass = 'acceptable';
        } else {
          assessment = 'Poor - Fails WCAG Guidelines';
          assessmentClass = 'poor';
        }
        
        contrastResult.innerHTML = `
          <div class="contrast-result-card">
            <div class="contrast-preview">
              <div style="background-color: ${color1}; color: ${color2}; padding: 2rem; text-align: center;">
                <span style="font-size: 1.5rem; font-weight: 500;">Sample Text</span><br>
                <span style="font-size: 1rem;">This is how your text will look</span>
              </div>
            </div>
            <div class="contrast-details">
              <div class="contrast-ratio">
                <span>Contrast Ratio</span>
                <strong>${formattedRatio}:1</strong>
              </div>
              <div class="contrast-assessment ${assessmentClass}">
                <span>Assessment</span>
                <strong>${assessment}</strong>
              </div>
            </div>
          </div>
        `;
      } else {
        contrastResult.innerHTML = '<p>Invalid color values. Please use hex format (#RRGGBB).</p>';
      }
    });
  }
}

// Typography tester with enhanced UI
function initTypographyTester() {
  const fontSelect = document.getElementById('font-select');
  const weightSelect = document.getElementById('weight-select');
  const sizeInput = document.getElementById('size-input');
  const sampleText = document.getElementById('typography-sample-text');
  
  if (fontSelect && weightSelect && sizeInput && sampleText) {
    // Add a range slider for font size
    const sizeSlider = document.createElement('input');
    sizeSlider.type = 'range';
    sizeSlider.min = '8';
    sizeSlider.max = '72';
    sizeSlider.value = sizeInput.value;
    sizeSlider.className = 'size-slider';
    sizeSlider.style.width = '100%';
    sizeSlider.style.marginTop = '10px';
    
    // Insert slider after size input
    sizeInput.parentNode.appendChild(sizeSlider);
    
    // Sync slider and input
    sizeSlider.addEventListener('input', () => {
      sizeInput.value = sizeSlider.value;
      updateTypographySample();
    });
    
    sizeInput.addEventListener('input', () => {
      sizeSlider.value = sizeInput.value;
      updateTypographySample();
    });
    
    // Update sample text when inputs change
    [fontSelect, weightSelect].forEach(input => {
      input.addEventListener('change', updateTypographySample);
    });
    
    function updateTypographySample() {
      const font = fontSelect.value;
      const weight = weightSelect.value;
      const size = sizeInput.value;
      
      // Add transition for smooth changes
      sampleText.style.transition = 'all 0.3s ease';
      
      // Update styles
      sampleText.style.fontFamily = font;
      sampleText.style.fontWeight = weight;
      sampleText.style.fontSize = `${size}px`;
      
      // Update code snippet
      const codeSnippet = document.getElementById('typography-code-snippet');
      if (codeSnippet) {
        codeSnippet.textContent = `font-family: ${font};\nfont-weight: ${weight};\nfont-size: ${size}px;`;
      }
      
      // Add a subtle animation
      sampleText.style.transform = 'scale(1.02)';
      setTimeout(() => {
        sampleText.style.transform = '';
      }, 300);
    }
    
    // Initialize with default values
    updateTypographySample();
  }
}

// Initialize all interactive elements when DOM is fully loaded
window.addEventListener('load', function() {
  initContrastChecker();
  initTypographyTester();
});
