function addButtonClickListener() {
  // Get the button element
  const button = document.querySelector('button');

  // Add a click event listener to the button element
  button.addEventListener('click', function(event) {
    // Code to be executed when the button is clicked
    console.log('Button clicked!');
  });
}