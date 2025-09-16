let btn = document.getElementById('hambtn')
let navlist = document.getElementById('ul')

btn.addEventListener('click',()=>{
    console.log("e")
    navlist.classList.toggle('show')
})

// --- FAQ Accordion Logic ---

// 1. Select all the clickable question elements.
// document.querySelectorAll returns a list of all elements that match the selector.
const faqQuestions = document.querySelectorAll('.faq-question');

// 2. Loop through each question element.
// .forEach() is a method that executes a function once for each item in a list.
faqQuestions.forEach(question => {
    
    // 3. Add a 'click' event listener to each question.
    // This will run the code inside the curly braces every time a question is clicked.
    question.addEventListener('click', () => {
        
        // 4. Get the parent '.faq-item' of the question that was clicked.
        // 'this' refers to the element that was clicked (the .faq-question).
        // .parentElement gets the direct parent of that element.
        const parentItem = question.parentElement;
        
        // 5. Toggle the 'active' class on the parent item.
        // .classList.toggle() adds the class if it's not there, and removes it if it is.
        // This is what triggers our CSS animations to show/hide the answer and rotate the icon.
        parentItem.classList.toggle('active');
    });
});

// ==================================================
// ===== SLIDER AND CAROUSEL LOGIC STARTS HERE =====
// ==================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Hero Image Slider ---
    const heroSliderElement = document.querySelector('.hero-slider');
    // Only run the hero slider code if the element actually exists on the page.
    if (heroSliderElement) {
        const slides = heroSliderElement.querySelectorAll('.slide');
        const dotsContainer = heroSliderElement.querySelector('.slider-dots');
        const prevBtn = heroSliderElement.querySelector('.slider-btn.prev');
        const nextBtn = heroSliderElement.querySelector('.slider-btn.next');
        let currentSlide = 0;
        let autoPlayInterval;

        // Function to show a specific slide
        const showSlide = (index) => {
            // Hide all slides and deactivate all dots
            slides.forEach(slide => slide.classList.remove('active'));
            dotsContainer.childNodes.forEach(dot => dot.classList.remove('active'));
            
            // Show the correct slide and activate the correct dot
            slides[index].classList.add('active');
            dotsContainer.childNodes[index].classList.add('active');
            currentSlide = index;
        };

        // Function to go to the next slide
        const nextSlide = () => {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        };
        
        // Create dots for each slide
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                showSlide(index);
                // Reset autoplay timer when user interacts
                clearInterval(autoPlayInterval);
                autoPlayInterval = setInterval(nextSlide, 5000);
            });
            dotsContainer.appendChild(dot);
        });

        // Add event listeners for next/prev buttons
        prevBtn.addEventListener('click', () => {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 5000);
        });

        nextBtn.addEventListener('click', () => {
            nextSlide();
            clearInterval(autoPlayInterval);
            autoPlayInterval = setInterval(nextSlide, 5000);
        });

        // Initial setup
        showSlide(0);
        autoPlayInterval = setInterval(nextSlide, 5000); // Autoplay every 5 seconds
    }

    // --- 2. Feature Cards Carousel ---
    const featureCarouselElement = document.querySelector('.feature-carousel');
    // Only run this code if the feature carousel exists.
    if (featureCarouselElement) {
        const track = featureCarouselElement.querySelector('.feature-track');
        const cards = featureCarouselElement.querySelectorAll('.feature-card');
        const prevBtn = featureCarouselElement.querySelector('.feature-btn.prev');
        const nextBtn = featureCarouselElement.querySelector('.feature-btn.next');
        let position = 0;
        
        // Calculate the width of a single card including its margin/gap
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(track).gap);

        const updatePosition = () => {
            track.style.transform = `translateX(${position}px)`;
        };

        nextBtn.addEventListener('click', () => {
            // Calculate the maximum scrollable distance
            const maxPosition = -(track.scrollWidth - featureCarouselElement.offsetWidth);
            // Move to the next card if not at the end
            if (position > maxPosition) {
                position -= cardWidth;
                updatePosition();
            }
        });

        prevBtn.addEventListener('click', () => {
            // Move to the previous card if not at the beginning
            if (position < 0) {
                position += cardWidth;
                updatePosition();
            }
        });
    }

    // --- 3. Company Logo Slider ---
    // This slider is pure CSS and requires no JavaScript to function.
    // The animation is handled by the 'scroll' @keyframes rule in style.css.
});