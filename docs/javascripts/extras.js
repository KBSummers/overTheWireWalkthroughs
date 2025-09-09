document$.subscribe(function() {
  document.querySelectorAll('.blurred-text').forEach(function(element) {
    element.addEventListener('click', function() {
      // Add the 'revealed' class to remove the blur
      element.classList.add('revealed');
    });
  });
});