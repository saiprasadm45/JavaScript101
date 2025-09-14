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