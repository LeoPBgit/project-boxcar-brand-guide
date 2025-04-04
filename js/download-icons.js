/**
 * SVG Download and Copy Functionality
 * Adds the ability to download SVG files and copy SVG code to clipboard
 */

document.addEventListener('DOMContentLoaded', function() {
    // Get all download buttons
    const downloadButtons = document.querySelectorAll('.download-icon');
    const copyButtons = document.querySelectorAll('.copy-icon');
    
    // Add click event listeners to download buttons
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const filePath = this.getAttribute('data-file');
            downloadSVG(filePath);
        });
    });
    
    // Add click event listeners to copy buttons
    copyButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const filePath = this.getAttribute('data-file');
            copySVGToClipboard(filePath, this);
        });
    });
    
    /**
     * Download SVG file
     * @param {string} filePath - Path to the SVG file
     */
    function downloadSVG(filePath) {
        fetch(filePath)
            .then(response => response.text())
            .then(svgContent => {
                // Create a Blob from the SVG content
                const blob = new Blob([svgContent], { type: 'image/svg+xml' });
                
                // Create a temporary URL for the Blob
                const url = URL.createObjectURL(blob);
                
                // Create a temporary link element
                const link = document.createElement('a');
                link.href = url;
                
                // Extract filename from the path
                const filename = filePath.split('/').pop();
                link.download = filename;
                
                // Append the link to the document, click it, and remove it
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Release the URL object
                URL.revokeObjectURL(url);
            })
            .catch(error => {
                console.error('Error downloading SVG:', error);
            });
    }
    
    /**
     * Copy SVG code to clipboard
     * @param {string} filePath - Path to the SVG file
     * @param {HTMLElement} button - The button that was clicked
     */
    function copySVGToClipboard(filePath, button) {
        fetch(filePath)
            .then(response => response.text())
            .then(svgContent => {
                // Copy the SVG content to clipboard
                navigator.clipboard.writeText(svgContent)
                    .then(() => {
                        // Show the tooltip
                        const tooltip = button.nextElementSibling;
                        tooltip.classList.add('show');
                        
                        // Hide the tooltip after 2 seconds
                        setTimeout(() => {
                            tooltip.classList.remove('show');
                        }, 2000);
                    })
                    .catch(error => {
                        console.error('Error copying to clipboard:', error);
                    });
            })
            .catch(error => {
                console.error('Error fetching SVG:', error);
            });
    }
});
