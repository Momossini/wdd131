// Hamburger Menu Functionality
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Dynamic Footer - Current Year
const currentYearSpan = document.querySelector('#currentyear');
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Dynamic Footer - Last Modified Date
const lastModifiedParagraph = document.querySelector('#lastModified');
const lastModified = document.lastModified;
lastModifiedParagraph.textContent = `Last Modification: ${lastModified}`;

// Optional: Update page title when clicking navigation links
const navLinks = document.querySelectorAll('.navigation a');
const pageTitle = document.querySelector('#page-title');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        link.classList.add('active');
        
        // Update page title
        pageTitle.textContent = link.textContent;
        
        // Close mobile menu after click
        navigation.classList.remove('open');
        hamButton.classList.remove('open');
    });
});
