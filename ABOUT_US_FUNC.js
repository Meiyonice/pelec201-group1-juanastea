// Function to handle the "View Location" button click
function scrollToMap() {
    // The visual map background is actually positioned absolutely relative to the footer
    // We want to scroll to where the map image starts visually
    const mapSection = document.querySelector('.map-bg');
    
    if (mapSection) {
        // Since map-bg has a negative top value relative to footer, 
        // we calculate the actual page position
        const footer = document.querySelector('.footer-section');
        const footerRect = footer.getBoundingClientRect();
        const mapOffset = -692; // From CSS top: -692px
        
        const absoluteTop = window.pageYOffset + footerRect.top + mapOffset;
        
        window.scrollTo({
            top: absoluteTop,
            behavior: 'smooth'
        });
    } else {
        console.log("Map element not found");
    }
}

// Ensure images are loaded properly or log errors
window.onload = function() {
    const images = document.querySelectorAll('div[class*="bg-icon"], div[class*="image-"]');
    console.log(`Loaded ${images.length} image elements.`);
};

document.addEventListener('DOMContentLoaded', () => {
    const mainContainer = document.getElementById('mainContainer');
    const btnMission = document.getElementById('btnMission');
    const btnVision = document.getElementById('btnVision');

    // Simple state management function
    const setState = (state) => {
        mainContainer.setAttribute('data-state', state);
    };

    let missionTimeout;
    let visionTimeout;

    // --- Mission Button (Left) Events ---
    btnMission.addEventListener('mouseenter', () => {
        clearTimeout(missionTimeout); // Clear any pending exit
        setState('mission');
    });

    btnMission.addEventListener('mouseleave', () => {
        // Delay the state change slightly, allowing the mouse to move to the text card
        missionTimeout = setTimeout(() => {
            setState('default');
        }, 150); // 150ms delay
    });

    // --- Vision Button (Right) Events ---
    btnVision.addEventListener('mouseenter', () => {
        clearTimeout(visionTimeout); // Clear any pending exit
        setState('vision');
    });

    btnVision.addEventListener('mouseleave', () => {
        // Delay the state change slightly, allowing the mouse to move to the text card
        visionTimeout = setTimeout(() => {
            setState('default');
        }, 150); // 150ms delay
    });
    
    // Additional listeners to ensure the hover state is maintained if the cursor lands on the visible text box
    const cardMission = document.querySelector('.card-mission');
    const cardVision = document.querySelector('.card-vision');

    cardMission.addEventListener('mouseenter', () => {
        clearTimeout(missionTimeout);
    });
    cardMission.addEventListener('mouseleave', () => {
        setState('default');
    });

    cardVision.addEventListener('mouseenter', () => {
        clearTimeout(visionTimeout);
    });
    cardVision.addEventListener('mouseleave', () => {
        setState('default');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the "View Location" button element
    const viewLocationButton = document.querySelector('.rectangle-4280');

    // 2. Add an event listener for when the button is clicked
    viewLocationButton.addEventListener('click', (event) => {
        // Prevent the default link behavior if you want to handle it with JS
        event.preventDefault();

        // ** ADD INTERACTIVITY HERE **
        // Example: You could open the address in Google Maps in a new tab
        // const address = "Unzon Ibaba TMPI-1, Brgy. Gulang-Gulang, Lucena City, Quezon, 4301";
        // window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank');
        
        console.log('View Location button clicked!');
    });
});