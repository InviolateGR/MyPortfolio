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

  const section2 = document.getElementById('section-2');

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      document.querySelectorAll('#section-2 .skill-summary-wrap, #section-2 .skillset-items').forEach((element) => {
        element.classList.add('animate');
      });
    }
  }, { threshold: 1 });
  
  observer.observe(section2);



// See More Button
const projectContentContainer = document.getElementsByClassName('projectContentContainer');

function seeMoreBtn() { 
  projectContentContainer.style.height = 'auto';
};