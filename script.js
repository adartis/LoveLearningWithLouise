// Smooth scrolling for navigation buttons
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

// Gradual banner contraction effect with image fade-out on scroll
window.addEventListener('scroll', () => {
    const banner = document.getElementById('banner');
    const image = banner.querySelector('img');
    const maxHeight = 100;
    const minHeight = 5;
    const maxWidth = 70;
    const minWidth = 5;
    const scrollRange = 100;

    const scrollPos = Math.min(window.scrollY, scrollRange);

    // Calculate height and enforce a minimum
    let height = maxHeight - ((maxHeight - minHeight) * (scrollPos / scrollRange));
    height = Math.max(height, 15); // Ensure height doesn't go below 15vw

    // Calculate width and enforce a minimum
    let width = maxWidth - ((maxWidth - minWidth) * (scrollPos / scrollRange));
    width = Math.max(width, 1); // Ensure width doesn't go below 15vw

    banner.style.height = `${height}vh`;
    image.style.width = `${width}vw`;

    image.style.opacity = scrollPos >= scrollRange ? '0' : '1';
    image.style.transition = 'opacity 0.5s ease';
});

// Testimonials grid data
const testimonials = [
    { image: 'pic1.jpeg', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { image: 'pic2.jpeg', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { image: 'pic3.jpeg', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.' },
    { image: 'pic4.jpeg', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.' },
    { image: 'pic5.jpeg', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa.' },
    { image: 'pic6.jpeg', text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
    { image: 'pic7.jpeg', text: 'Curabitur blandit tempus porttitor.' },
    { image: 'pic1.jpeg', text: 'Aenean lacinia bibendum nulla sed consectetur.' },
    { image: 'pic2.jpeg', text: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.' },
    { image: 'pic3.jpeg', text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' },
    { image: 'pic4.jpeg', text: 'Cras mattis consectetur purus sit amet fermentum.' },
    { image: 'pic5.jpeg', text: 'Etiam porta sem malesuada magna mollis euismod.' },
];

// Function to create the testimonials grid
function createTestimonialsGrid() {
    const gridContainer = document.getElementById('testimonial-grid');
    testimonials.forEach((testimonial) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <img src="${testimonial.image}" alt="Testimonial Image">
            <p class="overlay-text">${testimonial.text}</p>
        `;
        gridContainer.appendChild(gridItem);
    });
}

// Initialise the testimonials grid on page load
window.onload = () => {
    createTestimonialsGrid();
};
