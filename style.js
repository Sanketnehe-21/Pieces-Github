// Get the checkbox elements
const step1Checkbox = document.getElementById('step1');
const step2Checkbox = document.getElementById('step2');

// Get the section you want to scroll to
const nextSection = document.querySelector('.steps'); // Assuming the next steps are within a section with class "steps"

// Add event listeners to both checkboxes
step1Checkbox.addEventListener('change', checkBothBoxes);
step2Checkbox.addEventListener('change', checkBothBoxes);

// Function to check if both checkboxes are checked and scroll
function checkBothBoxes() {
  if (step1Checkbox.checked && step2Checkbox.checked) {
    nextSection.scrollIntoView({ 
      behavior: 'smooth' // For a smooth scrolling animation
    });
  }
}
