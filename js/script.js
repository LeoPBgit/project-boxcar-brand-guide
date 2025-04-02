// Project Boxcar Brand Guide Scripts

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
});

// Tab functionality
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Get the target content ID from the data attribute
      const targetId = tab.getAttribute('data-target');
      
      // Remove active class from all tabs and content
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      
      // Add active class to clicked tab and its content
      tab.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });
}

// Color code copy functionality
function initColorCopy() {
  const colorValues = document.querySelectorAll('.color-value');
  
  colorValues.forEach(value => {
    value.addEventListener('click', () => {
      const colorCode = value.textContent;
      navigator.clipboard.writeText(colorCode)
        .then(() => {
          // Show copied message
          const originalText = value.textContent;
          value.textContent = 'Copied!';
          
          // Reset after 2 seconds
          setTimeout(() => {
            value.textContent = originalText;
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });
}

// Interactive logo backgrounds
function initLogoBackgrounds() {
  const backgroundToggles = document.querySelectorAll('.background-toggle');
  
  backgroundToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const logoPreview = toggle.closest('.logo-item').querySelector('.logo-preview');
      logoPreview.classList.toggle('dark');
      
      // Update toggle text
      if (logoPreview.classList.contains('dark')) {
        toggle.textContent = 'View on Light Background';
      } else {
        toggle.textContent = 'View on Dark Background';
      }
    });
  });
}

// Code snippet copy functionality
function initCodeCopy() {
  const codeBlocks = document.querySelectorAll('.code-block');
  
  codeBlocks.forEach(block => {
    // Create copy button
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.textContent = 'Copy';
    block.appendChild(copyBtn);
    
    copyBtn.addEventListener('click', () => {
      const code = block.querySelector('code').textContent;
      navigator.clipboard.writeText(code)
        .then(() => {
          copyBtn.textContent = 'Copied!';
          setTimeout(() => {
            copyBtn.textContent = 'Copy';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });
  });
}

// Mobile navigation
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  }
}

// Color contrast checker
function checkContrast(color1, color2) {
  // Convert hex to RGB
  function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
  
  // Calculate relative luminance
  function luminance(r, g, b) {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }
  
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return null;
  
  const lum1 = luminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = luminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

// Initialize color contrast checker
function initContrastChecker() {
  const contrastForm = document.getElementById('contrast-checker-form');
  const contrastResult = document.getElementById('contrast-result');
  
  if (contrastForm) {
    contrastForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const color1 = document.getElementById('color1').value;
      const color2 = document.getElementById('color2').value;
      
      const ratio = checkContrast(color1, color2);
      
      if (ratio) {
        const formattedRatio = ratio.toFixed(2);
        let assessment = '';
        
        if (ratio >= 7) {
          assessment = 'Excellent - AAA (Enhanced)';
        } else if (ratio >= 4.5) {
          assessment = 'Good - AA (Standard)';
        } else if (ratio >= 3) {
          assessment = 'Acceptable for Large Text Only';
        } else {
          assessment = 'Poor - Fails WCAG Guidelines';
        }
        
        contrastResult.innerHTML = `
          <div class="contrast-preview">
            <div style="background-color: ${color1}; color: ${color2}; padding: 1rem;">
              Sample Text
            </div>
          </div>
          <p>Contrast Ratio: ${formattedRatio}:1</p>
          <p>Assessment: ${assessment}</p>
        `;
      } else {
        contrastResult.innerHTML = '<p>Invalid color values. Please use hex format (#RRGGBB).</p>';
      }
    });
  }
}

// Typography tester
function initTypographyTester() {
  const fontSelect = document.getElementById('font-select');
  const weightSelect = document.getElementById('weight-select');
  const sizeInput = document.getElementById('size-input');
  const sampleText = document.getElementById('typography-sample-text');
  
  if (fontSelect && weightSelect && sizeInput && sampleText) {
    // Update sample text when inputs change
    [fontSelect, weightSelect, sizeInput].forEach(input => {
      input.addEventListener('change', updateTypographySample);
    });
    
    function updateTypographySample() {
      const font = fontSelect.value;
      const weight = weightSelect.value;
      const size = sizeInput.value;
      
      sampleText.style.fontFamily = font;
      sampleText.style.fontWeight = weight;
      sampleText.style.fontSize = `${size}px`;
      
      // Update code snippet
      const codeSnippet = document.getElementById('typography-code-snippet');
      if (codeSnippet) {
        codeSnippet.textContent = `font-family: ${font};\nfont-weight: ${weight};\nfont-size: ${size}px;`;
      }
    }
    
    // Initialize with default values
    updateTypographySample();
  }
}

// Initialize all interactive elements when DOM is fully loaded
window.addEventListener('load', function() {
  initContrastChecker();
  initTypographyTester();
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
});
