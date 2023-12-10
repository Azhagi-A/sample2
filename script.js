 // Get the element by its ID
 var textElement = document.getElementById('changeColor');

 // Add a mouseover event listener
 textElement.addEventListener('mouseover', function() {
     // Change the text color on mouseover
     textElement.style.color = 'red'; // You can change this to the desired hover color
 });

 // Add a mouseout event listener to revert the color to the default on mouseout
 textElement.addEventListener('mouseout', function() {
     textElement.style.color = 'green'; // Change this to the default color
 });