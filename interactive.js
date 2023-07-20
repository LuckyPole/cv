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
