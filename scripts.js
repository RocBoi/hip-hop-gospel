// Preloader Functionality
document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.querySelector(".preloader");
    preloader.style.display = "none"; // Hide preloader when content is loaded
});

// Smooth Scrolling Effect for Anchor Links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetID);
        window.scrollTo({
            top: targetElement.offsetTop - 50, // Adjust to match the height of the header
            behavior: "smooth"
        });
    });
});

// Scroll Animations for Elements to Appear (when the user scrolls into view)
const animatedElements = document.querySelectorAll('.animate-on-scroll');

function checkScrollAnimations() {
    animatedElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            element.classList.add('in-view'); // Add class to trigger CSS animations
        }
    });
}

window.addEventListener('scroll', checkScrollAnimations);
checkScrollAnimations(); // Initial check in case elements are already in view on page load

// Social Media Sharing Popup
const socialMediaBtns = document.querySelectorAll('.social-share-btn');

socialMediaBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const platform = this.getAttribute('data-platform');
        const url = window.location.href;
        const title = document.title;

        let shareUrl = "";
        if (platform === "facebook") {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        } else if (platform === "twitter") {
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        } else if (platform === "instagram") {
            alert('Instagram sharing isn’t available directly via URL. Share manually!');
            return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// Autoplay Music Player (optional feature)
const musicPlayer = document.getElementById('music-player');
if (musicPlayer) {
    musicPlayer.autoplay = true; // Make sure the player autoplays when it's loaded
    musicPlayer.load(); // Ensure the player is reloaded to enable autoplay
}

// Example for Social Media Buttons HTML (Add to HTML in the bio or other sections):
// <button class="social-share-btn" data-platform="facebook">Share on Facebook</button>
// <button class="social-share-btn" data-platform="twitter">Share on Twitter</button>

// For social media share, you need to include the proper social media share buttons somewhere on your page.

Sent from my iPhone
