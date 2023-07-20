// Get the dropdown parent element
const dropdown = document.querySelector('.dropdown');

// Get the menu icon element
const menuIcon = document.querySelector('.menu-icon');

// Add event listeners to show/hide the menu icon
dropdown.addEventListener('mouseenter', () => {
  menuIcon.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
  menuIcon.style.display = 'none';
});

// Get all the menu icon links
const menuIconLinks = document.querySelectorAll('.menu-icon a');

// Add event listeners to open links in a new tab/window
menuIconLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.stopPropagation();
  });
});

