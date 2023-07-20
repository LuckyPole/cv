// Add this script at the end of the HTML body or in a separate JavaScript file

// Get all the dropdown parent items
const dropdownItems = document.querySelectorAll('.dropdown');

// Add event listeners to each dropdown parent item
dropdownItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.querySelector('.dropdown-menu').style.display = 'block';
  });

  item.addEventListener('mouseleave', () => {
    item.querySelector('.dropdown-menu').style.display = 'none';
  });
});
