Task Manager Web Application
A simple task manager web app that allows users to add, edit, delete, and mark tasks as complete, with filtering options for task management.

Key Features:
Add Task: Users can add a new task to the list.
Mark Task as Complete: Clicking the "Mark Complete" button visually marks the task as completed with a strikethrough effect.
Edit Task: Each task can be edited by clicking the "Edit" button, allowing users to update the task text.
Delete Task: Tasks can be deleted by clicking the "Delete" button.
Task Filtering: Tasks can be filtered based on status, showing all tasks, completed tasks, or pending tasks.
Smooth Animations: Tasks fade in when added and fade out when deleted.
Technologies Used:
HTML: Structuring the content of the web app.
CSS: Styling the page, including responsive design.
JavaScript: Managing dynamic task functionalities like add, edit, delete, and mark complete.
jQuery: Used for dynamic task filtering (All, Completed, Pending tasks).
How to Run the Project Locally:
Clone the Repository: Open your terminal and run the following command to clone the project:


git clone https://github.com/SmitChauhan45/TaskManager.git
Navigate to Project Folder: Change into the project directory:

cd task-manager
Open the Project: Simply open index.html in your preferred web browser. You can do this by double-clicking the file or opening it through the browser’s “Open File” option.

Make Changes (Optional): You can open index.html in your text editor of choice (e.g., VSCode, Sublime Text) and make edits if necessary. To modify the styles or functionality, you can adjust the style.css and script.js files.

Test the App:

On opening, you should see the "Task Manager" page with an input field to add tasks, along with buttons to perform task actions (Mark Complete, Edit, Delete).
Test task filtering using the dropdown in the filter section.
Project Structure:

/task-manager
│
├── index.html      # HTML structure of the application
├── style.css       # Styling (CSS) for the web app
├── script.js       # JavaScript for task functionalities (Pure JS & jQuery)
└── README.md       # Project overview (this file)
Key Features Implemented:
Add Task:

Users can input task text into a text field and click the "Add Task" button. This creates a new task entry with a "Mark Complete", "Edit", and "Delete" button.
Mark Task as Complete:

Clicking the "Mark Complete" button toggles a complete class on the task, which applies a strikethrough effect and background color change, visually marking the task as completed.
Delete Task:

Clicking the "Delete" button triggers a fade-out effect on the task element, then removes it from the task list after a short delay.
Edit Task:

Clicking the "Edit" button opens a prompt box, allowing users to change the name of the task. The updated name appears instantly in the task list once modified.
Filter Tasks (using jQuery):

A dropdown menu allows users to filter tasks based on their status:
All Tasks: Shows all tasks in the list.
Completed Tasks: Shows only tasks marked as complete.
Pending Tasks: Shows tasks that are not yet completed.
Smooth Animations:

Tasks fade in when added to the list.
Tasks fade out smoothly when deleted.
