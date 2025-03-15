// Function to create a simple banner
function createBanner() {
    const bannerContainer = document.getElementById('banner');
    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerHTML = `
        <img src="banner1.jpeg" alt="Banner Image" class="banner-image">
        <span class="banner-text">Love Learning with Louise</span>
        <nav class="banner-nav">
            <a href="index.html" onclick="transitionPage(event)">Home</a>
            <a href="signup.html" onclick="transitionPage(event)">Sign Up Today</a>
            <a href="about.html" onclick="transitionPage(event)">About Us</a>
        </nav>
    `;
    bannerContainer.appendChild(banner);
}

// Initialise the banner on page load
window.onload = () => {
    createBanner();
    showTestimonial(currentTestimonialIndex);
    document.body.classList.add('fade-in');
};

let currentTestimonialIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

function prevTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial');
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
}

function transitionPage(event) {
    event.preventDefault();
    const targetUrl = event.currentTarget.href;
    document.body.style.backgroundColor = 'rgba(128, 0, 128, 0.5)'; // Soft purple color
    document.querySelector('.content').style.opacity = 0;

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match the transition duration
}