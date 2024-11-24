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
    { image: 'pic1.jpeg', text: ('Family, Dubai: I wholeheartedly recommend Louise as a tutor. She tutored my daughter during her primary years, and after trying several tutors since then, it’s clear that Louise was the best. She effortlessly connected with my very shy daughter, making learning not only enjoyable but also tailored to her individual interests. Louise‘ empathy and kindness left a lasting impression. She truly has a gift for inspiring young learners!') },
    { image: 'pic2.jpeg', text: 'Year 4 mother, London: Louise has been an exception tutor for our 8 year old and has really helped her to build confidence in Maths. We really like her fun/play-based learning approach that holds the attention and focus on an 8 year old for an hour.'},
    { image: 'pic3.jpeg', text: 'Year 6 Mother, London: Louise has known my daughter for three years and has been working with her for 11+ exam prep for two.she she is the ideal combination of nurturing and challenging at the same time. She knows exactly how to motivate children and pushes them to reach their fullest potential. Louise is very professional, always on time and always prepared; she is always eager to do her work and takes it very seriously. I cannot recommend Louise highly enough.' },
    { image: 'pic4.jpeg', text: 'Year 6 Student, London: Miss Ryan has been my teacher and tutor for three years. She encourages me to get our of my comfort zone and does not hold me back. For example, a few months ago Miss Ryan challenged me to enter the BBC 500 Words competition and I made it through to the second round, whereas if I did not have her, I probably would not have even tried and I would have lost an opportunity. Miss Ryan is one of my favourite teachers/tutors (She is also really fun)!' },
    { image: 'pic5.jpeg', text: 'Reception, Year 4 and Year 6 Parent, London: Miss Ryan is a wonderful tutor, making the sessions engaging and fun whilst still providing education to a high degree. She is extremely competent across a range of ages, having tutored my 10 year old, 8 year old and even Reception-age child. Miss Ryan has great energy and always manages to have productive and effective sessions. We highly recommend her!' },
   // { image: 'pic6.jpeg', text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.' },
   // { image: 'pic7.jpeg', text: 'Curabitur blandit tempus porttitor.' },
   // { image: 'pic1.jpeg', text: 'Aenean lacinia bibendum nulla sed consectetur.' },
   // { image: 'pic2.jpeg', text: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.' },
   // { image: 'pic3.jpeg', text: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros.' },
   // { image: 'pic4.jpeg', text: 'Cras mattis consectetur purus sit amet fermentum.' },
   // { image: 'pic5.jpeg', text: 'Etiam porta sem malesuada magna mollis euismod.' },
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
