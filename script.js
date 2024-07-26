// Get the header container element
const headerContainer = document.getElementById('header-container');

// Fetch and render the header component
fetch('header.html')
 .then(response => response.text())
 .then(html => {
    headerContainer.innerHTML = html;
  });

// Get the contact section container element
const contactSectionContainer = document.getElementById('contact-section-container');

// Fetch and render the contact section component
fetch('contact-section.html')
 .then(response => response.text())
 .then(html => {
    contactSectionContainer.innerHTML = html;
  });

