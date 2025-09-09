document$.subscribe(function() {
  document.querySelectorAll('.blurred-text').forEach(function(element) {
    element.addEventListener('click', function() {
      // Toggle the 'revealed' class to add/remove blur
      element.classList.toggle('revealed');
    });
  });
});