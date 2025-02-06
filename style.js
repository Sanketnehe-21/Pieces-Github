// Get the checkbox elements
const step1Checkbox = document.getElementById('step1');
const step2Checkbox = document.getElementById('step2');
const navigateButton = document.getElementById('navigateButton');

// Function to check if both checkboxes are checked

// Add event listeners to both checkboxes
step1Checkbox.addEventListener('change', checkCheckboxes);
step2Checkbox.addEventListener('change', checkCheckboxes);
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const fetchDataButton = document.getElementById('fetchData');
    const apiResults = document.getElementById('apiResults');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        alert(`Username submitted: ${username}`);
    });

    fetchDataButton.addEventListener('click', function() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                const users = data.map(user => `<li>${user.name}</li>`).join('');
                apiResults.innerHTML = `<ul>${users}</ul>`;
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const taskCheckbox = document.getElementById('taskCompleted');

    taskCheckbox.addEventListener('change', function() {
        if (taskCheckbox.checked) {
            alert('Great job! You have completed the task. Keep practicing to improve your skills.');
        } else {
            alert('Task not completed. Try to create the HTML page as described.');
        }
    });
});

function applyStyles() {
    const cssCode = document.getElementById('cssInput').value;
    try {
        const styleSheet = document.createElement('style');
        styleSheet.innerText = cssCode;
        document.head.appendChild(styleSheet);
        document.getElementById('feedback').textContent = 'Styles applied successfully!';
    } catch (error) {
        document.getElementById('feedback').textContent = 'Error applying styles: ' + error.message;
    }
}

