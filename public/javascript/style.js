document.addEventListener('DOMContentLoaded', function () {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            
            const taskId = link.dataset.taskId; // Get the task ID from data attribute

            // Fetch task details using taskId (You need to implement this part)
            const taskDetails = fetchTaskDetails(taskId);

            // Display task details
            const taskContainer = link.closest('.task'); // Find the parent task container
            const detailsContainer = taskContainer.querySelector('.details'); // Find the details container
            detailsContainer.textContent = `Task Details: ${taskDetails.details}`; // Set the task details
            detailsContainer.classList.remove('hidden'); // Show the details
        });
    });

    // Function to fetch task details (You need to implement this)
    function fetchTaskDetails(taskId) {
        // For demonstration, return sample task details based on taskId
        // Replace this with your actual logic to fetch task details from your data source
        const tasks = {
            "1": { title: "Task 1", details: "Details of Task 1" },
            "2": { title: "Task 2", details: "Details of Task 2" }
            // Add more tasks as needed
        };
        return tasks[taskId];
    }
});
