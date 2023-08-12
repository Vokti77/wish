(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      timer = null;

  // Automatically open the card fully after a delay
  function autoOpenFully() {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 500); // Adjust the delay in milliseconds (e.g., 3000ms = 3 seconds)
  }

  // Call the autoOpenFully function with a delay when the page loads
  window.addEventListener('load', function() {
    setTimeout(autoOpenFully, 4000); // Adjust the delay before autoOpenFully in milliseconds (e.g., 5000ms = 5 seconds)
  });

  // Other event listeners for buttons can remain unchanged

}());
