document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (!username || !password) {
            event.preventDefault();
            alert("Please fill in both fields.");
        } else {
            // Simulate successful login and redirect to dashboard
            event.preventDefault();
            window.location.href = "dashboard.html";
        }
    });
});


function submitAttendance() {
    const attendanceData = [];

    // Get all rows in the table
    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const studentName = row.querySelector("td").innerText;
        const present = row.querySelector("input[value='present']").checked;
        const absent = row.querySelector("input[value='absent']").checked;

        let status;
        if (present) {
            status = "Present";
        } else if (absent) {
            status = "Absent";
        } else {
            status = "Unmarked";
        }

        attendanceData.push({ student: studentName, status: status });
    });

    console.log("Attendance Data:", attendanceData);
    alert("Attendance submitted!");

    // In a real app, here you'd send the data to a backend server.
}

// Toggle navbar menu on small screens
document.querySelector('.toggle-button').addEventListener('click', function () {
    this.classList.toggle('active');
});
