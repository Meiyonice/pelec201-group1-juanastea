// (No changes to script.js were necessary)
document.addEventListener('DOMContentLoaded', () => {
    const missionImage = document.getElementById('imageMission');
    const visionImage = document.getElementById('imageVision');
    const missionBox = document.getElementById('missionBox');
    const visionBox = document.getElementById('visionBox');
    
    // A list of timeout IDs to ensure we don't accidentally close an element that is being opened.
    let closeTimeoutId;

    // Function to close all modals and return the images to their original state
    const closeAll = () => {
        // Clear any previous scheduled closures to prevent conflicts
        if (closeTimeoutId) {
            clearTimeout(closeTimeoutId);
        }

        missionImage.classList.remove('active', 'slid');
        visionImage.classList.remove('active', 'slid');
        missionBox.classList.remove('active');
        visionBox.classList.remove('active');

        // Schedule the display: none change to run AFTER the CSS opacity transition (0.5s)
        closeTimeoutId = setTimeout(() => {
             missionBox.style.display = 'none';
             visionBox.style.display = 'none';
             closeTimeoutId = null;
        }, 500);
    }


    // Main click handler for the images
    const handleImageClick = (clickedImage, clickedBox, siblingImage) => {
        // Check if the clicked image is ALREADY active
        const isActive = clickedImage.classList.contains('active');
        
        // 1. If it's already active, we want to close it.
        if (isActive) {
            closeAll();
            return;
        }
        
        // 2. If it's not active, close everything first
        // This handles cases where the other box is open
        closeAll();

        // 3. Open the clicked box (set display: block immediately for CSS transition to work)
        clickedBox.style.display = 'block';

        // 4. Set the clicked image and its box to 'active' after a short delay to ensure display: block is processed
        setTimeout(() => {
            clickedImage.classList.add('active');
            clickedBox.classList.add('active');
            // Set the other image to 'slid' state
            siblingImage.classList.add('slid');
        }, 10);
    }

    // Event listener for Mission Image
    missionImage.addEventListener('click', (event) => {
        event.stopPropagation();
        handleImageClick(missionImage, missionBox, visionImage);
    });

    // Event listener for Vision Image
    visionImage.addEventListener('click', (event) => {
        event.stopPropagation();
        handleImageClick(visionImage, visionBox, missionImage);
    });

    // Event listener to close everything when clicking outside the active elements
    document.addEventListener('click', (event) => {
        
        const activeMission = missionImage.classList.contains('active');
        const activeVision = visionImage.classList.contains('active');

        // Only run closure logic if a modal is currently open
        if (activeMission || activeVision) {
            let clickedInsideActiveBox = false;

            // Check if the click was inside the active text box
            if (activeMission && missionBox.contains(event.target)) {
                clickedInsideActiveBox = true;
            }
            if (activeVision && visionBox.contains(event.target)) {
                clickedInsideActiveBox = true;
            }
            
            // If the click was not inside the active text box (i.e., clicked outside), close all
            if (!clickedInsideActiveBox) {
                closeAll();
            }
        }
    });
});