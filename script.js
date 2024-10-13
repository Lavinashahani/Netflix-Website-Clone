document.addEventListener('DOMContentLoaded', function() {
    var faqBoxes = document.querySelectorAll('.faqbox');

    // Loop through each FAQ box
    faqBoxes.forEach(function(faqbox) {
        // Add click event listener to each FAQ box
        faqbox.addEventListener('click', function() {
            // Toggle the display of the next sibling element with the class 'ans' after 1 second
            var answer = faqbox.nextElementSibling;
            setTimeout(function() {
                answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
            }, 100); // Delay appearance by 1 second (1000 milliseconds)
        });
    });
});