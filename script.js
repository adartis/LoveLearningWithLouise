// Smooth scrolling for navigation buttons
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Gradual banner contraction effect with image fade-out on scroll
window.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    const image = banner.querySelector('img');
    const maxHeight = 70;
    const minHeight = 25;
    const maxWidth = 70;
    const minWidth = 15;
    const scrollRange = 300;

    const scrollPos = Math.min(window.scrollY, scrollRange);
    const height = maxHeight - ((maxHeight - minHeight) * (scrollPos / scrollRange));
    const width = maxWidth - ((maxWidth - minWidth) * (scrollPos / scrollRange));

    banner.style.height = `${height}vh`;
    image.style.width = `${width}vw`;

    image.style.opacity = scrollPos >= scrollRange ? '0' : '1';
    image.style.transition = 'opacity 0.5s ease';
});

// Testimonials carousel functionality with left-to-right fade effect
const testimonials = [
    { image: './pic1.jpeg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: './pic2.jpeg', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { image: './pic3.jpeg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    { image: './pic4.jpeg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { image: './pic5.jpeg', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' }
];

let currentTestimonialIndex = 0;
let isAnimating = false;
let carouselTimer = setInterval(nextTestimonial, 5000);

// Show the specified testimonial with optional transition effect
function showTestimonial(index, direction = 'next', initialLoad = false) {
    const container = document.getElementById('testimonial-content');

    // Clear any existing testimonials on initial load
    if (initialLoad) {
        container.innerHTML = '';
    }

    // Create the testimonial element
    const newTestimonial = document.createElement('div');
    newTestimonial.className = `testimonial ${initialLoad ? '' : direction === 'next' ? 'fade-in-right' : 'fade-in-left'}`;
    newTestimonial.innerHTML = `
        <img src="${testimonials[index].image}" alt="Testimonial Image">
        <p>${testimonials[index].text}</p>
    `;

    container.appendChild(newTestimonial);

    // If not the initial load, add fade-out effect to previous testimonial
    if (!initialLoad) {
        const oldTestimonial = container.querySelector('.testimonial');
        if (oldTestimonial) {
            oldTestimonial.classList.add(direction === 'next' ? 'fade-out-left' : 'fade-out-right');
            setTimeout(() => container.removeChild(oldTestimonial), 500);
        }
    }
}

// Move to the next testimonial
function nextTestimonial() {
    if (isAnimating) return;
    isAnimating = true;
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex, 'next');
    resetCarouselTimer();
}

// Move to the previous testimonial
function previousTestimonial() {
    if (isAnimating) return;
    isAnimating = true;
    currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex, 'prev');
    resetCarouselTimer();
}

// Reset the carousel timer and re-enable clicks after animation
function resetCarouselTimer() {
    clearInterval(carouselTimer);
    carouselTimer = setInterval(nextTestimonial, 12000);
    setTimeout(() => (isAnimating = false), 500);
}

// Initialise the first testimonial on page load
window.onload = () => {
    showTestimonial(currentTestimonialIndex, 'next', true);
};
