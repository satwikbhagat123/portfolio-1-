const cursor = document.querySelector(".cursor");
const menuItems = document.querySelectorAll(".menu-item"); // Select all menu items

const brandingHeading = document.getElementById("branding");
const brandingVideo = document.getElementById("brandingVideo");

const appsHeading = document.getElementById("apps");
const appsVideo = document.getElementById("appsVideo");

const websitesHeading = document.getElementById("websites");
const websitesVideo = document.getElementById("websitesVideo");

// const fimages = document.getElementById("fimages");
// const fleft = document.getElementById("fleft");
// const fright = document.getElementById("fright");

let timeout;

// Follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Cursor effect on mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";
    }
    timeout = setTimeout(mouseStopped, 1000);
});

// Magnetic effect on menu items with smooth animations
menuItems.forEach(menuItem => {
    menuItem.addEventListener("mousemove", (e) => {
        console.log('Mouse over menu item:', menuItem); // Log the hovered menu item
        const rect = menuItem.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        gsap.to(menuItem, {
            x: x * 0.3,
            y: y * 0.3,
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out"
        });

        // Send cursor to the back
        cursor.style.zIndex = "0";  // Send cursor to back
    });

    // Reset menu item when cursor leaves
    menuItem.addEventListener("mouseleave", () => {
        console.log('Mouse left menu item:', menuItem); // Log when leaving the menu item
        gsap.to(menuItem, {
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        // Reset cursor z-index
        cursor.style.zIndex = "999";  // Bring cursor to front
    });
});

// Cursor effect on mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// Show video on hover for Branding
brandingHeading.addEventListener("mouseenter", () => {
    brandingVideo.style.display = "block"; // Show the video
    brandingVideo.play(); // Start playing the video
});

// Hide video when not hovering for Branding
brandingHeading.addEventListener("mouseleave", () => {
    brandingVideo.pause(); // Pause the video
    brandingVideo.style.display = "none"; // Hide the video
});

appsHeading.addEventListener("mouseenter", () => {
    appsVideo.style.display = "block"; // Show the video
    appsVideo.play(); // Start playing the video
});

// Hide video when not hovering for Apps
appsHeading.addEventListener("mouseleave", () => {
    appsVideo.pause(); // Pause the video
    appsVideo.style.display = "none"; // Hide the video
});
websitesHeading.addEventListener("mouseenter", () => {
    websitesVideo.style.display = "block"; // Show the video
    websitesVideo.play(); // Start playing the video
});

// Hide video when not hovering for Apps
websitesHeading.addEventListener("mouseleave", () => {
    websitesVideo.pause(); // Pause the video
    websitesVideo.style.display = "none"; // Hide the video
});




const fleft = document.getElementById('fleft');
    const fright = document.getElementById('fright');
    const fimages = document.getElementById('fimages');

    // Function to check if both sections are scrolled to the bottom
    function checkScroll() {
        const fleftScrolledToBottom = fleft.scrollHeight - fleft.scrollTop <= fleft.clientHeight;
        const frightScrolledToBottom = fright.scrollHeight - fright.scrollTop <= fright.clientHeight;

        // If both sections are scrolled to the bottom, unpin the fimages
        if (fleftScrolledToBottom && frightScrolledToBottom) {
            fimages.classList.remove('pinned'); // Unpin the images
        } else {
            fimages.classList.add('pinned'); // Keep pinned
        }
    }

    // Function to sync scrolling between both sections
    function syncScroll(source, target) {
        target.scrollTop = source.scrollTop; // Set target scroll position equal to source
    }

    // Attach scroll event listeners to both scrollable sections
    fleft.addEventListener('scroll', (event) => {
        checkScroll();
        syncScroll(event.target, fright); // Sync fleft scroll with fright
    });

    fright.addEventListener('scroll', (event) => {
        checkScroll();
        syncScroll(event.target, fleft); // Sync fright scroll with fleft
    });

   
    window.addEventListener('scroll', () => {
        const footer = document.getElementById('footer');
        const main = document.getElementById('main');
    
        // Get the height of the main content and the window's height
        const mainBottom = main.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
    
        // Check if you've scrolled near the bottom of the main content
        if (mainBottom <= windowHeight + 100) {
            footer.classList.add('visible'); // Slide in footer
        } else {
            footer.classList.remove('visible'); // Slide out footer when scrolling up
        }
    });
    