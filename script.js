const workoutNameInput = document.getElementById("workout-name");

const workoutTypeInput = document.getElementById("workout-type");

const workoutDateInput = document.getElementById("workout-date");

const addButton = document.getElementById("add-button");

const workoutList = document.getElementById("workout-list");

addButton.addEventListener("click", function() {

    const workoutName = workoutNameInput.value.trim();

    const workoutType = workoutTypeInput.value;

    const workoutDate = workoutDateInput.value;

    if (workoutName === "") {
        alert("Please enter a workout name.");
        return;
    }

    const workoutEntry = document.createElement("div");

    workoutEntry.innerHTML = `
        <h3>${workoutName}</h3>
        <p>Type: ${workoutType}</p>
        <p>Date: ${workoutDate}</p>
        <p>Status : In Progress</p>

        <button class="complete-button">Mark as Complete</button>
        <button class="delete-button">Delete</button>
    `;

    workoutList.appendChild(workoutEntry);

    const completeButton = workoutEntry.querySelector(".complete-button");

    completeButton.addEventListener("click", function() {
        const statusText = workoutEntry.querySelector("p:nth-of-type(3)");
        statusText.textContent = "Status : Completed";
    });

    const deleteButton = workoutEntry.querySelector(".delete-button");

    deleteButton.addEventListener("click", function() {
        if (confirm("Are you sure you want to delete this workout?")) {
            workoutEntry.remove();
        }
    
    });

});