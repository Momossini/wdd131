// Select the DOM elements for outputs

const currentYear = document.querySelector('#currentyear')

const lastModified = document.getElementById("lastModified");

// Use the date object
const now = new Date();

currentYear.innerHTML = now.getFullYear();

lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
