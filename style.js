document.addEventListener('DOMContentLoaded', function() {
    const step1Checkbox = document.getElementById('step1');
    const step2Checkbox = document.getElementById('step2');
    const navigateButton = document.getElementById('navigateButton');

    // Function to check if both checkboxes are checked and show the navigation button
    function checkCheckboxes() {
        navigateButton.style.display = (step1Checkbox.checked && step2Checkbox.checked) ? 'block' : 'none';
    }

    step1Checkbox.addEventListener('change', checkCheckboxes);
    step2Checkbox.addEventListener('change', checkCheckboxes);

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

    const taskCheckbox = document.getElementById('taskCompleted');
    taskCheckbox.addEventListener('change', function() {
        alert(taskCheckbox.checked ? 'Great job! You have completed the task. Keep practicing to improve your skills.' : 'Task not completed. Try to create the HTML page as described.');
    });

    // Function to apply styles from a textarea input
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
});
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}
